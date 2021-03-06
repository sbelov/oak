//
// Copyright 2020 The Project Oak Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

//! Trusted Database example for Project Oak.
//!
//! This shows how an Oak Node can host an in-memory database and process private queries from
//! clients.
//!
//! Current example implementation uses a list of Santander Cycles in London as test database:
//! https://tfl.gov.uk/tfl/syndication/feeds/cycle-hire/livecyclehireupdates.xml
//!
//! Trusted Database example consists of two Oak Nodes: Main Node and Handler Node.
//!
//! Upon receiving a client request, Main Node creates a new dedicated Handler Node and proxies
//! the request to it. Main Node also contains the database of Points Of Interest and shares it with
//! all newly created Handler Nodes.
//!
//! The key idea is that clients don't need to trust any particular Wasm module and only need to
//! trust in the Oak implementation. Thus clients don't need to use module hash or module signature
//! labels and can only assign their token labels to the data.

pub mod proto {
    pub mod oak {
        pub use oak::proto::oak::invocation;
        pub mod examples {
            pub mod trusted_database {
                include!(concat!(
                    env!("OUT_DIR"),
                    "/oak.examples.trusted_database.rs"
                ));
                include!(concat!(
                    env!("OUT_DIR"),
                    "/oak.examples.trusted_database_command.rs"
                ));
            }
        }
    }
}

mod database;
mod handler;
#[cfg(test)]
mod tests;

use database::load_database;
use log::{debug, error};
use oak::{grpc, io::SenderExt, proto::oak::invocation::GrpcInvocationReceiver, Node, OakError};
use proto::oak::examples::trusted_database::{PointOfInterest, TrustedDatabaseCommand};

/// Oak Node that contains an in-memory database.
pub struct TrustedDatabaseNode {
    points_of_interest: Vec<PointOfInterest>,
}

impl Node<grpc::Invocation> for TrustedDatabaseNode {
    fn handle_command(&mut self, invocation: grpc::Invocation) -> Result<(), OakError> {
        // Create a client request handler Node.
        debug!("Creating handler Node");
        let (sender, receiver) =
            oak::io::channel_create::<TrustedDatabaseCommand>().map_err(|error| {
                error!("Couldn't create command channel: {:?}", error);
                OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
            })?;
        // TODO(#1406): Use client assigned label for creating a new handler Node.
        oak::node_create(
            &oak::node_config::wasm("app", "handler_oak_main"),
            receiver.handle,
        )
        .map_err(|error| {
            error!("Couldn't create handler Node: {:?}", error);
            OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
        })?;
        oak::channel_close(receiver.handle.handle).map_err(|error| {
            error!("Couldn't close receiver channel: {:?}", error);
            OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
        })?;

        // Create a gRPC invocation channel for forwarding requests to the
        // `TrustedDatabaseHandlerNode`.
        let (invocation_sender, invocation_receiver) =
            oak::io::channel_create::<grpc::Invocation>().map_err(|error| {
                error!("Couldn't create gRPC invocation channel: {:?}", error);
                OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
            })?;

        // Create a command message that contains a copy of the database.
        let command = TrustedDatabaseCommand {
            invocation_receiver: Some(GrpcInvocationReceiver {
                receiver: Some(invocation_receiver),
            }),
            points_of_interest: self.points_of_interest.to_vec(),
        };

        // Send the command massage to create a `TrustedDatabaseHandlerNode`
        debug!("Sending command message to handler Node");
        sender.send(&command).map_err(|error| {
            error!("Couldn't send command to handler Node: {:?}", error);
            OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
        })?;
        oak::channel_close(sender.handle.handle).expect("Couldn't close sender channel");

        // Send the original gRPC invocation to the `TrustedDatabaseHandlerNode`
        debug!("Sending gRPC invocation to handler Node");
        invocation_sender.send(&invocation).map_err(|error| {
            error!("Couldn't send gRPC invocation to handler Node: {:?}", error);
            OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
        })?;
        oak::channel_close(invocation_sender.handle.handle).map_err(|error| {
            error!("Couldn't close sender channel: {:?}", error);
            OakError::OakStatus(oak_abi::OakStatus::ErrInternal)
        })?;

        Ok(())
    }
}

oak::entrypoint!(oak_main => |in_channel| {
    oak::logger::init_default();
    let config_map = oak::app_config_map(in_channel).expect("Couldn't read config map");
    let points_of_interest = load_database(config_map).expect("Couldn't load database");
    let grpc_channel =
        oak::grpc::server::init("[::]:8080").expect("Couldn't create gRPC server pseudo-Node");
    oak::run_event_loop(TrustedDatabaseNode { points_of_interest }, grpc_channel);
});

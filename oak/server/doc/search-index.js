var searchIndex = JSON.parse('{\
"oak_loader":{"doc":"A utility binary to run Oak Runtime.","i":[[5,"main","oak_loader","Main execution point for the Oak loader.",null,[[],["result",6]]],[0,"options","","Helper functions to parse input arguments and create an…",null,null],[3,"Opt","oak_loader::options","Command line options for the Oak loader.",null,null],[12,"application","","",0,null],[12,"grpc_tls_private_key","","",0,null],[12,"grpc_tls_certificate","","",0,null],[12,"root_tls_certificate","","",0,null],[12,"oidc_client","","",0,null],[12,"metrics_port","","",0,null],[12,"no_metrics","","",0,null],[12,"introspect_port","","",0,null],[12,"no_introspect","","",0,null],[12,"config_files","","",0,null],[3,"ConfigEntry","","A specification of a configuration entry as human readable…",null,null],[12,"key","","",1,null],[12,"filename","","",1,null],[5,"create_runtime_config","","Parse input options and create a `RuntimeConfiguration`.",null,[[],[["runtimeconfiguration",3],["result",6]]]],[5,"parse_config_map","","Parse a collection of configuration entries and return the…",null,[[],[["result",6],["configmap",3]]]],[5,"create_grpc_config","","Create the overall [`oak_runtime::GrpcConfiguration`] from…",null,[[["opt",3]],[["result",6],["grpcconfiguration",3]]]],[5,"get_root_tls_certificate_or_default","","If `oak_debug` is enabled, read root TLS certificate from…",null,[[["opt",3]],[["result",6],["string",3]]]],[5,"get_oidc_client_info","","Parse OpenID Connect client configuration file into a…",null,[[["opt",3]],[["option",4],["result",6]]]],[5,"get_default_root_tls_certs","","Gets the default root TLS certificates from the embedded…",null,[[],[["result",6],["string",3]]]],[5,"create_app_config","","Parse application configuration into an instance of…",null,[[["opt",3]],[["result",6],["applicationconfiguration",3]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"equivalent","","",1,[[]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"clone","","",0,[[],["opt",3]]],[11,"clone","","",1,[[],["configentry",3]]],[11,"eq","","",1,[[["configentry",3]]]],[11,"ne","","",1,[[["configentry",3]]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"from_str","","",1,[[],["result",4]]],[11,"clap","","",0,[[],["app",3]]],[11,"from_clap","","",0,[[["argmatches",3]]]],[11,"augment_clap","","",0,[[["app",3]],["app",3]]],[11,"is_subcommand","","",0,[[]]]],"p":[[3,"Opt"],[3,"ConfigEntry"]]},\
"oak_runtime":{"doc":"Oak Runtime implementation","i":[[3,"Runtime","oak_runtime","Runtime structure for configuring and running a set of Oak…",null,null],[12,"metrics_data","","",0,null],[3,"RuntimeConfiguration","","Configuration options that govern the behaviour of the…",null,null],[12,"metrics_port","","Port to run a metrics server on, if provided.",1,null],[12,"introspect_port","","Port to run an introspection server on, if provided.",1,null],[12,"grpc_config","","gRPC-specific options.",1,null],[12,"app_config","","Application configuration.",1,null],[12,"config_map","","Start-of-day configuration to feed to the running…",1,null],[3,"GrpcConfiguration","","Configuration options related to gRPC pseudo-Nodes.",null,null],[12,"grpc_server_tls_identity","","TLS identity to use for all gRPC Server Nodes.",2,null],[12,"oidc_client_info","","OpenID Connect Authentication client information.",2,null],[12,"grpc_client_root_tls_certificate","","Root TLS certificate to use for all gRPC Client Nodes.",2,null],[0,"auth","","Authentication functionality.",null,null],[0,"oidc_utils","oak_runtime::auth","OpenID Connect utilities for exchanging authorisation…",null,null],[3,"Claims","oak_runtime::auth::oidc_utils","Claims encoded into the identity token. Reference:…",null,null],[3,"ClientInfo","","The OpenID Connect client ID and client secret contained…",null,null],[12,"client_id","","The client ID.",3,null],[12,"client_secret","","The client secret.",3,null],[3,"TokenError","","Represents a token validation error.",null,null],[5,"parse_client_info_json","","Parses the content of the downloaded OpenID Connect client…",null,[[],[["clientinfo",3],["box",3],["result",4]]]],[5,"exchange_code_for_token","","Exchanges an authorisation code for an ID token and…",null,[[]]],[11,"new","","",4,[[],["tokenerror",3]]],[0,"config","oak_runtime","Functionality covering configuration of a Runtime instance.",null,null],[5,"configure_and_run","oak_runtime::config","Configures a [`Runtime`] from the given…",null,[[["runtimeconfiguration",3]],[["arc",3],["oakstatus",4],["result",4]]]],[5,"load_certificate","","Load a PEM encoded TLS certificate, performing (minimal)…",null,[[],[["certificate",3],["result",4]]]],[0,"proto","oak_runtime","Auto-generated code derived from protocol buffer…",null,null],[0,"oak","oak_runtime::proto","",null,null],[0,"authentication","oak_runtime::proto::oak","",null,null],[3,"AuthParameters","oak_runtime::proto::oak::authentication","Parameters needed by clients to initiate OpenID Connect…",null,null],[12,"client_id","","",5,null],[12,"auth_endpoint","","TODO(#922): Add support for scope, state and code challenge.",5,null],[3,"IdentityTokenRequest","","Request for exchanging an authorisation code for an…",null,null],[12,"auth_code","","",6,null],[3,"IdentityTokenResponse","","Wrapper for the exchanged identity token.",null,null],[12,"token","","",7,null],[0,"authentication_server","","Generated server implementations.",null,null],[8,"Authentication","oak_runtime::proto::oak::authentication::authentication_server","Generated trait containing gRPC methods that should be…",null,null],[10,"get_auth_parameters","","Gets the parameters needed by a client to make an…",8,[[["request",3]],[["box",3],["pin",3]]]],[10,"get_token_from_code","","Exchanges an authorisation code for an identity token.",8,[[["request",3],["identitytokenrequest",3]],[["pin",3],["box",3]]]],[0,"introspection_events","oak_runtime::proto::oak","",null,null],[3,"Event","oak_runtime::proto::oak::introspection_events","This messages defines an event sent by the Oak Runtime to…",null,null],[12,"timestamp","","",9,null],[12,"event_details","","",9,null],[3,"NodeCreated","","",null,null],[12,"node_id","","",10,null],[3,"NodeDestroyed","","",null,null],[12,"node_id","","",11,null],[3,"ChannelCreated","","",null,null],[12,"node_id","","",12,null],[12,"channel_id","","",12,null],[3,"ChannelDestroyed","","",null,null],[12,"node_id","","",13,null],[12,"channel_id","","",13,null],[3,"HandleCreated","","",null,null],[12,"node_id","","",14,null],[12,"channel_id","","",14,null],[12,"handle","","",14,null],[3,"HandleDestroyed","","",null,null],[12,"node_id","","",15,null],[12,"channel_id","","",15,null],[12,"handle","","",15,null],[3,"MessageEnqueued","","",null,null],[12,"node_id","","",16,null],[12,"channel_id","","",16,null],[12,"included_handles","","",16,null],[3,"MessageDequeued","","",null,null],[12,"node_id","","",17,null],[12,"channel_id","","",17,null],[12,"acquired_handles","","",17,null],[0,"event","","Nested message and enum types in `Event`.",null,null],[4,"EventDetails","oak_runtime::proto::oak::introspection_events::event","",null,null],[13,"NodeCreated","","",18,null],[13,"NodeDestroyed","","",18,null],[13,"ChannelCreated","","",18,null],[13,"ChannelDestroyed","","",18,null],[13,"HandleCreated","","",18,null],[13,"HandleDestroyed","","",18,null],[13,"MessageEnqueued","","",18,null],[13,"MessageDequeued","","",18,null],[11,"encode","","",18,[[]]],[11,"merge","","",18,[[["option",4],["wiretype",4],["decodecontext",3]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",18,[[]]],[0,"time","oak_runtime","Roughtime client implementation to provide a source of…",null,null],[3,"RoughtimeServer","oak_runtime::time","Specifies the details of a Roughtime server.",null,null],[3,"RoughtimeClient","","A client for requesting Roughtime from multiple servers.",null,null],[4,"RoughtimeError","","Possible errors returned by the Roughtime client.",null,null],[13,"Base64Error","","",19,null],[13,"InvalidSignature","","",19,null],[13,"IoError","","",19,null],[13,"MidPointTooSmall","","",19,null],[13,"NotEnoughOverlappingIntervals","","",19,null],[12,"actual","oak_runtime::time::RoughtimeError","",20,null],[12,"expected","","",20,null],[13,"RadiusTooLarge","oak_runtime::time","",19,null],[13,"RoughenoughError","","",19,null],[13,"TimeoutError","","",19,null],[5,"get_default_servers","","Gets the default Roughtime servers in the ecosystem.",null,[[],[["roughtimeserver",3],["vec",3]]]],[6,"MicrosSinceEpoch","","Time is given as microseconds since the UNIX epoch…",null,null],[17,"DEFAULT_MIN_OVERLAPPING_INTERVALS","","",null,null],[17,"DEFAULT_MAX_RADIUS_MICROSECONDS","","",null,null],[17,"DEFAULT_TIMEOUT_SECONDS","","",null,null],[17,"DEFAULT_SERVER_RETRIES","","",null,null],[11,"default","","Creates a new Roughtime client with the default settings.",21,[[]]],[11,"new","","Creates a new Roughtime client.",21,[[["roughtimeserver",3],["vec",3]]]],[11,"get_roughtime","","Gets the Roughtime from multiple servers.",21,[[],[["roughtimeerror",4],["result",4],["microssinceepoch",6]]]],[11,"new","","Creates a new instance.",22,[[]]],[11,"graph","oak_runtime","Generate a Graphviz dot graph that shows the current shape…",0,[[],["string",3]]],[11,"html","","Generate an HTML page that describes the internal state of…",0,[[],["string",3]]],[11,"object_counts","","Return counts of the number of Nodes and channels…",0,[[]]],[11,"introspection_event","","Generates an introspection event recording a modification…",0,[[["eventdetails",4]]]],[11,"gather_metrics","","Return the accumulated metrics for the `Runtime`.",0,[[],[["metricfamily",3],["vec",3]]]],[11,"is_terminating","","Return whether the [`Runtime`] is terminating.",0,[[]]],[11,"stop","","Signal termination to a [`Runtime`] and wait for its Node…",0,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"into_request","","",0,[[],["request",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"into_request","","",1,[[],["request",3]]],[11,"vzip","","",1,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"into_request","","",2,[[],["request",3]]],[11,"vzip","","",2,[[]]],[11,"from","oak_runtime::auth::oidc_utils","",23,[[]]],[11,"into","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"into_request","","",23,[[],["request",3]]],[11,"vzip","","",23,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"into_request","","",3,[[],["request",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"into_request","","",4,[[],["request",3]]],[11,"vzip","","",4,[[]]],[11,"from","oak_runtime::proto::oak::authentication","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"into_request","","",5,[[],["request",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"into_request","","",6,[[],["request",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"into_request","","",7,[[],["request",3]]],[11,"vzip","","",7,[[]]],[11,"from","oak_runtime::proto::oak::introspection_events","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"into_request","","",9,[[],["request",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"into_request","","",10,[[],["request",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"into_request","","",11,[[],["request",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"into_request","","",12,[[],["request",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"into_request","","",13,[[],["request",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"into_request","","",14,[[],["request",3]]],[11,"vzip","","",14,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"into_request","","",15,[[],["request",3]]],[11,"vzip","","",15,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"into_request","","",16,[[],["request",3]]],[11,"vzip","","",16,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"into_request","","",17,[[],["request",3]]],[11,"vzip","","",17,[[]]],[11,"from","oak_runtime::proto::oak::introspection_events::event","",18,[[]]],[11,"into","","",18,[[]]],[11,"to_owned","","",18,[[]]],[11,"clone_into","","",18,[[]]],[11,"try_from","","",18,[[],["result",4]]],[11,"try_into","","",18,[[],["result",4]]],[11,"borrow","","",18,[[]]],[11,"borrow_mut","","",18,[[]]],[11,"type_id","","",18,[[],["typeid",3]]],[11,"into_request","","",18,[[],["request",3]]],[11,"vzip","","",18,[[]]],[11,"from","oak_runtime::time","",22,[[]]],[11,"into","","",22,[[]]],[11,"try_from","","",22,[[],["result",4]]],[11,"try_into","","",22,[[],["result",4]]],[11,"borrow","","",22,[[]]],[11,"borrow_mut","","",22,[[]]],[11,"type_id","","",22,[[],["typeid",3]]],[11,"into_request","","",22,[[],["request",3]]],[11,"vzip","","",22,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"into_request","","",21,[[],["request",3]]],[11,"vzip","","",21,[[]]],[11,"from","","",19,[[]]],[11,"into","","",19,[[]]],[11,"to_string","","",19,[[],["string",3]]],[11,"try_from","","",19,[[],["result",4]]],[11,"try_into","","",19,[[],["result",4]]],[11,"borrow","","",19,[[]]],[11,"borrow_mut","","",19,[[]]],[11,"type_id","","",19,[[],["typeid",3]]],[11,"into_request","","",19,[[],["request",3]]],[11,"vzip","","",19,[[]]],[11,"drop","oak_runtime","",0,[[]]],[11,"from","oak_runtime::time","",19,[[["error",3]]]],[11,"from","","",19,[[["error",4]]]],[11,"from","","",19,[[["decodeerror",4]]]],[11,"clone","oak_runtime::auth::oidc_utils","",3,[[],["clientinfo",3]]],[11,"clone","","",4,[[],["tokenerror",3]]],[11,"clone","oak_runtime::proto::oak::authentication","",5,[[],["authparameters",3]]],[11,"clone","","",6,[[],["identitytokenrequest",3]]],[11,"clone","","",7,[[],["identitytokenresponse",3]]],[11,"clone","oak_runtime::proto::oak::introspection_events","",9,[[],["event",3]]],[11,"clone","oak_runtime::proto::oak::introspection_events::event","",18,[[],["eventdetails",4]]],[11,"clone","oak_runtime::proto::oak::introspection_events","",10,[[],["nodecreated",3]]],[11,"clone","","",11,[[],["nodedestroyed",3]]],[11,"clone","","",12,[[],["channelcreated",3]]],[11,"clone","","",13,[[],["channeldestroyed",3]]],[11,"clone","","",14,[[],["handlecreated",3]]],[11,"clone","","",15,[[],["handledestroyed",3]]],[11,"clone","","",16,[[],["messageenqueued",3]]],[11,"clone","","",17,[[],["messagedequeued",3]]],[11,"clone","oak_runtime","",1,[[],["runtimeconfiguration",3]]],[11,"clone","","",2,[[],["grpcconfiguration",3]]],[11,"default","oak_runtime::proto::oak::authentication","",5,[[],["authparameters",3]]],[11,"default","","",6,[[],["identitytokenrequest",3]]],[11,"default","","",7,[[],["identitytokenresponse",3]]],[11,"default","oak_runtime::proto::oak::introspection_events","",9,[[],["event",3]]],[11,"default","","",10,[[],["nodecreated",3]]],[11,"default","","",11,[[],["nodedestroyed",3]]],[11,"default","","",12,[[],["channelcreated",3]]],[11,"default","","",13,[[],["channeldestroyed",3]]],[11,"default","","",14,[[],["handlecreated",3]]],[11,"default","","",15,[[],["handledestroyed",3]]],[11,"default","","",16,[[],["messageenqueued",3]]],[11,"default","","",17,[[],["messagedequeued",3]]],[11,"default","oak_runtime","",1,[[],["runtimeconfiguration",3]]],[11,"default","","",2,[[],["grpcconfiguration",3]]],[11,"eq","oak_runtime::proto::oak::authentication","",5,[[["authparameters",3]]]],[11,"ne","","",5,[[["authparameters",3]]]],[11,"eq","","",6,[[["identitytokenrequest",3]]]],[11,"ne","","",6,[[["identitytokenrequest",3]]]],[11,"eq","","",7,[[["identitytokenresponse",3]]]],[11,"ne","","",7,[[["identitytokenresponse",3]]]],[11,"eq","oak_runtime::proto::oak::introspection_events","",9,[[["event",3]]]],[11,"ne","","",9,[[["event",3]]]],[11,"eq","oak_runtime::proto::oak::introspection_events::event","",18,[[["eventdetails",4]]]],[11,"ne","","",18,[[["eventdetails",4]]]],[11,"eq","oak_runtime::proto::oak::introspection_events","",10,[[["nodecreated",3]]]],[11,"ne","","",10,[[["nodecreated",3]]]],[11,"eq","","",11,[[["nodedestroyed",3]]]],[11,"ne","","",11,[[["nodedestroyed",3]]]],[11,"eq","","",12,[[["channelcreated",3]]]],[11,"ne","","",12,[[["channelcreated",3]]]],[11,"eq","","",13,[[["channeldestroyed",3]]]],[11,"ne","","",13,[[["channeldestroyed",3]]]],[11,"eq","","",14,[[["handlecreated",3]]]],[11,"ne","","",14,[[["handlecreated",3]]]],[11,"eq","","",15,[[["handledestroyed",3]]]],[11,"ne","","",15,[[["handledestroyed",3]]]],[11,"eq","","",16,[[["messageenqueued",3]]]],[11,"ne","","",16,[[["messageenqueued",3]]]],[11,"eq","","",17,[[["messagedequeued",3]]]],[11,"ne","","",17,[[["messagedequeued",3]]]],[11,"fmt","oak_runtime::auth::oidc_utils","",23,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::proto::oak::authentication","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::proto::oak::introspection_events","",9,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::proto::oak::introspection_events::event","",18,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::proto::oak::introspection_events","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",19,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::auth::oidc_utils","",4,[[["formatter",3]],["result",6]]],[11,"fmt","oak_runtime::time","",19,[[["formatter",3]],["result",6]]],[11,"source","oak_runtime::auth::oidc_utils","",4,[[],[["option",4],["error",8]]]],[11,"encode_raw","oak_runtime::proto::oak::authentication","",5,[[]]],[11,"merge_field","","",5,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",5,[[]]],[11,"clear","","",5,[[]]],[11,"encode_raw","","",6,[[]]],[11,"merge_field","","",6,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",6,[[]]],[11,"clear","","",6,[[]]],[11,"encode_raw","","",7,[[]]],[11,"merge_field","","",7,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",7,[[]]],[11,"clear","","",7,[[]]],[11,"encode_raw","oak_runtime::proto::oak::introspection_events","",9,[[]]],[11,"merge_field","","",9,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",9,[[]]],[11,"clear","","",9,[[]]],[11,"encode_raw","","",10,[[]]],[11,"merge_field","","",10,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",10,[[]]],[11,"clear","","",10,[[]]],[11,"encode_raw","","",11,[[]]],[11,"merge_field","","",11,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",11,[[]]],[11,"clear","","",11,[[]]],[11,"encode_raw","","",12,[[]]],[11,"merge_field","","",12,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",12,[[]]],[11,"clear","","",12,[[]]],[11,"encode_raw","","",13,[[]]],[11,"merge_field","","",13,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",13,[[]]],[11,"clear","","",13,[[]]],[11,"encode_raw","","",14,[[]]],[11,"merge_field","","",14,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",14,[[]]],[11,"clear","","",14,[[]]],[11,"encode_raw","","",15,[[]]],[11,"merge_field","","",15,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",15,[[]]],[11,"clear","","",15,[[]]],[11,"encode_raw","","",16,[[]]],[11,"merge_field","","",16,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",16,[[]]],[11,"clear","","",16,[[]]],[11,"encode_raw","","",17,[[]]],[11,"merge_field","","",17,[[["decodecontext",3],["wiretype",4]],[["result",4],["decodeerror",3]]]],[11,"encoded_len","","",17,[[]]],[11,"clear","","",17,[[]]],[11,"deserialize","oak_runtime::auth::oidc_utils","",23,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]]],"p":[[3,"Runtime"],[3,"RuntimeConfiguration"],[3,"GrpcConfiguration"],[3,"ClientInfo"],[3,"TokenError"],[3,"AuthParameters"],[3,"IdentityTokenRequest"],[3,"IdentityTokenResponse"],[8,"Authentication"],[3,"Event"],[3,"NodeCreated"],[3,"NodeDestroyed"],[3,"ChannelCreated"],[3,"ChannelDestroyed"],[3,"HandleCreated"],[3,"HandleDestroyed"],[3,"MessageEnqueued"],[3,"MessageDequeued"],[4,"EventDetails"],[4,"RoughtimeError"],[13,"NotEnoughOverlappingIntervals"],[3,"RoughtimeClient"],[3,"RoughtimeServer"],[3,"Claims"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);
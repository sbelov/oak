#
# Copyright 2018 The Project Oak Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")
load("@rules_cc//cc:defs.bzl", "cc_proto_library")
load("@rules_proto//proto:defs.bzl", "proto_library")

package(
    default_visibility = ["//visibility:public"],
    licenses = ["notice"],
)

proto_library(
    name = "log_proto",
    srcs = ["log.proto"],
    deps = [],
)

cc_proto_library(
    name = "log_cc_proto",
    deps = [":log_proto"],
)

proto_library(
    name = "storage_service_proto",
    srcs = ["storage_service.proto"],
    deps = [
        ":label_proto",
    ],
)

cc_proto_library(
    name = "storage_service_cc_proto",
    deps = [":storage_service_proto"],
)

proto_library(
    name = "storage_proto",
    srcs = ["storage.proto"],
)

cc_proto_library(
    name = "storage_cc_proto",
    deps = [":storage_proto"],
)

cc_grpc_library(
    name = "storage_cc_grpc",
    srcs = [":storage_proto"],
    grpc_only = True,
    deps = [
        ":storage_cc_proto",
        "//third_party/google/rpc:status_cc_proto",
    ],
)

proto_library(
    name = "roughtime_service_proto",
    srcs = ["roughtime_service.proto"],
)

cc_proto_library(
    name = "roughtime_service_cc_proto",
    deps = [":roughtime_service_proto"],
)

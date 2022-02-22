#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

docker run \
  --interactive \
  --publish 8080:8080 \
  --mount type=bind,source="${PWD}/config",target=/config,readonly \
  --mount type=bind,source="${PWD}/keys",target=/keys,readonly \
  --mount type=bind,source="${PWD}/policies",target=/policies,readonly \
  ghcr.io/cerbos/cerbos:latest \
  server \
  --config /config/conf.yaml

docker run -i -t -p 8080:8080 \
  -v $(pwd)/config:/config \
  -v $(pwd)/policies:/policies \
  ghcr.io/cerbos/cerbos:0.0.2 \
  server --config=/config/conf.yaml

FROM alpine:latest AS ca-certificates
RUN apk --update add ca-certificates

FROM golang:1.21-alpine AS build
WORKDIR /src
RUN --mount="type=cache,target=/go/pkg/mod/" \
    --mount="type=bind,source=go.sum,target=go.sum" \
    --mount="type=bind,source=go.mod,target=go.mod" \
    go mod download -x
RUN --mount="type=cache,target=/go/pkg/mod/" \
    --mount="type=cache,target=/root/.cache/go-build/" \
    --mount="type=bind,target=." \
    CGO_ENABLED=0 go build -v -o /build/ ./cmd/...

FROM scratch
COPY --from=ca-certificates /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=build /build/ /
COPY config.yaml /etc/otelcol-test/
EXPOSE 4317 8080
ENTRYPOINT ["/otelcol-test"]
CMD ["--config", "/etc/otelcol-test/config.yaml"]
HEALTHCHECK --interval=2s --timeout=1.5s --start-period=1s --retries=3 CMD ["/healthcheck"]

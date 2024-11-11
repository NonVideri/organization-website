FROM alpine:latest

RUN apk add --no-cache ca-certificates

WORKDIR /pb

COPY pocketbase .
COPY pb_hooks ./pb_hooks
COPY pb_migrations ./pb_migrations

RUN chmod +x ./pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
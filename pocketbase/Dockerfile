FROM alpine:latest

RUN apk add --no-cache ca-certificates

WORKDIR /pb

# Copy the executable and project files
COPY pocketbase .
COPY pb_hooks ./pb_hooks
COPY pb_migrations ./pb_migrations

# Make the executable runnable
RUN chmod +x ./pocketbase

EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
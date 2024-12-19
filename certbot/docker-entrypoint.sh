#!/bin/sh

# Run certbot with all arguments passed to the script
certbot "$@"

# Fix permissions after certbot runs
chown -R 1000:1000 /etc/letsencrypt
chmod -R 755 /etc/letsencrypt
#!/bin/bash
# init-vps.sh

# Create app directory
mkdir -p /opt/app

# Create directories for persistent data
mkdir -p /opt/app/certbot/conf
mkdir -p /opt/app/certbot/www
mkdir -p /opt/app/pb_data
mkdir -p /opt/app/flarum_db

# Set up Docker network for Traefik (optional but recommended)
docker network create web

# Set proper permissions
chown -R 1000:1000 /opt/app/pb_data
chown -R 1000:1000 /opt/app/flarum_db
chmod -R 755 /opt/app/certbot
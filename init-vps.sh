#!/bin/bash
# init-vps.sh

# Create app directory
mkdir -p /opt/app

# Create directories for persistent data
mkdir -p /opt/app/certbot/conf
mkdir -p /opt/app/certbot/www
mkdir -p /opt/app/pb_data

# Set up Docker network for Traefik (optional but recommended)
docker network create web

# Set proper permissions
chown -R 1000:1000 /opt/app/pb_data
chmod -R 755 /opt/app/certbot

# Create docker-compose override for sensitive configs
cat > /opt/app/docker-compose.override.yml << EOF
version: '3.8'

services:
  nginx:
    environment:
      - NGINX_CERT_PATH=/etc/letsencrypt/live/thrivingindividuals.org/fullchain.pem
      - NGINX_KEY_PATH=/etc/letsencrypt/live/thrivingindividuals.org/privkey.pem
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt:ro
      - /var/www/certbot:/var/www/certbot:ro

  certbot:
    environment:
      - EMAIL=${CERTBOT_EMAIL}
    volumes:
      - /etc/letsencrypt:/etc/letsencrypt
      - /var/www/certbot:/var/www/certbot
EOF
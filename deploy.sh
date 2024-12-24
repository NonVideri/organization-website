#!/bin/bash

# Initial deployment with HTTP-only config
cp nginx/conf.d/http.conf nginx/conf.d/default.conf
docker-compose up -d nginx sveltekit pocketbase

# Wait for nginx to be ready
sleep 20

# Get SSL certificates
docker-compose run --rm certbot

# Switch to HTTPS config if certificates were obtained
if [ -f "certbot/conf/live/thrivingindividuals.org/fullchain.pem" ]; then
    cp nginx/conf.d/https.conf nginx/conf.d/default.conf
    docker-compose restart nginx
fi
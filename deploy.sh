#!/bin/bash

# Stop any running containers
docker-compose down

# Ensure nginx/conf.d directory exists
mkdir -p nginx/conf.d

# Start with HTTP-only config
cat > nginx/conf.d/default.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name thrivingindividuals.org www.thrivingindividuals.org;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    location / {
        return 200 'OK';
        add_header Content-Type text/plain;
    }
}
EOF

# Start nginx alone first
docker-compose up -d nginx

# Wait for nginx to be ready
sleep 10

# Test if nginx is responding
curl -s -o /dev/null -w "%{http_code}" http://localhost/.well-known/acme-challenge/test

# If nginx is working, proceed with certbot
if [ $? -eq 0 ]; then
    docker-compose run --rm certbot

    # Only if certificates were obtained, start other services and switch to HTTPS
    if [ -f "certbot/conf/live/thrivingindividuals.org/fullchain.pem" ]; then
        cp nginx/https.conf nginx/conf.d/default.conf
        docker-compose up -d
    fi
else
    echo "Nginx is not responding properly. Please check the logs."
    docker-compose logs nginx
fi
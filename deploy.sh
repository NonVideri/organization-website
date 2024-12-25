#!/bin/bash

set -e  # Exit on any error

# Stop any running containers
docker-compose down

# Pull latest changes and rebuild images
docker-compose build --no-cache

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
if ! curl -s -o /dev/null -w "%{http_code}" http://localhost/.well-known/acme-challenge/test; then
    echo "Nginx is not responding properly. Please check the logs."
    docker-compose logs nginx
    exit 1
fi

echo "Obtaining SSL certificate..."
docker-compose run --rm certbot

# Check if certificates were obtained
if [ ! -f "certbot/conf/live/thrivingindividuals.org/fullchain.pem" ]; then
    echo "Failed to obtain SSL certificates"
    exit 1
fi

echo "Configuring HTTPS..."
cat > nginx/conf.d/default.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name thrivingindividuals.org www.thrivingindividuals.org;

    # Certbot challenges
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
        try_files $uri =404;
    }

    # Redirect all HTTP traffic to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

# Main application
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    http2 on;
    server_name thrivingindividuals.org www.thrivingindividuals.org;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/thrivingindividuals.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/thrivingindividuals.org/privkey.pem;
    
    # SSL session configuration
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;
    ssl_buffer_size 4k;

    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # Security headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header X-XSS-Protection "1; mode=block";

    # SvelteKit app
    location / {
        proxy_pass http://sveltekit:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400;
    }

    # Pocketbase API
    location /pb/ {
        rewrite ^/pb/(.*) /$1 break;
        proxy_pass http://pocketbase:8090;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # WebSocket support
        proxy_read_timeout 86400;
    }
}
EOF

# Restart nginx to apply new configuration
if ! docker-compose restart nginx; then
    echo "Failed to restart nginx with HTTPS configuration"
    exit 1
fi

echo "Starting all services..."
# Use --force-recreate to ensure we're using the new images
docker-compose up -d --force-recreate

echo "Deployment completed successfully!"
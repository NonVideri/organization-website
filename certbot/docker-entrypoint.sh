#!/bin/sh

certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "${CERTBOT_EMAIL}" \
    -d thrivingindividuals.org \
    -d www.thrivingindividuals.org \
    --agree-tos \
    --non-interactive

# Fix permissions after certbot runs
chown -R 1000:1000 /etc/letsencrypt
chmod -R 755 /etc/letsencrypt
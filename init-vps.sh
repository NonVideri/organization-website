#!/bin/bash
# init-vps.sh

sudo apt-get install -y rsync docker.io docker-compose
sudo usermod -aG docker $USER
newgrp docker

# Create app directory
sudo mkdir -p /opt/app

# Create directories for persistent data
sudo mkdir -p /opt/app/certbot/conf
sudo mkdir -p /opt/app/certbot/www
sudo mkdir -p /opt/app/pb_data
sudo mkdir -p /opt/app/flarum_db

# Set proper permissions
sudo chown -R 1000:1000 /opt/app
sudo chown -R 1000:1000 /opt/app/pb_data
sudo chown -R 1000:1000 /opt/app/flarum_db
sudo chmod -R 755 /opt/app/certbot
#!/bin/bash
# init-vps.sh

sudo apt-get update
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
sudo chown -R $USER:$USER /opt/app
sudo chmod -R 755 /opt/app

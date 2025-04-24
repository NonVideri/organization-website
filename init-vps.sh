# Not to be executed, just a list of commands to recreate VPS

# Add admin user
useradd administrator
passwd administrator
echo "administrator ALL=(ALL) ALL" >> /etc/sudoers

# Copy SSH keys from local
mkdir -p /home/administrator/.ssh
vim /home/administrator/.ssh/authorized_keys

# Disable password and root login
sudo vim /etc/ssh/sshd_config
sudo systemctl restart sshd

# Relog as admin
su administrator

# Install dependencies
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

# Set proper permissions
sudo chown -R $USER:$USER /opt/app
sudo chmod -R 755 /opt/app

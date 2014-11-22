#!/bin/bash

echo "Installing node"

sudo curl -sL https://deb.nodesource.com/setup | bash -
sudo apt-get install -y nodejs

echo "Installing bower"
sudo npm install bower -g

#!/usr/bin/bash

sudo apt-get update -y > /dev/null
sudo apt-get install nodejs -y
sudo echo "10.1.2.1 tracks.cdpsfy.es" >> /etc/hosts
export PORT=80
git clone https://sgrcdps:cdps2016@bitbucket.org/sgrcdps/cdpsfy.git
cd cdpsfy
npm install
npm start




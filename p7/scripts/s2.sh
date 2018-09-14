#!/usr/bin/bash

sudo apt-get update -y > /dev/null
sudo apt-get install nodejs -y
mkdir /mnt/nas
mount -t glusterfs 10.1.3.21:/nas /mnt/nas
sleep 5
mkdir /mnt/nas/canciones
mkdir /mnt/nas/caratulas
git clone https://sgrcdps:cdps2016@bitbucket.org/david_santosg/tracks.git
cd tracks
npm install
node index.js

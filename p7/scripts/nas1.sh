#!/usr/bin/bash

gluster peer probe 10.1.3.22
sleep 2
gluster peer probe 10.1.3.23
sleep 5
gluster peer status
gluster volume create nas replica 3 10.1.3.21:/nas 10.1.3.22:/nas 10.1.3.23:/nas force
sleep 5
gluster volume start nas
sleep 5
gluster volume info

mkdir /nas/canciones
mkdir /nas/caratulas

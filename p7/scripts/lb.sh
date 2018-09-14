#!/usr/bin/bash

sudo apt-get update -y > /dev/null

xr -dr --verbose --server tcp:0:80 --backend 10.1.2.11:80 --web-interface 0:8001 &

xr -dr --verbose --server tcp:0:8080 --backend 10.1.2.12:8080 --backend 10.1.2.13:8080 --backend 10.1.2.14:8080 --web-interface 0:8002

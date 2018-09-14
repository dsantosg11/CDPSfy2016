#!/usr/bin/bash

bin/prepare-p7-vm

sleep 10

sudo vnx -f p7.xml -v -t

sleep 10

sudo cp scripts/s1.sh /var/lib/lxc/s1/rootfs/tmp
sudo cp scripts/s2.sh /var/lib/lxc/s2/rootfs/tmp
sudo cp scripts/s3.sh /var/lib/lxc/s3/rootfs/tmp
sudo cp scripts/s4.sh /var/lib/lxc/s4/rootfs/tmp
sudo cp scripts/lb.sh /var/lib/lxc/lb/rootfs/tmp
sudo cp scripts/nas1.sh /var/lib/lxc/nas1/rootfs/tmp
sudo cp scripts/nas2.sh /var/lib/lxc/nas2/rootfs/tmp
sudo cp scripts/nas3.sh /var/lib/lxc/nas3/rootfs/tmp
sudo cp scripts/mon.sh /var/lib/lxc/mon/rootfs/tmp
sudo cp scripts/nagios.sh /var/lib/lxc/mon/rootfs/tmp
sudo cp scripts/c1.sh /var/lib/lxc/c1/rootfs/tmp
sudo cp scripts/c2.sh /var/lib/lxc/c2/rootfs/tmp

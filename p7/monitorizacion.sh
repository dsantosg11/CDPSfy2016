#!/usr/bin/bash

sudo cp nagiosconfig/*.cfg /var/lib/lxc/mon/rootfs/etc/nagios3/conf.d/

sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@mon 'sh /tmp/nagios.sh'

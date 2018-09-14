#!/usr/bin/bash

sudo apt-get install sshpass -y

sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@nas1 'sh /tmp/nas1.sh'
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@mon 'sh /tmp/mon.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@s2 'sh /tmp/s2.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@s3 'sh /tmp/s3.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@s4 'sh /tmp/s4.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@s1 'sh /tmp/s1.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@lb 'sh /tmp/lb.sh' &
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@c1 'sh /tmp/c1.sh'
sshpass -p 'xxxx' ssh -oStrictHostKeyChecking=no root@c2 'sh /tmp/c2.sh'


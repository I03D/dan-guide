#!/bin/bash

cd /home/danil/python-pystray
su -c "makepkg -sf" danil
pacman -U *.pkg* --noconfirm

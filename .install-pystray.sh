#!/bin/bash

su -c "makepkg -sf" danil
pacman -U *.pkg* --noconfirm

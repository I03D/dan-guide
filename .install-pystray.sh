#!/bin/bash

su -c "makepkg -sf" $name
pacman -U *.pkg* --noconfirm

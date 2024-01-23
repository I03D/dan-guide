#!/bin/bash

export DYNAMIC_COLORS_COLORSCHEMES=/etc/dynamic-colors/colorschemes
export XDG_CONFIG_HOME=/etc

for filename in /dev/pts/*; do
	echo $filename
	/bin/dynamic-colors switch 3024.dark.txt > $filename
done




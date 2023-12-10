#/bin/bash

for filename in /dev/pts/*; do
	echo $filename
	~/.dynamic-colors/bin/dynamic-colors switch LightScheme > $filename
done


#/bin/bash

for filename in /dev/pts/*; do
	echo $filename
	/root/.dynamic-colors/bin/dynamic-colors switch LightScheme > $filename
done


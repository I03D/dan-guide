#/bin/bash

for filename in /dev/pts/*; do
	echo $filename
	/root/.dynamic-colors/bin/dynamic-colors switch 3024.dark.txt > $filename
done


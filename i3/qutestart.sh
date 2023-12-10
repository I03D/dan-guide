#!/bin/bash

echo Open in qutebrowser:
read -e a
exec nohup firefox --new-window --search "$a"


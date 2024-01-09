#!/bin/bash

setfont /usr/share/kbd/consolefonts/cyr-sun16.psfu.gz

tmux new-session -d

tmux set -g status-style bg=red,fg=black
tmux set -g pane-border-style bg=yellow,fg=yellow
tmux set -g pane-active-border-style bg=yellow,fg=yellow
tmux set -g status-position top
tmux set -g window-style bg=red,fg=black
tmux set -g window-active-style bg=yellow,fg=black

tmux bind -n C-j select-pane -t:.+
tmux bind -n C-f select-pane -t:.+

tmux bind -n C-k send-keys -X scroll-down
tmux bind -n C-l send-keys -X scroll-up

tmux rename-window 'Dan-Guide'

tmux send-keys "sudo sh /opt/scripts/reboot_1b.sh" Enter

tmux attach

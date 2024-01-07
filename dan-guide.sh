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

tmux split-window -h

tmux send-keys 'clear; echo "Для прокрутки используйте ctrl+B, затем - pgUp и pgDown. Чтобы закрыть эту подсказку, нажмите ctrl+b, X. Для переключения между панелями используйте ctrl+j."; read' Enter

tmux split-window -v

command="cd $(dirname "$0")"
tmux send-keys "${command}; sudo sh guide.sh" enter

# tmux select-pane -t:.0 -P 'bg=yellow fg=black'
# tmux select-pane -t:.2 -P 'bg=yellow fg=black'
tmux select-pane -t:.1

tmux attach


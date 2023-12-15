#!/bin/bash
tmux new-session -d
tmux rename-window 'Dan-Guide'
tmux split-window -h
tmux send-keys '# Для прокрутки используйте ctrl+B, затем - pgUp, pgDown. Чтобы закрыть эту подсказку, нажмите ctrl+B, X.' Enter
tmux split-window -v
tmux send-keys 'sh guide.sh' enter
tmux select-pane -t 1
tmux -2 attach-session -t guide

tmux attach


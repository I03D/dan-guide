
# echo "sudo mouseless --config ~/.config/mouseless/config.yaml"

echo "Устанавливаем автоматический запуск при старте системы:"
sudo nvim /etc/systemd/system/mouseless.service
sudo systemctl enable mouseless.service
sudo systemctl start mouseless.service

echo "Проверка:"
sudo systemctl status mouseless.service
echo "Должна быть пометка \"Active: active (running)\"."

echo "Установка соответствующих настроек NeoVim и lf, если вы уже способны использовать Colemak-раскладку:"
sudo cp DanOS/nvim/ .config/nvim -r
sudo cp DanOS/nvim /root/.config/nvim -r
echo ""
sudo cp DanOS/lf .config/lf/ -r
sudo cp DanOS/lf /root/.config/lf/ -r


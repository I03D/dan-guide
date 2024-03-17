echo "Тестирование mouseless:"
echo "Проведите тест mouseless, нажав, например, alt+,"
echo ""
echo "Если ОС на виртуальной машине, возможно настоящий курсор не отображается. Тогда отключите \"интеграцию мыши.\""

echo ""

echo "Если не получается, то скорее всего, нужно загрузить модуль uinput и перезапустить систему:"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf && reboot"

echo ""

echo "[Нажмите Enter, когда удостоверитесь, что mouseless работает]."
read

clear

echo ""

echo "Установите разрешение экрана монитора:
echo "xrandr --output МОНИТОР --mode РАЗРЕШЕНИЕ

echo ""

echo "Узнать монитор:"
echo "xrandr --listmonitors"

echo ""

echo "Пример 720p-разрешения:"
echo "xrandr --output Virtual-1 --mode 1280x720

echo ""

echo "Добавьте запуск xrandr в ~/.config/i3/config."
echo "Пример:"
echo "echo \"xrandr --output Virtual-1 --mode 1280x720\" >> ~/.config/i3/config"

echo ""

echo "[Нажмите Enter для завершения установки.]"

read

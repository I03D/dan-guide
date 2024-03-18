echo "Если фокус на окне LifePart (обведено чёрным), то закройте его, - alt+k."

echo ""

echo "Тестирование mouseless:"
echo "Проведите тест mouseless, нажав, например, alt+,"
echo ""
echo "Если ОС на виртуальной машине, возможно настоящий курсор не отображается. Тогда отключите \"интеграцию мыши\"."

echo ""

echo "Если не получается, то скорее всего, нужно загрузить модуль uinput и перезапустить систему:"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf && reboot"

echo ""

echo "[Нажмите Enter, когда удостоверитесь, что mouseless работает]."
read
clear

nohup xterm &

echo "Установите разрешение экрана монитора:"
echo "xrandr --output МОНИТОР --mode РАЗРЕШЕНИЕ"

echo ""

echo "Узнать монитор:"
echo "xrandr --listmonitors"

echo ""

echo "Пример 720p-разрешения:"
echo "xrandr --output Virtual-1 --mode 1280x720"

echo ""

echo "Добавьте получившееся в ~/.config/i3/config любым редактором кода: nvim, nano и т. д."
echo "Открывать с правами администратора, напр.: sudo nvim ~/.config/i3/config."

echo ""

echo "В файле добавить в начало \"exec\", напр.:"
echo "exec xrandr --output Virtual-1 --mode 1280x720"

echo ""

echo "[По завершении настроек нажмите Enter для продолжения. Переключение фокуса между окнами осуществляется с помощью super+j / super+\;.]"
read
clear

echo "[Установка завершена, закройте все окна \(alt + k\), чтобы увидеть рабочий стол с подсказками по использованию.]"
read
clear

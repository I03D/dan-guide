#!/bin/bash

clear

echo "Нажмите Enter для начала установки программ."
read

echo ""

echo "Установка mesa..."
# Nujna li mesa?
sudo pacman -S --noconfirm mesa

echo ""

echo "Установка X11..."
sudo pacman -S --noconfirm xorg

echo ""

echo "Установка LightDM..."
sudo pacman -S --noconfirm lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm.service

echo ""

echo "Установка i3 (i3WM)..."
sudo pacman -S --noconfirm i3

echo ""

echo "Установка виртуального терминала Xterm..." # Vsyo verno?
sudo pacman -S --noconfirm xterm

echo ""

echo "Установка PulseAudio..."
sudo pacman -S --noconfirm pulseaudio

echo ""

echo "Установка git..." # Nujen li?
sudo pacman -S --noconfirm git
# git clone https://github.com/i03d/DanOS.git

echo ""

echo "Установка файлового менеджера lf..."
sudo pacman -S --noconfirm lf

echo ""

echo "Создание папки конфигурации i3..."
mkdir ~/.config/i3 -p

echo ""

echo "Перемещение файлов i3 из DanOS..."
mv DanOS/i3/* .config/i3

echo ""

echo "Установка feh для установки изображения рабочего стола:"
sudo pacman -S --noconfirm feh

echo ""

echo "Изменение прав доступа к изображению рабочего стола для i3..."
sudo chmod 777 ~/.config/i3/i3-background.png

echo ""

echo "Установка блокировщика экрана i3lock..."
sudo pacman -S --noconfirm i3lock

echo ""

echo "Изменение прав доступа к изображению блокировщика экрана..."
sudo chmod 777 ~/.config/i3/i3lock-background

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка Dynamic-colors, небоходимого для переключения фона терминалов в реальном времени:"
echo ""
echo "Перемещение файлов dynamic-colors из DanOS..."
mv DanOS/dynamic-colors/ .config/dynamic-colors/
echo "Копирование светлой цветовой схемы в .Xresources..."
cp .config/dynamic-colors/colorschemes/LightScheme .Xresources
echo ""
echo "Загрузка dynamic-colors..."
git clone https://github.com/hellricer/dynamic-colors.git
echo ""
echo "Скрытие папки добавлением точки в название..."
mv dynamic-colors/ .dynamic-colors/
echo "Изменение прав доступа к тёмной цветовой схеме для i3..."
sudo chmod 777 .config/i3/DarkTheme.sh
echo "Изменение прав доступа к тёмной цветовой схеме для i3..."
sudo chmod 777 .config/i3/LightTheme.sh
echo ""
echo "Установка gcc, требуемого для dynamic-colors..."
sudo pacman -S --noconfirm gcc
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка xkb-switch, необходимого для переключения раскладки:"
echo "Загрузка xkb-switch..."
git clone https://aur.archlinux.org/xkb-switch.git
echo "cd xkb-switch"
cd xkb-switch
echo "Ustanovka paketa base-devel dlya sborki paketa..."
sudo pacman -S --noconfirm base-devel
echo "Sborka paketa xkb-switch..."
makepkg -si
echo "cd ~/"
cd ~/
echo "Kopirovanie xkb-switch iz /usr/bin/ v /usr/local/bin/"
sudo cp /usr/bin/xkb-switch /usr/local/bin/xkb-switch
echo "Создать файл конфигурации для клавиатуры X11:"
echo "sudo nvim /etc/X11/xorg.conf.d/00-keyboard.conf"
echo ""
echo "-----------------------------------------------"
echo "Section \"InputClass\""
echo "	  Identifier \"system-keyboard\""
echo "	  MatchIsKeyboard \"on\""
echo "	  Option \"XkbLayout\" \"us,ru,us\""
echo "	  Option \"XkbModel\" \"pc104\""
echo "	  Option \"XkbVariant\" \",,colemak_dh\""
echo "	  Option \"XkbOptions\" \"\""
echo "EndSection"
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Ustanovka i nastroyka Browstarter, udobnogo launchera dlya brauzerov:"
echo "Zagruzka Browstarter..."
git clone https://github.com/i03d/Browstarter.git
echo "Kopirovanie skripta v papku i3..."
cp Browstarter/Browstarter.py ~/.config/i3/
echo "Izmenenie prav dostupa na skript..."
sudo chmod 777 .config/i3/Browstarter.py
echo "Ustanovka python, trebuemogo dlya Browstarter..."
sudo pacman -S --noconfirm python
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Устанавливаем mouseless:"
echo "Zagruzka mouseless..."
git clone https://github.com/jbensmann/mouseless.git
echo "Sozdanie papki konfiguracii..."
mkdir ~/.config/mouseless/
echo "Peremeshenie konfiguracii iz DanOS v sistemu..."
# sudo mv DanOS/mouseless/ ~/.config/mouseless
mv DanOS/mouseless/config.yaml ~/.config/mouseless/config.yaml
echo "Peremeshenie mouseless v /bin..."
sudo mv DanOS/mouseless/mouseless /bin/mouseless
echo "Izmenenie prav dostupa na mouseless..."
sudo chmod 777 /usr/bin/mouseless

echo ""

echo "Ustanovka xdotool, trebuemogo dlya mouseless..."
sudo pacman -S --noconfirm xdotool
echo ""
echo "Razreshenie chteniya polzovatelyami fayla klaviaturi..."
echo "sudo tee /etc/udev/rules.d/99-$USER.rules <<EOF"
echo "KERNEL==\"uinput\", GROUP=\"$USER\", MODE:=\"0660\""
echo "KERNEL==\"event*\", GROUP=\"$USER\", NAME=\"input/%k\", MODE=\"660\""
echo "EOF"

echo ""

echo "Zapis' sleduyushego skripta v i3 dlya zapuska..."
echo "xterm -e /opt/scripts/reboot_2.sh" >> ~/.config/i3/config

echo "Запись следующего скрипта в .bashrc для автозапуска..."
echo "if [ -z \"\$TMUX\" ]; then" >> /danil/.bashrc
echo "    setfont /usr/share/kbd/consolefonts/cyr-sun16.psfu.gz" >> /danil/.bashrc
echo "    sudo sh /opt/scripts/reboot_1a.sh" >> /danil/.bashrc
echo "fi" >> /danil/.bashrc
echo "" >> /danil/.bashrc

echo "(Rekomenduetsya otklyuchit' интеграцию мыши при использовании виртуальной машины. Так будет виден подлинный курсор, не всегда совпадающий с вашим.)"
echo "Testirovanie mouseless:"
echo "reboot"
echo "(Не забываем загружать свою ОС, а не установщик, если он ещё присутствует.)"
echo ""
sudo mouseless --config ~/.config/mouseless/config.yaml
echo "Если не получается:                 НО ЕСЛИ ВСЁ ВЕРНО, ТО ОТ РУТА ЗАПУСТИТСЯ!"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf"
echo "reboot"
echo "Posle perezagruzki provedite test mouseless, najav, naprimer, alt+,"

#!/bin/bash

# arch-chroot /mnt sudo sh /chroots/auto_2.sh

echo "Ustanovka mesa..."
# Nujna li mesa?
sudo pacman -S --noconfirm mesa
echo "Ustanovka X11..."
sudo pacman -S --noconfirm xorg

echo "Ustanovka LightDM..."
sudo pacman -S --noconfirm lightdm lightdm-gtk-greeter
sudo systemctl enable lightdm.service

echo "Ustanovka i3 (i3WM)..."
sudo pacman -S --noconfirm i3
echo "Ustanovka virtual'nogo terminala Xterm..." # Vsyo verno?
sudo pacman -S --noconfirm xterm
echo "Ustanovka PulseAudio..."
sudo pacman -S --noconfirm pulseaudio

echo "Ustanovka git..." # Nujen li?
sudo pacman -S --noconfirm git
# git clone https://github.com/i03d/DanOS.git

echo "Ustanovka faylovogo menedjera lf..."
sudo pacman -S --noconfirm lf

echo "Sozdanie papki konfiguracii i3..."
mkdir ~/.config/i3 -p

echo "Peremeshenie faylov i3 iz DanOS..."
mv DanOS/i3/* .config/i3

echo "Требуется для изображения рабочего стола:"
sudo pacman -S --noconfirm feh
sudo chmod 777 ~/.config/i3/i3-background.png
sudo pacman -S --noconfirm i3lock
sudo chmod 777 ~/.config/i3/i3lock-background

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка Dynamic-colors, небоходимого для переключения фона терминалов в реальном времени:"
echo ""
echo "Peremeshenie faylov dynamic-colors iz DanOS..."
mv DanOS/dynamic-colors/ .config/dynamic-colors/
echo "Kopirovanie svetloy cvetovoy shemi v kachestve .Xresources..."
cp .config/dynamic-colors/colorschemes/LightScheme .Xresources
echo ""
echo "Zagruzka dynamic-colors..."
git clone https://github.com/hellricer/dynamic-colors.git
echo ""
echo "Skritie papki s pomoshyu dobavleniya tochki v nazvanie..."
mv dynamic-colors/ .dynamic-colors/
echo "Izmenenie prav dostupa na tyomnuyu shemu dlya i3..."
sudo chmod 777 .config/i3/DarkTheme.sh
echo "Izmenenie prav dostupa na svetluyu shemu dlya i3..."
sudo chmod 777 .config/i3/LightTheme.sh
echo ""
echo "Ustanovka gcc, trebuemogo dlya dynamic-colors..."
sudo pacman -S --noconfirm gcc
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Ustanovka i nastroyka xkb-switch, neobhodimogo dlya pereklyucheniya raskladki:"
echo "Zagruzka xkb-switch..."
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

echo "-----------------------------------------------"
echo "Требуется xdotool; разрешить пользователям читать ввод с клавиатурного файла:"
sudo pacman -S --noconfirm xdotool
echo ""
echo "sudo tee /etc/udev/rules.d/99-$USER.rules <<EOF"
echo "KERNEL==\"uinput\", GROUP=\"$USER\", MODE:=\"0660\""
echo "KERNEL==\"event*\", GROUP=\"$USER\", NAME=\"input/%k\", MODE=\"660\""
echo "EOF"

echo "(Отключить интеграцию мыши при использовании виртуальной машины. Так будет виден подлинный курсор, не всегда совпадающий с вашим.)"
echo "Тестируем:"
echo "reboot"
echo "(Не забываем загружать свою ОС, а не установщик, если он ещё присутствует.)"
echo ""
sudo mouseless --config ~/.config/mouseless/config.yaml
echo "Если не получается:                 НО ЕСЛИ ВСЁ ВЕРНО, ТО ОТ РУТА ЗАПУСТИТСЯ!"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf"
echo "reboot"
echo "Тестируем:"
echo "sudo mouseless --config ~/.config/mouseless/config.yaml"

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


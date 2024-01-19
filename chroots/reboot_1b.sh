#!/bin/bash

clear

echo "Нажмите Enter для начала установки программ."
read

echo "Установка mesa..."
# Нужна ли mesa?
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
mkdir /home/danil/.config/i3 -p

echo ""

echo "Перемещение файлов i3 из DanOS..."
mv /root/DanOS/i3/* /home/danil/.config/i3

echo ""

echo "Установка feh для установки изображения рабочего стола:"
sudo pacman -S --noconfirm feh

echo ""

echo "Изменение прав доступа к изображению рабочего стола для i3..."
sudo chmod 777 /home/danil/.config/i3/i3-background.png

echo ""

echo "Установка блокировщика экрана i3lock..."
sudo pacman -S --noconfirm i3lock

echo ""

echo "Изменение прав доступа к изображению блокировщика экрана..."
sudo chmod 777 /home/danil/.config/i3/i3lock-background.png

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка Dynamic-colors, небоходимого для переключения фона терминалов в реальном времени:"
echo ""
echo "Перемещение файлов dynamic-colors из DanOS..."

echo ""

mv /root/DanOS/dynamic-colors/ /home/danil/.config/dynamic-colors/
echo "Копирование светлой цветовой схемы в .Xresources..."
cp /home/danil/.config/dynamic-colors/colorschemes/LightScheme /home/danil/.Xresources
echo ""
echo "Загрузка dynamic-colors..."
git clone https://github.com/hellricer/dynamic-colors.git
echo ""
echo "Скрытие папки добавлением точки в название..."

echo ""

mv dynamic-colors/ /home/danil/.dynamic-colors/
echo "Изменение прав доступа к тёмной цветовой схеме для i3..."

echo ""

sudo chmod 777 /home/danil/.config/i3/DarkTheme.sh
echo "Изменение прав доступа к светлой цветовой схеме для i3..."
sudo chmod 777 /home/danil/.config/i3/LightTheme.sh
echo ""
echo "Установка gcc, требуемого для dynamic-colors..."
sudo pacman -S --noconfirm gcc
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка xkb-switch, необходимого для переключения раскладки:"

echo ""

echo "cd /home/danil/"
cd /home/danil

echo ""

echo "Загрузка xkb-switch..."
git clone https://aur.archlinux.org/xkb-switch.git

echo ""

chmod 777 xkb-switch/

echo ""

echo "cd xkb-switch"
cd xkb-switch

echo ""

echo "Установка base-devel для сборки пакета..."
sudo pacman -S --noconfirm base-devel

echo ""

echo "Cборка пакета xkb-switch от пользователя danil..."
su -c "echo testtest | makepkg -Ssi" danil

echo ""

echo "cd /home/danil/"
cd /home/danil/

echo ""

echo "Копирование xkb-switch из /usr/bin/ в /usr/local/bin/"
sudo cp /usr/bin/xkb-switch /usr/local/bin/xkb-switch
echo "Создать файл конфигурации для клавиатуры X11:"
echo "sudo nvim /etc/X11/xorg.conf.d/00-keyboard.conf"
echo ""
echo "-----------------------------------------------"
# echo "Section \"InputClass\"" >> /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  Identifier \"system-keyboard\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  MatchIsKeyboard \"on\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  Option \"XkbLayout\" \"us,ru,us\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  Option \"XkbModel\" \"pc104\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  Option \"XkbVariant\" \",,colemak_dh\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "	  Option \"XkbOptions\" \"\"" > /etc/X11/xorg.conf.d/00-keyboard.conf
# echo "EndSection" > /etc/X11/xorg.conf.d/00-keyboard.conf
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Установка и настройка Browstarter, удобного лаунчера для браузеров:"
echo "Загрузка Browstarter..."
git clone https://github.com/i03d/Browstarter.git
echo "Копирование скрипта в папку i3..."
cp Browstarter/Browstarter.py /home/danil/.config/i3/
echo "Изменение прав доступа к скрипту..."
sudo chmod 777 .config/i3/Browstarter.py
echo "Установка python, требуемого для Browstarter..."
sudo pacman -S --noconfirm python
echo "-----------------------------------------------"

echo ""

echo "-----------------------------------------------"
echo "Устанавливаем mouseless:"
echo "Загрузка mouseless..."
git clone https://github.com/jbensmann/mouseless.git

echo ""

echo "Создание папки конфигурации..."

echo ""

mkdir /home/danil/.config/mouseless/
echo "Перемещение конфигурации из DanOS в систему..."

echo ""

# sudo mv /root/DanOS/mouseless/ /home/danil/.config/mouseless
mv /root/DanOS/mouseless/config.yaml /home/danil/.config/mouseless/config.yaml
echo "Перемещение mouseless в /bin..."

echo ""

sudo mv /root/DanOS/mouseless/mouseless /usr/local/bin/mouseless
echo "Изменение прав доступа к mouseless..." #Возможно, не стоит.

echo ""

echo "Копирование службы автозапуска mouseless..."
cp /root/DanOS/mouseless/mouseless.service /etc/systemd/system/mouseless.service

echo "Разрешение mouseless на выполнение..."
sudo chmod +x /usr/local/bin/mouseless

echo ""

echo "Включение службы..."
systemctl enable mouseless.service

echo ""

echo "Установка xdotool, требуемого для mouseless..."
sudo pacman -S --noconfirm xdotool
echo ""
echo "Разрешение чтения пользователями файла клавиатуры..."
# sudo tee /etc/udev/rules.d/99-$USER.rules <<EOF
# KERNEL=="uinput", GROUP="$USER", MODE:="0660"
# KERNEL=="event*", GROUP="$USER", NAME="input/%k", MODE="660"
# EOF

echo ""

echo "Запись следующего скрипта в i3 для запуска..."

echo ""

echo "exec --no-startup-id xterm -e sh /opt/scripts/reboot_2.sh" >> /home/danil/.config/i3/config

echo "(Рекомендуется отключить интеграцию мыши при использовании виртуальной машины. Так будет виден подлинный курсор, не всегда совпадающий с вашим.)"

# Лучше упомянуть о тестировании после перезагрузки.
echo "Тестирование mouseless:"
echo "reboot"
echo "(Не забываем загружать свою ОС, а не установщик, если он ещё присутствует.)"
echo ""
echo "sudo mouseless --config /home/danil/.config/mouseless/config.yaml"
echo "Если не получается:                 НО ЕСЛИ ВСЁ ВЕРНО, ТО ОТ РУТА ЗАПУСТИТСЯ!"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf"
echo "reboot"
echo "После перезагрузки проведите тест mouseless, нажав, например, alt+,"

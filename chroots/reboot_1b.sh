#!/bin/bash

clear

gap() {
    echo "-----------------------------------------------"
    echo -e "\n\n\n\n\n"
    echo "-----------------------------------------------"
}

echo "Добавление xrandr+feh в /etc/skel/.bashrc..."
cd /etc/skel/
echo "" > .bashrc
echo "xrandr() {" > .bashrc
echo "    xrandr \"\$@\"" > .bashrc
echo "    feh --bg-scale ~/.config/i3/i3-background.png" > .bashrc
echo "}" > .bashrc
echo "" > .bashrc
cd ~

echo "Введите имя нового пользователя с правами sudo:"
read -e username
useradd -m $username

echo ""

echo "Установка пароля для $username:"
passwd $username

echo ""

echo "Установка sudo..."
pacman -S --noconfirm sudo

echo ""

echo "Установка vim..."
pacman -S --noconfirm vim

echo ""

echo "Добавление пользователя в нужные группы..."
usermod -aG wheel,audio,video,storage $username

echo ""

echo "Выполните следующие действия:"
echo "1. EDITOR=vim visudo"
echo "2. Откомментируйте строку \"%wheel all=(all:all) all\""
read

echo "Установка mesa..."
# Нужна ли mesa?
pacman -S --noconfirm mesa

echo ""

echo "Установка X11..."
pacman -S --noconfirm xorg

echo ""

echo "Установка LightDM..."
pacman -S --noconfirm lightdm lightdm-gtk-greeter
systemctl enable lightdm.service

echo ""

echo "Установка i3 (i3WM)..."
pacman -S --noconfirm i3

echo ""

echo "Установка LifePart...
cd /bin/
git clone https://github.com/i03d/lifepart_pyqt5-realization
cd ~
echo ""

echo "Установка python-pyqt5, необходимого для LifePart..."
pacman -S --noconfirm python-pyqt5

echo ""

echo "Установка python-pystray, необходимого для LifePart..."
pacman -S --noconfirm gobject-introspection-runtime libdbusmenu-glib libdbusmenu-gtk3 libgirepository libimagequant libraqm openjpeg2 python-packaging libappindicator-gtk3 python-gobject python-pillow python-six python-xlib
git clone https://aur.archlinux.org/python-pystray
cd python-pystray
su -c "makepkg -sf" danil
cd ~/


echo ""

echo "Установка виртуального терминала Xterm..."
pacman -S --noconfirm xterm

echo ""

echo "Установка PulseAudio..."
pacman -S --noconfirm pulseaudio

echo ""

echo "Установка git..." # Nujen li?
pacman -S --noconfirm git
# git clone https://github.com/i03d/DanOS.git

echo ""

echo "Установка файлового менеджера lf..."
pacman -S --noconfirm lf

echo ""

echo "Создание папки конфигурации i3..."
mkdir /home/danil/.config/i3 -p

echo ""

echo "Перемещение файлов i3 из DanOS..."
mv /root/DanOS/i3/* /home/danil/.config/i3

echo "Разрешение \"run_lifepart.sh\" на выполнение"
chmod +x /home/danil/.config/run_lifepart.sh

echo ""

echo "Установка feh для установки изображения рабочего стола:"
pacman -S --noconfirm feh

echo ""

echo "Изменение прав доступа к изображению рабочего стола для i3..."
chmod 777 /home/danil/.config/i3/i3-background.png

echo ""

echo "Установка блокировщика экрана i3lock..."
pacman -S --noconfirm i3lock

echo ""

echo "Изменение прав доступа к изображению блокировщика экрана..."
chmod 777 /home/danil/.config/i3/i3lock-background.png


gap


echo "Установка и настройка Dynamic-colors, небоходимого для переключения фона терминалов в реальном времени:"
echo ""
echo "Перемещение файлов dynamic-colors из DanOS..."

echo ""

mv /root/DanOS/dynamic-colors/ /etc/dynamic-colors/

echo "Изменение прав доступа к /etc/dynamic-colors/colorscheme..."
chmod 006 /etc/dynamic-colors/colorscheme

echo ""

echo "Копирование светлой цветовой схемы в .Xresources..."
cp /etc/dynamic-colors/colorschemes/LightScheme /home/danil/.Xresources

echo ""

echo "Загрузка dynamic-colors..."
git clone https://github.com/hellricer/dynamic-colors.git

echo ""

echo "Скрытие папки добавлением точки в название..."

echo ""

mv dynamic-colors/bin/dynamic-colors /bin/dynamic-colors # Или лучше /usr/bin/?
echo "Изменение прав доступа к тёмной цветовой схеме для i3..."
chmod 555 /home/danil/.config/i3/DarkTheme.sh

echo ""

echo "Изменение прав доступа к светлой цветовой схеме для i3..."
chmod 555 /home/danil/.config/i3/LightTheme.sh

echo ""

echo "Установка gcc, требуемого для dynamic-colors..."
pacman -S --noconfirm gcc


gap


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

echo "Установка base-devel и cmake для сборки пакета..."
pacman -S --noconfirm base-devel cmake


echo ""

echo "Cборка пакета xkb-switch от пользователя danil..."
su -c "makepkg -sf" danil
pacman -U *.pkg* --noconfirm

echo ""

echo "cd /home/danil/"
cd /home/danil/

echo ""

echo "Копирование xkb-switch из /usr/bin/ в /usr/local/bin/"
cp /usr/bin/xkb-switch /usr/local/bin/xkb-switch


gap


echo "Установка и настройка flatpak..."
pacman -S --noconfirm flatpak
flatpak remote-add flathub https://dl.flathub.org/repo/flathub.flatpakrepo


gap


echo "Установка ungoogled-chromium..."
# git clone https://aur.archlinux.org/ungoogled-chromium-bin.git
# chmod 777 ungoogled-chromium-bin/
# cd ungoogled-chromium-bin
# su -c "makepkg -sf" danil
# pacman -U *.pkg* --noconfirm
# cd /home/danil

flatpak install -y --noninteractive com.github.Eloston.UngoogledChromium


gap


echo "Установить раскладку Colemak и соответствующие настройки для NeoVim и lf?"
echo "1. Да"
echo "2. Нет"
read colemak
if [[ $colemak == "1" ]];
then
    echo "Копирование конфигурации NeoVim в root и danil..."
    mkdir /root/.config/
    cp /root/DanOS/nvim/ /home/danil/.config/nvim -r
    cp /root/DanOS/nvim /root/.config/nvim -r
    echo ""
    echo "Копирование конфигурации lf в root и danil..."
    cp /root/DanOS/lf /home/danil/.config/lf/ -r
    cp /root/DanOS/lf /root/.config/lf/ -r
fi

echo ""

echo "Копирование файла конфигурации для клавиатуры X11..."
if [[ $colemak == "1" ]];
then
    cp /root/DanOS/.00-keyboard.conf_col /etc/X11/xorg.conf.d/00-keyboard.conf
else
    cp /root/DanOS/.00-keyboard.conf_qwt /etc/X11/xorg.conf.d/00-keyboard.conf
fi


gap


echo "Установка и настройка Browstarter, удобного лаунчера для браузеров:"
echo "Загрузка Browstarter..."
git clone https://github.com/i03d/Browstarter.git
echo "Копирование скрипта в папку i3..."
cp Browstarter/Browstarter.py /home/danil/.config/i3/
echo "Изменение прав доступа к скрипту..."
chmod 777 .config/i3/Browstarter.py
echo "Установка python, необходимого для Browstarter..."
pacman -S --noconfirm python


gap


echo "Устанавливаем mouseless:"
echo "Загрузка mouseless..."
git clone https://github.com/jbensmann/mouseless.git

echo ""

echo "Создание папки конфигурации..."

echo ""

mkdir /home/danil/.config/mouseless/
echo "Перемещение конфигурации из DanOS в систему..."

echo ""

# mv /root/DanOS/mouseless/ /home/danil/.config/mouseless
mv /root/DanOS/mouseless/config.yaml /home/danil/.config/mouseless/config.yaml
echo "Перемещение mouseless в /bin..."

mv /root/DanOS/mouseless/mouseless /usr/local/bin/mouseless

echo ""

echo "Копирование службы автозапуска mouseless..."
cp /root/DanOS/mouseless/mouseless.service /etc/systemd/system/mouseless.service

echo ""

echo "Разрешение mouseless на выполнение..."
chmod +x /usr/local/bin/mouseless

echo ""

echo "Включение службы..."
systemctl enable mouseless.service

echo ""

echo "Установка xdotool, требуемого для mouseless..."
pacman -S --noconfirm xdotool
echo ""
echo "Разрешение чтения пользователями файла клавиатуры..."
# tee /etc/udev/rules.d/99-$USER.rules <<EOF
# KERNEL=="uinput", GROUP="$USER", MODE:="0660"
# KERNEL=="event*", GROUP="$USER", NAME="input/%k", MODE="660"
# EOF

echo ""

echo "Передача /home/danil/.config/ и всего её содержимого пользователю..."



echo ""

echo "Запись следующего скрипта в i3 для запуска..."

echo ""

echo "exec --no-startup-id xterm -e sh /opt/scripts/reboot_2.sh" >> /home/danil/.config/i3/config


echo "(Не забывайте загружать свою ОС, а не установщик, если он ещё присутствует.)"
echo ""

echo "Нажмите Enter для перезагрузки."
read
reboot

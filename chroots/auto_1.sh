#!/bin/bash

echo ""
echo "Войти в систему специальным chroot'ом от arch:"
echo "arch-chroot /mnt"
read
echo "Подобрать часовой пояс (с помощью tab), например: ln -sf /usr/share/zoneinfo/Europe/Moscow"
read

echo "Настройка аппаратных часов по системным..."
hwclock --systohc

echo ""

echo "Установка локалей..."
sed -i '/en_US\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen
sed -i '/ru_RU\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen

locale-gen

echo ""

echo "Введите имя компьютера, например: archpc"

read -e hostname

echo ""

echo "Создание /etc/hostname..."
echo $hostname >> /etc/hostname

echo ""

echo "Генерация /etc/hosts..."
echo >> /etc/hosts
echo 127.0.0.1	localhost >> /etc/hosts
echo ::1	localhost >> /etc/hosts
echo 127.0.0.1	$hostname.localdomain	$hostname >> /etc/hosts

echo ""

echo "Установка пароля для администратора:"
passwd

echo ""

echo "Введите имя пользователя с правами sudo:"
read -e username
useradd -m $username

echo ""

echo "Добавление пользователя в нужные группы..."
usermod -aG wheel,audio,video,storage user

echo ""

echo "Установка sudo..."
pacman -S --noconfirm sudo

echo ""

echo "Выполните следующие команды:"
echo "1. EDITOR=nvim visudo"
echo "2. Откомментировать строку \"%wheel all=(all:all) all\""
read

echo ""

echo "Установка NetworkManager..."
pacman -S --noconfirm networkmanager
systemctl enable NetworkManager

echo ""

echo "Установка загрузчика:"
pacman -S --noconfirm grub
echo ""
echo "------------------------------------------------------------"
echo "Если присутствуют другие ОС, которые grub должен распознать:"
echo "pacman -S os-prober fuse ntfs-3g hwinfo"
echo "Разрешить использование os-prober в конфигурации grub:"
echo "nvim /etc/default/grub"
echo echo "Откомментировать строку \"grub_disable_os_prober=\"true\"\""
echo "------------------------------------------------------------"
echo ""
echo "Установить Grub:"
echo "grub-install /dev/sdX"
echo "X - буква устройства."
read
grub-mkconfig -o /boot/grub/grub.cfg

echo ""

echo "Запись следующего скрипта в .bashrc для автозапуска..."
echo "sh /opt/scripts/reboot_1a.sh" >> /home/$username/.bashrc

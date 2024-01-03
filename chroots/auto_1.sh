#!/bin/bash

echo ""
echo "Voyti v sistemu specialnim chroot'om ot arch:"
echo "arch-chroot /mnt"
read
echo "Настроить chasovoy poyas (подобрать свой): ln -sf /usr/share/zoneinfo/Europe/Moscow"
read

echo "Nastroyka apparatnih chasov po sistemnim..."
hwclock --systohc

echo ""

echo "Ustanovka lokaley..."
sed -i '/en_US\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen
sed -i '/ru_RU\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen

locale-gen

echo ""

echo "Vvedite iмя компьютера, напр.: archpc"

read -e hostname

echo ""

echo "Sozdanie /etc/hostname..."
echo $hostname >> /etc/hostname

echo ""

echo "Generacia /etc/hosts..."
echo >> /etc/hosts
echo 127.0.0.1	localhost >> /etc/hosts
echo ::1	localhost >> /etc/hosts
echo 127.0.0.1	$hostname.localdomain	$hostname >> /etc/hosts

echo ""

echo "Ustanovka parolya dlya administratora:"
passwd

echo ""

echo "Vvedite imya polzovatelya s pravami sudo:"
read -e username
useradd -m $username

echo ""

echo "Dobavlenie polzovatelya v nujnie gruppi..."
usermod -aG wheel,audio,video,storage user

echo ""

echo "Ustanovka sudo..."
pacman -S --noconfirm sudo

echo ""

echo "Vipolnite sleduyushie deystviya:"
echo "1. EDITOR=nvim visudo"
echo "2. Откомментировать строку \"%wheel all=(all:all) all\""

echo ""

echo "Ustanovka NetworkManager..."
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
echo "Ustanovit Grub:"
echo "grub-install /dev/sdX"
echo "X - bukva ustroystva."
read
grub-mkconfig -o /boot/grub/grub.cfg


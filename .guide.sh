#!/bin/bash

center() {
  termwidth="$(tput cols)"
  padding="$(printf '%0.1s' \ {1..500})"
  printf '%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}

clear

center "~ Dan-Guide ~"
echo "Вы запустили неофициальный гайд по установке ArchLinux.

Для переключения между панелями используйте любое из этих сочетаний клавиш:
ctrl+j
ctrl+n
ctrl+f
ctrl+t

Для прокрутки текста вверх/вниз:
ctrl+l / ctrl+k
ctrl+i / ctrl+e

Для продолжения нажмите Enter."

read
clear

echo "С помощью cfdisk создайте необходимые разделы, например, /boot и / (раздел, где будет храниться корневой каталог)."
echo "Под раздел boot-каталога рекомендуется выделить 300-500 MB."

read
clear

echo "Создать файловые системы:"
echo "Для разделов fat32: mkfs.fat -F32 /dev/sdxn"
echo "Для разделов ext4: mkfs.ext4 /dev/sdxn"
echo "X - буква устройства; N - цифра раздела, если есть."

read
clear

echo "Примонтируйте раздел с корневым каталогом к /mnt:"
echo "mount /dev/sdxn /mnt"
echo "X - буква устройства; N - цифра раздела, если есть."

read
clear

# echo "Выберите способ установки:"
# echo "1. Автоматически"
# echo "2. Вручную"
# read it

# clear

# case "$it" in
# "1" )

echo "Получаем gpg-ключи из archlinux-keyring..."
pacman -S --noconfirm archlinux-keyring

echo ""

echo "Установка pacman-contrib для rankmirrors..."
pacman -S --noconfirm pacman-contrib

echo ""

echo "Сортировка зеркал в mirrorlist по скорости..."
rankmirrors /etc/pacman.d/mirrorlist >> newmirrorlist
rm /etc/pacman.d/mirrorlist
mv newmirrorlist /etc/pacman.d/mirrorlist

echo ""

echo "Установка пакетов base, linux, linux-firmware и sudo..."
pacstrap /mnt --noconfirm base linux linux-firmware sudo

echo ""

echo "Генерация fstab..."
genfstab -U /mnt >> /mnt/etc/fstab

echo ""

echo "Создание /mnt/opt/scripts/..."

mkdir -p /mnt/opt/scripts/

# echo ""

echo "Копирование следующих частей скрипта..."
cp -r ./chroots/* /mnt/opt/scripts/
arch-chroot /mnt sh /opt/scripts/auto_1.sh

echo ""

echo "-----------------------------------------------"
echo "Теперь ОС может нормально запускаться; загрузите её."
echo "Самый простой вариант - извлечь носитель ArchLinux. Также можно при запуске установщика использовать \"Boot existing OS\"."
echo "[Нажмите Enter для перезагрузки.]"

read

echo ""

echo "Копирование DanOS в /mnt..."
cp ../DanOS /mnt/root/ -r

echo ""

echo "Размонтирование /mnt..."
# umount /mnt -l

echo ""

echo "Выполнение перезагрузки..."
# exit
reboot

#	;;
#"2" )
#	echo "1. Установить ядро: pacstrap /mnt base linux linux-firmware"
#	echo "2. Создать таблицы файловых систем: genfstab -U /mnt >> /mnt/etc/fstab"
#	echo "3. Специальный chroot: arch-chroot /mnt"
#
#	read
#	clear
#
#	echo "1. Настроить регион: (подобрать свой): ln -sf /usr/share/zoneinfo/Europe/Moscow"
#	echo "2. Настроить время: hwclock --systohc"
# ...
	;;
* )
	echo "error"
	;;
esac

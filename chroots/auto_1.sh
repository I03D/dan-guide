
echo "1. Настроить регион: (подобрать свой): ln -sf /usr/share/zoneinfo/Europe/Moscow"

hwclock --systohc

sed -i '/en_US\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen
sed -i '/ru_RU\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen

locale-gen

echo "Vvedite iмя компьютера, напр.: archpc"

read -e hostname

echo $hostname >> /etc/hostname

echo >> /etc/hosts
echo 127.0.0.1	localhost >> /etc/hosts
echo ::1	localhost >> /etc/hosts
echo 127.0.0.1	$hostname.localdomain	$hostname >> /etc/hosts

echo "Устанавливаем пароли, добавляем пользователей:"
passwd

echo "Vvedite imya polzovatelya s pravami sudo:"
read -e username
useradd -m $username
usermod -aG wheel,audio,video,storage user

pacman -S sudo --noconfirm
echo "1. EDITOR=nvim visudo"
echo "2. Откомментировать строку \"%wheel all=(all:all) all\""

pacman -S networkmanager --noconfirm
systemctl enable NetworkManager

echo "Установка загрузчика:"
pacman -S grub --noconfirm
echo ""
echo "------------------------------------------------------------"
echo "Если присутствуют другие ОС, которые grub должен распознать:"
echo "pacman -S os-prober fuse ntfs-3g hwinfo"
echo "Разрешить использование os-prober в конфигурации grub:"
echo "nvim /etc/default/grub"
echo echo "Откомментировать строку \"grub_disable_os_prober=\"true\"\""
echo "------------------------------------------------------------"
echo ""
echo "Vipolnit' grub-install /dev/sdX"
read
grub-mkconfig -o /boot/grub/grub.cfg

echo "Теперь ОС может нормально запускаться. Загрузить её."
echo "Если сначала запустится установщик ArchLinux - выбрать \"Boot existing OS\"."
read
exit



clear

echo "1. Настроить регион: (подобрать свой): ln -sf /usr/share/zoneinfo/Europe/Moscow"

hwclock --systohc

sed -i '/en_US\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen
sed -i '/ru_RU\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen

locale-gen


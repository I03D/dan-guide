echo "Установка менеджера обоев fastfeh:"
cd /opt/scripts/
echo "Загрузка fastfeh..."
git clone https://github.com/i03d/fastfeh
echo "Изменение прав доступа к скрипту..."
chmod -R 777 fastfeh/
echo "Создание алиаса..."
ln -s fastfeh/fastfeh.sh /bin/fastfeh
cd ~

gap

#!/bin/bash

center() {
  termwidth="$(tput cols)"
  padding="$(printf '%0.1s' \ {1..500})"
  printf '%*.*s %s %*.*s\n' 0 "$(((termwidth-2-${#1})/2))" "$padding" "$1" 0 "$(((termwidth-1-${#1})/2))" "$padding"
}
center "Something I want to print"

clear

center "~ Dan-Guide ~"
echo Вы запустили неофициальный гид по установке ArchLinux. Для переключения между панелями использовать ctrl+b, затем - влево/вправо. Для продолжения нажимайте Enter.

read
clear

echo "С помощью cfdisk создайте необходимые разделы, например, /boot и / (раздел, где будет храниться корневой каталог)."
echo "Под раздел boot-каталога рекомендуется выделить 300-500 MB."

read
clear

echo "Создать файловые системы:"
echo "Для разделов fat32: mkfs.fat -F32 /dev/sdXn"
echo "Для разделов ext4: mkfs.ext4 /dev/sdXn"

read
clear

echo "Примонтируйте раздел с корневым каталогом к /mnt:"
echo "mount /dev/sda2 /mnt"

read
clear

echo "Выберите способ установки:"
echo "1. Автоматически"
echo "2. Вручную"
read it

clear

case "$it" in
"1" )
	echo "test1"
	;;
"2" )
	echo "1. Установить ядро: pacstrap /mnt base linux linux-firmware"
	echo "2. Создать таблицы файловых систем: genfstab -U /mnt >> /mnt/etc/fstab"
	echo "3. Специальный chroot: arch-chroot /mnt"

	read
	clear

	echo "1. Настроить регион: (подобрать свой): ln -sf /usr/share/zoneinfo/Europe/Moscow"
	echo "2. Настроить время: hwclock --systohc"

	read
	clear

	echo "pacman -S neovim"
	echo "nvim /etc/locale.gen"
	echo ""
	echo "Откомментировать строки:"
	echo "en_US.UTF-8 UTF-8"
	echo "ru_RU.UTF-8 UTF-8"
	echo "(Сохранить и выйти)"
	echo "locale-gen"

	read
	clear

	echo "nvim /etc/hostname"
	echo "Ввести только имя компьютера, напр.: archpc"

	read
	clear

	echo "nvim /etc/hosts"
	echo "Оставить существующие строки, добавить:"
 	echo "----------------------------------------"
	echo "127.0.0.1 localhost"
	echo "::1		localhost"
	echo "127.0.1.1	archpc.localdomain	archpc"
 	echo "----------------------------------------"
	
	read
	clear

	echo "Устанавливаем пароли, добавляем пользователей:"
	echo "passwd"
	echo ""
	echo "useradd -m user"
	echo ""
	echo "usermod -aG wheel,audio,video,storage user"

	read
	clear

	echo "pacman -S sudo"
	echo ""
	echo "EDITOR=nvim visudo"
	echo ""
	echo "Откомментировать строку \"%wheel all=(all:all) all\""

	read
	clear

	echo "pacman -S networkmanager"
	echo "systemctl enable NetworkManager"

	read
	clear

	echo "Установка загрузчика:"
	echo "pacman -S grub"
	echo ""
	echo "------------------------------------------------------------"
	echo "Если присутствуют другие ОС, которые grub должен распознать:"
	echo "pacman -S os-prober fuse ntfs-3g hwinfo"
	echo "Разрешить использование os-prober в конфигурации grub:"
	echo "nvim /etc/default/grub"
	echo "Откомментировать строку \"grub_disable_os_prober=\"true\"\""
	echo "------------------------------------------------------------"
	echo ""
	echo "grub-install /dev/sdX"
	echo "grub-mkconfig -o /boot/grub/grub.cfg"
	
	read
	clear

	echo "pacman -S git tmux"
 	git clone https://github.com/i03d/DanOS

 	read
	clear

	echo "Теперь ОС может нормально запускаться. Загрузить её."
	echo "Если сначала запустится установщик ArchLinux - выбрать \"Boot existing OS\"."
	echo "exit"
	echo "umount /mnt -l"
	echo "reboot"

	read
	clear

	echo "sudo pacman -S mesa"
	echo "sudo pacman -S xorg"
	echo ""
	echo "sudo pacman -S lightdm lightdm-gtk-greeter"
	echo "sudo systemctl enable lightdm.service"

	read
	clear

	echo "sudo pacman -S i3"
	echo "sudo pacman -S xterm"
	echo "sudo pacman -S pulseaudio"
	
	read
	clear

	echo "sudo pacman -S lf"
	echo "mkdir ~/.config/i3 -p"
	echo "mv DanOS/i3/* ~/.config/i3"

	read
	clear

	echo "Требуется для изображения рабочего стола:"
	echo "sudo pacman -S feh"
	echo "sudo chmod 777 ~/.config/i3/i3-background.png"
	echo "sudo pacman -S i3lock"
	echo "sudo chmod 777 ~/.config/i3/i3lock-background.png"

	read
	clear

	echo "Установка и настройка Dynamic-colors, небоходимого для переключения фона терминалов в реальном времени:"
	echo "mv DanOS/dynamic-colors/ ~/.config/dynamic-colors/"
	echo "cp ~/.config/dynamic-colors/colorschemes/LightScheme ~/.Xresources"
	echo "git clone https://github.com/hellricer/dynamic-colors.git"
	echo "mv dynamic-colors/ .dynamic-colors/"
	echo "sudo chmod 777 .config/i3/DarkTheme.sh"
	echo "sudo chmod 777 .config/i3/LightTheme.sh"
	echo ""
	echo "Требуется для dynamic-colors:"
	echo "sudo pacman -S gcc"

	read
	clear

	echo "Устанавливаем xkb-switch:"
	echo "git clone https://aur.archlinux.org/xkb-switch.git"
	echo "cd xkb-switch"
	echo "sudo pacman -S base-devel"
	echo "makepkg -si"
	echo "cd ~/"
	echo "sudo cp /usr/bin/xkb-switch /usr/local/bin/xkb-switch"
	read
	clear

	echo "Создать файл конфигурации для клавиатуры X11:"
	echo "sudo nvim /etc/X11/xorg.conf.d/00-keyboard.conf"
	echo ""
	echo "-----------------------------------------------"
	echo "Section \"InputClass\""
		echo "Identifier \"system-keyboard\""
		echo "MatchIsKeyboard \"on\""
		echo "Option \"XkbLayout\" \"us,ru,us\""
		echo "Option \"XkbModel\" \"pc104\""
		echo "Option \"XkbVariant\" \",,colemak_dh\""
		echo "Option \"XkbOptions\" \"\""
	echo "EndSection"
	echo "-----------------------------------------------"

	read
	clear

	echo "git clone https://github.com/i03d/Browstarter.git"
	echo "cp Browstarter/Browstarter.py ~/.config/i3/"
	echo "sudo chmod 777 .config/i3/Browstarter.py"
	echo "Требуется для BrowStarter:"
	echo "sudo pacman -S python"
	
	read
	clear

	echo "Устанавливаем mouseless:"
	echo "git clone https://github.com/jbensmann/mouseless.git"
	echo "sudo mv DanOS/mouseless/ ~/.config/mouseless"
	echo "mkdir ~/.config/mouseless/"
	echo "mv DanOS/mouseless/config.yaml ~/.config/mouseless/config.yaml"
	echo "sudo mv DanOS/mouseless/mouseless /bin/mouseless"
	echo "sudo chmod 777 /usr/bin/mouseless"
	
	read
	clear

	echo "Требуется xdotool; разрешить пользователям читать ввод с клавиатурного файла:"
	echo "sudo pacman -S xdotool"
	echo ""
	echo "sudo tee /etc/udev/rules.d/99-$USER.rules <<EOF"
	echo "KERNEL==\"uinput\", GROUP=\"$USER\", MODE:=\"0660\""
	echo "KERNEL==\"event*\", GROUP=\"$USER\", NAME=\"input/%k\", MODE=\"660\""
	echo "EOF"
	
	read
	clear

	echo "(Отключить интеграцию мыши при использовании виртуальной машины. Так будет виден подлинный курсор, не всегда совпадающий с вашим.)"
	echo "Тестируем:"
	echo "reboot"
	echo "(Не забываем загружать свою ОС, а не установщик, если он ещё присутствует.)"
	echo ""
	echo "sudo mouseless --config ~/.config/mouseless/config.yaml"
	echo "Если не получается:                 НО ЕСЛИ ВСЁ ВЕРНО, ТО ОТ РУТА ЗАПУСТИТСЯ!"
	echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf"
	echo "reboot"
	echo "Тестируем:"
	echo "sudo mouseless --config ~/.config/mouseless/config.yaml"
	
	read
	clear

	echo "Устанавливаем автоматический запуск при старте системы:"
	echo "sudo nvim /etc/systemd/system/mouseless.service"
	echo "sudo systemctl enable mouseless.service"
	echo "sudo systemctl start mouseless.service"

	read
	clear

	echo "Проверка:"
	echo "sudo systemctl status mouseless.service"
	echo "Должна быть пометка \"Active: active (running)\"."

	read
	clear

	echo "Установка соответствующих настроек NeoVim и lf, если вы уже способны использовать Colemak-раскладку:"
	echo "sudo cp DanOS/nvim/ .config/nvim -r"
	echo "sudo cp DanOS/nvim /root/.config/nvim -r"
	echo ""
	echo "sudo cp DanOS/lf .config/lf/ -r"
	echo "sudo cp DanOS/lf /root/.config/lf/ -r"

	

	;;
* )
	echo "test*"
	;;
esac







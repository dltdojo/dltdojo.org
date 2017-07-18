### Node.js on Windows 

* node-v8.1.2-x64
* https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules

CMD.exe run as Administrator

```
npm install --global --production windows-build-tools
```

### smb on ubuntu

How to Create a Network Share Via Samba Via CLI (Command-line interface/Linux Terminal) - Uncomplicated, Simple and Brief Way! - Community Help Wiki 

 https://help.ubuntu.com/community/How%20to%20Create%20a%20Network%20Share%20Via%20Samba%20Via%20CLI%20%28Command-line%20interface/Linux%20Terminal%29%20-%20Uncomplicated%2C%20Simple%20and%20Brief%20Way%21

```
$ sudo apt-get update
$ sudo apt-get install samba
$ sudo smbpasswd -a <user_name>
$ mkdir /home/<user_name>/<folder_name>
$ sudo cp /etc/samba/smb.conf ~
$ sudo nano /etc/samba/smb.conf

Once "smb.conf" has loaded, add this to the very end of the file:

[<folder_name>]
path = /home/<user_name>/<folder_name>
valid users = <user_name>
read only = no

$ sudo service smbd restart
```
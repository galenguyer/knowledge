# ntp

I've wanted to make a self-hosted Stratum 1 NTP server for a while, so **this is an ongoing project I need hardware for**.

RedHat has made a tutorial on this I intend to follow and update since it was written in 2017 and times have changed: https://developers.redhat.com/blog/2017/02/22/how-to-build-a-stratum-1-ntp-server-using-a-raspberry-pi

```bash
apt update
apt upgrade -y
apt install pps-tools gpsd gpsd-clients gpsd-tools chrony
```
On the Pi 3 and 4 the UART is, by default, used for Bluetooth and you may need to add "dtoverlay=miniuart-bt" to "/boot/config.txt"

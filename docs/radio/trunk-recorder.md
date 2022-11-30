# Trunk-Recorder
[trunk-recorder](https://github.com/robotastic/trunk-recorder/) can listen to P25 Phase I and II trunks, as well as conventional frequency scanning. It can stream the audio it receives over UDP or TCP[^1], or upload it to streaming sites like [broadcastify.com](https://broadcastify.com).
I also have a fork of it at [galenguyer/trunk-recorder](https://github.com/galenguyer/trunk-recorder/tree/develop)

## Debian 11 Installation
These instructions should work for installing trunk-recorder on a clean Debian 11 installation.

1. Enable the `non-free` repositories in `/etc/apt/sources.list`. This is needed for `libfdk-aac2`, a dependency of `fdkaac`
1. Install prerequisites:
    ```bash
    apt install -y apt-transport-https build-essential ca-certificates cmake fdkaac git gnupg gnuradio gnuradio-dev gr-osmosdr libboost-all-dev libcurl4-openssl-dev libgmp-dev libhackrf-dev liborc-0.4-dev libpthread-stubs0-dev libsndfile1-dev libssl-dev libuhd3.15.0 libuhd-dev libusb-dev pkg-config software-properties-common sox
    ```
1. Clone the repository:
    ```bash
    git clone --branch=develop https://github.com/galenguyer/trunk-recorder
    cd trunk-recorder
    ```
1. Use CMake to generate build files. It's recommended you do this in a separate directory
    ```bash
    cd cmake_build && cd "$_"
    cmake ..
    ```
1. Build and install trunk-recorder
    ```bash
    make -j$(nproc) install
    ```

[^1]: The simplestream plugin for raw UDP and TCP has a segmentation fault when calling `call->get_system()` (around [line 63](https://github.com/galenguyer/trunk-recorder/blob/develop/plugins/simplestream/simplestream.cc#L63) in `plugins/simplestream/simplestream.cc`). At the time of writing, my work on the development branch is to try and fix this.

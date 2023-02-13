# ripgrep

[ripgrep (rg)](https://github.com/BurntSushi/ripgrep) is like grep but faster and cooler (it's written in 🚀 Rust 🚀).

## Installation
### Arch
```bash
pacman -S ripgrep
```

### Debian
```bash
curl -Lo /tmp/rg.deb https://github.com/BurntSushi/ripgrep/releases/download/13.0.0/ripgrep_13.0.0_amd64.deb
dpkg -i /tmp/rg.deb
```

### Rust
```bash
cargo install ripgrep
```

#### Rust (from source)
```bash
RUSTFLAGS="-C target-cpu=native" cargo install --git=https://github.com/BurntSushi/ripgrep#master --features='simd-accel'
```

## Paging
This function allows nicer pagination for long output.
```bash
export RG_PATH="${RG_PATH:-$(which rg)}"
function rg() {
    if [[ -t 1 ]]; then
        $RG_PATH -p "$@" | less --RAW-CONTROL-CHARS --quit-if-one-screen --no-init
    else
        $RG_PATH "$@"
    fi
}
```
If you don't want it, you can clear it with `unset -f rg` or just call `$RG_PATH [command]`

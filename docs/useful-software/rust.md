# 🚀 Rust 🚀

## Useful Tips and Tricks
* String conversions: https://gist.github.com/jimmychu0807/9a89355e642afad0d2aeda52e6ad2424

## Cargo
### Useful Plugins
https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands

* [cargo-make](https://github.com/sagiegurari/cargo-make) provides a very powerful task runner for cargo
* [cargo-edit](https://github.com/killercup/cargo-edit) provides `cargo add`<sup>[1]</sup>, `cargo rm`, `cargo upgrade`, and `cargo set-version`
* [cargo-update](https://github.com/nabijaczleweli/cargo-update) will update binaries installed with `cargo install`
* [cargo-space](https://github.com/khyperia/cargo-space) car no do that. car go road

### Environment variables
Cargo sets some environment variables that can be useful: https://doc.rust-lang.org/cargo/reference/environment-variables.html

Cargo also reads some environment variables I like to set in my `$HOME/.zshrc`:
```bash
if [[ -d "$HOME/.cargo/bin" ]]; then
  export PATH="$HOME/.cargo/bin:$PATH"
  export CARGO_REGISTRIES_CRATES_IO_PROTOCOL="sparse" # only in rust 1.68 or newer: https://blog.rust-lang.org/inside-rust/2023/01/30/cargo-sparse-protocol.html
  export CARGO_TARGET_DIR="$HOME/.cargo/targets"
fi
```

[1] - `cargo add` is now in stable cargo as of [Rust 1.62.0](https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html) and has been removed from cargo-edit

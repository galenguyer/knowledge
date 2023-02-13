"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[911],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(2962),n=(r(9496),r(9613));const o={},i="\ud83d\ude80 Rust \ud83d\ude80",l={unversionedId:"useful-software/rust",id:"useful-software/rust",title:"\ud83d\ude80 Rust \ud83d\ude80",description:"Useful Tips and Tricks",source:"@site/docs/useful-software/rust.md",sourceDirName:"useful-software",slug:"/useful-software/rust",permalink:"/useful-software/rust",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autogeneratedSidebar",previous:{title:"ripgrep",permalink:"/useful-software/ripgrep"},next:{title:"Thunderbird",permalink:"/useful-software/thunderbird"}},s={},u=[{value:"Useful Tips and Tricks",id:"useful-tips-and-tricks",level:2},{value:"Cargo",id:"cargo",level:2},{value:"Useful Plugins",id:"useful-plugins",level:3},{value:"Environment variables",id:"environment-variables",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-rust-"},"\ud83d\ude80 Rust \ud83d\ude80"),(0,n.kt)("h2",{id:"useful-tips-and-tricks"},"Useful Tips and Tricks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"String conversions: ",(0,n.kt)("a",{parentName:"li",href:"https://gist.github.com/jimmychu0807/9a89355e642afad0d2aeda52e6ad2424"},"https://gist.github.com/jimmychu0807/9a89355e642afad0d2aeda52e6ad2424"))),(0,n.kt)("h2",{id:"cargo"},"Cargo"),(0,n.kt)("h3",{id:"useful-plugins"},"Useful Plugins"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands"},"https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sagiegurari/cargo-make"},"cargo-make")," provides a very powerful task runner for cargo"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/killercup/cargo-edit"},"cargo-edit")," provides ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo add"),(0,n.kt)("sup",null,"[1]"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo rm"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo upgrade"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo set-version")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nabijaczleweli/cargo-update"},"cargo-update")," will update binaries installed with ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo install")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/khyperia/cargo-space"},"cargo-space")," car no do that. car go road")),(0,n.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,n.kt)("p",null,"Cargo sets some environment variables that can be useful: ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/reference/environment-variables.html"},"https://doc.rust-lang.org/cargo/reference/environment-variables.html")),(0,n.kt)("p",null,"Cargo also reads some environment variables I like to set in my ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'if [[ -d "$HOME/.cargo/bin" ]]; then\n  export PATH="$HOME/.cargo/bin:$PATH"\n  export CARGO_REGISTRIES_CRATES_IO_PROTOCOL="sparse" # only in rust 1.68 or newer: https://blog.rust-lang.org/inside-rust/2023/01/30/cargo-sparse-protocol.html\n  export CARGO_TARGET_DIR="$HOME/.cargo/targets"\nfi\n')),(0,n.kt)("p",null,"[1]"," - ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo add")," is now in stable cargo as of ",(0,n.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html"},"Rust 1.62.0")," and has been removed from cargo-edit"))}c.isMDXComponent=!0}}]);
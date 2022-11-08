"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[533],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,h=f["".concat(u,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(2962),o=(n(9496),n(9613));const s={},a="mosh",i={unversionedId:"useful-software/mosh",id:"useful-software/mosh",title:"mosh",description:"mosh is the mobile shell. It starts a connection over SSH and then uses UDP to keep your session alive through connections dropping or changing. It's a must-have if you want long-running SSH sessions.",source:"@site/docs/useful-software/mosh.md",sourceDirName:"useful-software",slug:"/useful-software/mosh",permalink:"/useful-software/mosh",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autogeneratedSidebar",previous:{title:"Mastodon",permalink:"/useful-software/mastodon"}},u={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mosh"},"mosh"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mobile-shell/mosh"},"mosh")," is the ",(0,o.kt)("strong",{parentName:"p"},"mo"),"bile ",(0,o.kt)("strong",{parentName:"p"},"sh"),"ell. It starts a connection over SSH and then uses UDP to keep your session alive through connections dropping or changing. It's a must-have if you want long-running SSH sessions."),(0,o.kt)("p",null,"By default, mosh uses ports ",(0,o.kt)("inlineCode",{parentName:"p"},"60000/udp")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"61000/udp"),", so make sure these are open in your firewall."))}p.isMDXComponent=!0}}]);
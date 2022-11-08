"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[965],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var o=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(h,s(s({ref:n},p),{},{components:t})):o.createElement(h,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(2962),r=(t(9496),t(9613));const a={},s="Mastodon",i={unversionedId:"useful-software/mastodon",id:"useful-software/mastodon",title:"Mastodon",description:"I've been looking at setting up a Twitter alternative as everyone's leaving that as the time of writing, what with Elon's takeover. I've been looking at Mastodon, Misskey, and Pleroma as alternatives.",source:"@site/docs/useful-software/mastodon.md",sourceDirName:"useful-software",slug:"/useful-software/mastodon",permalink:"/useful-software/mastodon",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autogeneratedSidebar",previous:{title:"croc",permalink:"/useful-software/croc"},next:{title:"mosh",permalink:"/useful-software/mosh"}},l={},c=[{value:"Why Mastodon?",id:"why-mastodon",level:2},{value:"Docker Setup",id:"docker-setup",level:2},{value:"My Configs",id:"my-configs",level:2},{value:"docker-compose.yaml",id:"docker-composeyaml",level:3},{value:".env.production",id:"envproduction",level:3},{value:"nginx.conf",id:"nginxconf",level:3}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mastodon"},"Mastodon"),(0,r.kt)("p",null,"I've been looking at setting up a Twitter alternative as everyone's leaving that as the time of writing, what with Elon's takeover. I've been looking at ",(0,r.kt)("a",{parentName:"p",href:"https://joinmastodon.org/"},"Mastodon"),", ",(0,r.kt)("a",{parentName:"p",href:"https://misskey-hub.net/en/"},"Misskey"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://pleroma.social/"},"Pleroma")," as alternatives."),(0,r.kt)("h2",{id:"why-mastodon"},"Why Mastodon?"),(0,r.kt)("p",null,"At the moment, I'm going to set up Mastodon. Pleroma is lighter weight but lacks many administration features. Misskey is also lighter weight and has a lot of cool features Mastodon doesn't have, but it's missing some critical features, like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/misskey-dev/misskey/issues/5475"},"moving between instances")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/misskey-dev/misskey/issues/6724"},"being able to use a different subdomain for the web UI"),". I care about both of these features so Mastodon is the only real solution."),(0,r.kt)("h2",{id:"docker-setup"},"Docker Setup"),(0,r.kt)("p",null,"For some reason Mastodon's docs don't have any instructions on running with Docker. Luckily, it's not that hard."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disclaimer:")," these steps could be wrong. You should read the docs and make sure you know what you're doing. I had to revise stuff throughout and may have missed some stuff."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the Mastodon repository (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tootsuite/mastodon"},"https://github.com/tootsuite/mastodon"),")"),(0,r.kt)("li",{parentName:"ol"},"Check out the latest stable version (unless you really like living on the edge) with ",(0,r.kt)("inlineCode",{parentName:"li"},"git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -rV | head -n1)")),(0,r.kt)("li",{parentName:"ol"},"Review the settings in ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),". You'll want to choose between building from source and commenting out the ",(0,r.kt)("inlineCode",{parentName:"li"},"image: tootsuite/mastodon")," lines or using the prebuilt images and commenting out ",(0,r.kt)("inlineCode",{parentName:"li"},"build: ."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If you're pulling from Docker Hub, make sure you specify the version like so: ",(0,r.kt)("inlineCode",{parentName:"li"},"docker.io/tootsuite/mastodon:v3.5.3")))),(0,r.kt)("li",{parentName:"ol"},"Copy the env config from ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production.sample")," to ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production")," and make any needed changes\nAll the config options are documented here: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.joinmastodon.org/admin/config/"},"https://docs.joinmastodon.org/admin/config/")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose run --rm web bundle exec rake secret")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose run --rm web bundle exec rake mastodon:webpush:generate_vapid_key")," to generate secret keys needed by your ",(0,r.kt)("inlineCode",{parentName:"li"},".env.production")," file"),(0,r.kt)("li",{parentName:"ol"},"Once you've double checked your configuration is all set, run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose run --rm web bundle exec rake mastodon:setup")),(0,r.kt)("li",{parentName:"ol"},"Once setup is done, you can run ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")),(0,r.kt)("li",{parentName:"ol"},"You may have to run ",(0,r.kt)("inlineCode",{parentName:"li"},"chown 991:991 /var/lib/docker/volumes/mastodon_mastodon")," (or whatever the path to your volume is) if your instance has permissions issues saving files")),(0,r.kt)("h2",{id:"my-configs"},"My Configs"),(0,r.kt)("p",null,"Versions of all my configs are below. Secrets have been removed"),(0,r.kt)("h3",{id:"docker-composeyaml"},"docker-compose.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  postgres:\n    restart: unless-stopped\n    image: postgres:14-alpine\n    shm_size: 256mb\n    environment:\n      - 'POSTGRES_HOST_AUTH_METHOD=trust'\n      - 'POSTGRES_USER=mastodon'\n      - 'POSTGRES_PASSWORD='\n      - 'POSTGRES_DB=mastodon'\n    healthcheck:\n      test: ['CMD', 'pg_isready', '-U', 'mastodon']\n    volumes:\n      - type: volume\n        source: postgres14\n        target: /var/lib/postgresql/data\n\n  redis:\n    restart: unless-stopped\n    image: redis:6-alpine\n    healthcheck:\n      test: ['CMD', 'redis-cli', 'ping']\n    volumes:\n      - type: volume\n        source: redis\n        target: /data\n\n  elasticsearch:\n    restart: unless-stopped\n    image: docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.2\n    environment:\n      - \"ES_JAVA_OPTS=-Xms256m -Xmx256m\"\n      - \"cluster.name=es-mastodon\"\n      - \"discovery.type=single-node\"\n      - \"bootstrap.memory_lock=true\"\n    healthcheck:\n       test: [\"CMD-SHELL\", \"curl --silent --fail localhost:9200/_cluster/health || exit 1\"]\n    volumes:\n       - type: volume\n         source: elasticsearch\n         target: /usr/share/elasticsearch/data\n    ulimits:\n      memlock:\n        soft: -1\n        hard: -1\n\n  web:\n    image: docker.io/tootsuite/mastodon:v3.5.3\n    restart: unless-stopped\n    env_file: .env.production\n    command: bash -c \"rm -f /mastodon/tmp/pids/server.pid; bundle exec rails s -p 3000\"\n    healthcheck:\n      # prettier-ignore\n      test: ['CMD-SHELL', 'wget -q --spider --proxy=off localhost:3000/health || exit 1']\n    ports:\n      - '127.0.0.1:3030:3000'\n    depends_on:\n      - postgres\n      - redis\n      - elasticsearch\n    volumes:\n      - type: volume\n        source: mastodon\n        target: /mastodon/public/system\n\n  streaming:\n    image: docker.io/tootsuite/mastodon:v3.5.3\n    restart: unless-stopped\n    env_file: .env.production\n    command: node ./streaming\n    healthcheck:\n      # prettier-ignore\n      test: ['CMD-SHELL', 'wget -q --spider --proxy=off localhost:4000/api/v1/streaming/health || exit 1']\n    ports:\n      - '127.0.0.1:4000:4000'\n    depends_on:\n      - postgres\n      - redis\n\n  sidekiq:\n    image: docker.io/tootsuite/mastodon:v3.5.3\n    restart: unless-stopped\n    env_file: .env.production\n    command: bundle exec sidekiq\n    healthcheck:\n      test: ['CMD-SHELL', \"ps aux | grep '[s]idekiq\\ 6' || false\"]\n    depends_on:\n      - postgres\n      - redis\n    volumes:\n      - type: volume\n        source: mastodon\n        target: /mastodon/public/system\n\n  ## Uncomment to enable federation with tor instances along with adding the following ENV variables\n  ## http_proxy=http://privoxy:8118\n  ## ALLOW_ACCESS_TO_HIDDEN_SERVICE=true\n  # tor:\n  #   image: sirboops/tor\n  #   networks:\n  #      - external_network\n  #      - internal_network\n  #\n  # privoxy:\n  #   image: sirboops/privoxy\n  #   volumes:\n  #     - ./priv-config:/opt/config\n  #   networks:\n  #     - external_network\n  #     - internal_network\n\nvolumes:\n  postgres14:\n  redis:\n  elasticsearch:\n  mastodon:\n\n")),(0,r.kt)("h3",{id:"envproduction"},".env.production"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# This is a sample configuration file. You can generate your configuration\n# with the `rake mastodon:setup` interactive setup wizard, but to customize\n# your setup even further, you'll need to edit it manually. This sample does\n# not demonstrate all available configuration options. Please look at\n# https://docs.joinmastodon.org/admin/config/ for the full documentation.\n\n# Note that this file accepts slightly different syntax depending on whether\n# you are using `docker-compose` or not. In particular, if you use\n# `docker-compose`, the value of each declared variable will be taken verbatim,\n# including surrounding quotes.\n# See: https://github.com/mastodon/mastodon/issues/16895\n\nRAILS_ENV=production\nRAILS_SERVE_STATIC_FILES=true\n\n# Federation\n# ----------\n# This identifies your server and cannot be changed safely later\n# ----------\nLOCAL_DOMAIN=example.com\nWEB_DOMAIN=social.example.com\n\n# Redis\n# -----\nREDIS_HOST=redis\nREDIS_PORT=6379\n\n# PostgreSQL\n# ----------\nDB_HOST=postgres\nDB_USER=mastodon\nDB_NAME=mastodon\nDB_PASS=\nDB_PORT=5432\n\n# Elasticsearch (optional)\n# ------------------------\nES_ENABLED=true\nES_HOST=elasticsearch\nES_PORT=9200\n# Authentication for ES (optional)\n#ES_USER=elastic\n#ES_PASS=password\n\n# Secrets\n# -------\n# Make sure to use `rake secret` to generate secrets\n# -------\nSECRET_KEY_BASE=\nOTP_SECRET=\n\n# Web Push\n# --------\n# Generate with `rake mastodon:webpush:generate_vapid_key`\n# --------\nVAPID_PRIVATE_KEY=\nVAPID_PUBLIC_KEY=\n\n# Sending mail\n# ------------\nSMTP_SERVER=\nSMTP_PORT=587\nSMTP_LOGIN=admin@example.com\nSMTP_PASSWORD=\nSMTP_AUTH_METHOD=plain\nSMTP_OPENSSL_VERIFY_MODE=peer\nSMTP_FROM_ADDRESS=Mastodon <no-reply@example.com>\n\n# File storage (optional)\n# -----------------------\nS3_ENABLED=false\n")),(0,r.kt)("h3",{id:"nginxconf"},"nginx.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    listen [::]:80;\n    server_name example.com social.example.com;\n\n    return 301 https://$host$request_uri;\n    add_header 'Access-Control-Allow-Origin' *;\n}\n\nserver {\n    # Client port\n    listen 443 ssl http2;\n    listen [::]:443 ssl http2;\n\n    # Federation port\n    listen 8448 ssl http2;\n    listen [::]:8448 ssl http2;\n\n    server_name example.com;\n\n    include /etc/nginx/ssl/params.conf;\n    ssl_certificate /etc/ssl/example.com/fullchain.pem;\n    ssl_certificate_key /etc/ssl/example.com/key.pem;\n\n    root /var/www/example.com;\n    try_files $uri $uri.html $uri/ =404;\n    index index.html;\n    add_header 'Access-Control-Allow-Origin' *;\n\n    # For mastodon\n    location /.well-known/webfinger {\n        return 301 https://social.example.com$request_uri;\n    }\n}\n\nmap $http_upgrade $connection_upgrade {\n    default upgrade;\n    ''      close;\n}\n\nserver {\n    # Client port\n    listen 443 ssl http2;\n    listen [::]:443 ssl http2;\n\n    server_name social.example.com;\n\n    include /etc/nginx/ssl/params.conf;\n    ssl_certificate /etc/ssl/example.com/fullchain.pem;\n    ssl_certificate_key /etc/ssl/example.com/key.pem;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Proxy \"\";\n        proxy_pass_header Server;\n\n        proxy_pass http://localhost:3030;\n        proxy_buffering off;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n\n        tcp_nodelay on;\n        client_max_body_size 50M;\n    }\n    location /api/v1/streaming {\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Proxy \"\";\n        proxy_pass_header Server;\n\n        proxy_pass http://localhost:4000/;\n        proxy_buffering off;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n\n        tcp_nodelay on;\n    }\n}\n")))}d.isMDXComponent=!0}}]);
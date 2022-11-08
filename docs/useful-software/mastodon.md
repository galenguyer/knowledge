# Mastodon

I've been looking at setting up a Twitter alternative as everyone's leaving that as the time of writing, what with Elon's takeover. I've been looking at [Mastodon](https://joinmastodon.org/), [Misskey](https://misskey-hub.net/en/), and [Pleroma](https://pleroma.social/) as alternatives.

## Why Mastodon?
At the moment, I'm going to set up Mastodon. Pleroma is lighter weight but lacks many administration features. Misskey is also lighter weight and has a lot of cool features Mastodon doesn't have, but it's missing some critical features, like [moving between instances](https://github.com/misskey-dev/misskey/issues/5475) and [being able to use a different subdomain for the web UI](https://github.com/misskey-dev/misskey/issues/6724). I care about both of these features so Mastodon is the only real solution.

## Docker Setup
For some reason Mastodon's docs don't have any instructions on running with Docker. Luckily, it's not that hard.

**Disclaimer:** these steps could be wrong. You should read the docs and make sure you know what you're doing. I had to revise stuff throughout and may have missed some stuff.

1. Clone the Mastodon repository (https://github.com/tootsuite/mastodon)
2. Check out the latest stable version (unless you really like living on the edge) with `git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -rV | head -n1)`
3. Review the settings in `docker-compose.yml`. You'll want to choose between building from source and commenting out the `image: tootsuite/mastodon` lines or using the prebuilt images and commenting out `build: .`
   - If you're pulling from Docker Hub, make sure you specify the version like so: `docker.io/tootsuite/mastodon:v3.5.3`
4. Copy the env config from `.env.production.sample` to `.env.production` and make any needed changes
   - All the config options are documented here: https://docs.joinmastodon.org/admin/config/
5. Run `docker-compose run --rm web bundle exec rake secret` and `docker-compose run --rm web bundle exec rake mastodon:webpush:generate_vapid_key` to generate secret keys needed by your `.env.production` file
6. Once you've double checked your configuration is all set, run `docker-compose run --rm web bundle exec rake mastodon:setup`
7. Once setup is done, you can run `docker-compose up -d`
8. You may have to run `chown 991:991 /var/lib/docker/volumes/mastodon_mastodon` (or whatever the path to your volume is) if your instance has permissions issues saving files

## My Configs
Versions of all my configs are below. Secrets have been removed

### docker-compose.yaml
```yaml
version: '3'
services:
  postgres:
    restart: unless-stopped
    image: postgres:14-alpine
    shm_size: 256mb
    environment:
      - 'POSTGRES_HOST_AUTH_METHOD=trust'
      - 'POSTGRES_USER=mastodon'
      - 'POSTGRES_PASSWORD='
      - 'POSTGRES_DB=mastodon'
    healthcheck:
      test: ['CMD', 'pg_isready', '-U', 'mastodon']
    volumes:
      - type: volume
        source: postgres14
        target: /var/lib/postgresql/data

  redis:
    restart: unless-stopped
    image: redis:6-alpine
    healthcheck:
      test: ['CMD', 'redis-cli', 'ping']
    volumes:
      - type: volume
        source: redis
        target: /data

  elasticsearch:
    restart: unless-stopped
    image: docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.2
    environment:
      - "ES_JAVA_OPTS=-Xms256m -Xmx256m"
      - "cluster.name=es-mastodon"
      - "discovery.type=single-node"
      - "bootstrap.memory_lock=true"
    healthcheck:
       test: ["CMD-SHELL", "curl --silent --fail localhost:9200/_cluster/health || exit 1"]
    volumes:
       - type: volume
         source: elasticsearch
         target: /usr/share/elasticsearch/data
    ulimits:
      memlock:
        soft: -1
        hard: -1

  web:
    image: docker.io/tootsuite/mastodon:v3.5.3
    restart: unless-stopped
    env_file: .env.production
    command: bash -c "rm -f /mastodon/tmp/pids/server.pid; bundle exec rails s -p 3000"
    healthcheck:
      # prettier-ignore
      test: ['CMD-SHELL', 'wget -q --spider --proxy=off localhost:3000/health || exit 1']
    ports:
      - '127.0.0.1:3030:3000'
    depends_on:
      - postgres
      - redis
      - elasticsearch
    volumes:
      - type: volume
        source: mastodon
        target: /mastodon/public/system

  streaming:
    image: docker.io/tootsuite/mastodon:v3.5.3
    restart: unless-stopped
    env_file: .env.production
    command: node ./streaming
    healthcheck:
      # prettier-ignore
      test: ['CMD-SHELL', 'wget -q --spider --proxy=off localhost:4000/api/v1/streaming/health || exit 1']
    ports:
      - '127.0.0.1:4000:4000'
    depends_on:
      - postgres
      - redis

  sidekiq:
    image: docker.io/tootsuite/mastodon:v3.5.3
    restart: unless-stopped
    env_file: .env.production
    command: bundle exec sidekiq
    healthcheck:
      test: ['CMD-SHELL', "ps aux | grep '[s]idekiq\ 6' || false"]
    depends_on:
      - postgres
      - redis
    volumes:
      - type: volume
        source: mastodon
        target: /mastodon/public/system

  ## Uncomment to enable federation with tor instances along with adding the following ENV variables
  ## http_proxy=http://privoxy:8118
  ## ALLOW_ACCESS_TO_HIDDEN_SERVICE=true
  # tor:
  #   image: sirboops/tor
  #   networks:
  #      - external_network
  #      - internal_network
  #
  # privoxy:
  #   image: sirboops/privoxy
  #   volumes:
  #     - ./priv-config:/opt/config
  #   networks:
  #     - external_network
  #     - internal_network

volumes:
  postgres14:
  redis:
  elasticsearch:
  mastodon:

```

### .env.production
```bash
# This is a sample configuration file. You can generate your configuration
# with the `rake mastodon:setup` interactive setup wizard, but to customize
# your setup even further, you'll need to edit it manually. This sample does
# not demonstrate all available configuration options. Please look at
# https://docs.joinmastodon.org/admin/config/ for the full documentation.

# Note that this file accepts slightly different syntax depending on whether
# you are using `docker-compose` or not. In particular, if you use
# `docker-compose`, the value of each declared variable will be taken verbatim,
# including surrounding quotes.
# See: https://github.com/mastodon/mastodon/issues/16895

RAILS_ENV=production
RAILS_SERVE_STATIC_FILES=true

# Federation
# ----------
# This identifies your server and cannot be changed safely later
# ----------
LOCAL_DOMAIN=example.com
WEB_DOMAIN=social.example.com

# Redis
# -----
REDIS_HOST=redis
REDIS_PORT=6379

# PostgreSQL
# ----------
DB_HOST=postgres
DB_USER=mastodon
DB_NAME=mastodon
DB_PASS=
DB_PORT=5432

# Elasticsearch (optional)
# ------------------------
ES_ENABLED=true
ES_HOST=elasticsearch
ES_PORT=9200
# Authentication for ES (optional)
#ES_USER=elastic
#ES_PASS=password

# Secrets
# -------
# Make sure to use `rake secret` to generate secrets
# -------
SECRET_KEY_BASE=
OTP_SECRET=

# Web Push
# --------
# Generate with `rake mastodon:webpush:generate_vapid_key`
# --------
VAPID_PRIVATE_KEY=
VAPID_PUBLIC_KEY=

# Sending mail
# ------------
SMTP_SERVER=
SMTP_PORT=587
SMTP_LOGIN=admin@example.com
SMTP_PASSWORD=
SMTP_AUTH_METHOD=plain
SMTP_OPENSSL_VERIFY_MODE=peer
SMTP_FROM_ADDRESS=Mastodon <no-reply@example.com>

# File storage (optional)
# -----------------------
S3_ENABLED=false
```

### nginx.conf
```nginx
server {
	listen 80;
	listen [::]:80;
	server_name example.com social.example.com;

	return 301 https://$host$request_uri;
	add_header 'Access-Control-Allow-Origin' *;
}

server {
	# Client port
	listen 443 ssl http2;
	listen [::]:443 ssl http2;

	# Federation port
	listen 8448 ssl http2;
	listen [::]:8448 ssl http2;

	server_name example.com;

	include /etc/nginx/ssl/params.conf;
	ssl_certificate /etc/ssl/example.com/fullchain.pem;
	ssl_certificate_key /etc/ssl/example.com/key.pem;

	root /var/www/example.com;
	try_files $uri $uri.html $uri/ =404;
	index index.html;
	add_header 'Access-Control-Allow-Origin' *;

	# For mastodon
	location /.well-known/webfinger {
		return 301 https://social.example.com$request_uri;
	}
}

map $http_upgrade $connection_upgrade {
	default upgrade;
	''      close;
}

server {
	# Client port
	listen 443 ssl http2;
	listen [::]:443 ssl http2;

	server_name social.example.com;

	include /etc/nginx/ssl/params.conf;
	ssl_certificate /etc/ssl/example.com/fullchain.pem;
	ssl_certificate_key /etc/ssl/example.com/key.pem;

	location / {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header Proxy "";
		proxy_pass_header Server;

		proxy_pass http://localhost:3030;
		proxy_buffering off;
		proxy_redirect off;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection $connection_upgrade;

		tcp_nodelay on;
		client_max_body_size 50M;
	}
	location /api/v1/streaming {
		proxy_set_header Host $host;
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header X-Forwarded-Proto $scheme;
		proxy_set_header Proxy "";
		proxy_pass_header Server;

		proxy_pass http://localhost:4000/;
		proxy_buffering off;
		proxy_redirect off;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection $connection_upgrade;

		tcp_nodelay on;
	}
}
```
# acme.sh

## Install
```bash
curl https://get.acme.sh | sh -s email=my@example.com
```

## Change Default CA
```bash
acme.sh --set-default-ca --server letsencrypt
```

## Issue Certificate
### Webroot Method
```bash
acme.sh --issue -d example.com -w /var/www/html
```

### DNS API
#### CloudFlare
```bash
export CF_Key=""
export CF_Email=""
acme.sh --issue --dns dns_cf -d 'example.com' -d '*.example.com'
```
*note: if you issue a certificate with multiple domains, the first domain specified is the certificate's "name"*

## Install Certificate
```bash
mkdir -p /etc/ssl/example.com
acme.sh --install-cert -d example.com \
    --cert-file      /etc/ssl/example.com/cert.pem  \
    --key-file       /etc/ssl/example.com/key.pem  \
    --fullchain-file /etc/ssl/example.com/fullchain.pem \
    --reloadcmd     "nginx -t && systemctl reload nginx"
```

## Force Renew
```bash
acme.sh --renew -d example.com --force
```
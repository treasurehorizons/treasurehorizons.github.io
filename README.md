# Treasure Horizons

## Github Pages

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

To create A records, point your apex domain to the IP addresses for GitHub Pages.

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

To create AAAA records, point your apex domain to the IP addresses for GitHub Pages.

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For both set the host to `@` for namecheap.

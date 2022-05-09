# Cecil component theme: Netlify

> The _Netlify_ component theme for [Cecil](https://cecil.app) provides support of Netlify's [`_redirects`](https://docs.netlify.com/routing/redirects/) and [`_header`](https://docs.netlify.com/routing/headers/).

## Installation

```bash
composer require cecil/theme-netlify
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-netlify/releases/latest/) and uncompress its content in `themes/netlify`.

## Usage

Add `netlify` in the `theme` section of your `config.yml`:

```yaml
theme:
  - netlify
```

Add redirections:

```yaml
netlify:
  redirects:
    - from: https://xxxxxx/*
      to: https://xxxxxx/:splat
      status: 301 # optional
      force: true # optional
```

# Cecil component theme: Netlify CMS

> The _Netlify CMS_ component theme for [Cecil](https://cecil.app) provides support of [Netlify CMS](https://www.netlifycms.org).

## Installation

```bash
composer require cecil/theme-netlifycms
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-netlifycms/releases/latest/) and uncompress its content in `themes/netlifycms`.

## Usage

Add `netlify-cms` in the `theme` section of your `config.yml`:

```yaml
theme:
  - netlify-cms
```

Add [Netlify Identity](https://docs.netlify.com/visitor-access/identity/) support:

```twig
{% include 'partials/identity.html.twig' %}
```

The default route to the CMS is `/admin/`.

# Garth theme

> The _Garth_ theme for [Cecil](https://cecil.app) is a port of the [Garth](https://github.com/daviddarnes/garth) theme for Jekyll created by [David Darnes](https://github.com/daviddarnes).

![Demo screenshot](https://raw.githubusercontent.com/daviddarnes/garth/master/screenshot.png)

## Installation

```bash
composer require cecil/theme-garth
```

> Or [download the latest archive](https://github.com/Cecilapp/theme-garth/releases/latest/) and uncompress its content in `themes/garth`.

## Usage

Add `garth` in the `theme` section of your `config.yml`:

```yaml
theme:
  - garth
```

### Change colors

### From configuration

```yaml
assets:
  compile:
    variables:
      bodyColour: '#5a5a5a'
      linkColour: '#7E4EA3'
      backgroundColour: '#F1F3F4'
```

### From files

1. Copy `themes/garth/static/sass/garth.scss` to `static/sass/garth.scss`
2. Copy `themes/garth/static/sass/_colors.scss` to `static/sass/_colors.scss`
3. Edit colors's code in `_colors.scss`

## License

_Garth_ is a free software distributed under the terms of the MIT license.

© [Arnaud Ligny](https://arnaudligny.fr)

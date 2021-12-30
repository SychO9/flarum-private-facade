# Private Forum Facade

![flarum version](https://img.shields.io/badge/flarum-%5E1.2.0-%23e7742e?style=flat-square)

A [Flarum](http://flarum.org) extension. Force guests to an interface with only login and signup forms

![Screenshot of the login user interface](https://user-images.githubusercontent.com/20267363/146449466-4805ab4d-21c0-43c8-b055-0e331e12a3d2.png)
![](https://user-images.githubusercontent.com/20267363/146449468-4e16bd95-a396-469e-ac4a-a85728912feb.png)
![](https://user-images.githubusercontent.com/20267363/146449469-0e2d1aa7-09cc-45f0-9916-0fa5db8f355f.png)
![](https://user-images.githubusercontent.com/20267363/147744320-ee9ddaca-9534-4410-aa8f-392a4c79485c.png)


## Installation

Install with composer:

```sh
composer require sycho/flarum-private-facade:"*"
```

## Updating

```sh
composer update sycho/flarum-private-facade:"*"
php flarum migrate
php flarum cache:clear
```

<?php

namespace SychO\PrivateFacade\Providers;

use Flarum\Foundation\AbstractServiceProvider;

class RouteExclusionProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->bind('sycho-private-facade.backend-route-exclusions', function () {
            return [
                'login', 'register', 'sycho-private-facade.login', 'sycho-private-facade.signup',
                'resetPassword', 'confirmEmail', 'savePassword', 'confirmEmail.submit',
                // FoF-OAuth
                'auth.twitter', 'fof-oauth', 'askvortsov-pwa.webmanifest',
                'askvortsov-pwa.sw', 'askvortsov-pwa.offline'
            ];
        });

        $this->container->bind('sycho-private-facade.frontend-route-exclusions', function () {
            return [
                'sycho-private-facade.login', 'sycho-private-facade.signup',
            ];
        });
    }
}

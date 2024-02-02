<?php

namespace SychO\PrivateFacade\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;

class FacadeExclusions implements ExtenderInterface
{
    private $excludedBackendRoutes = [];
    private $excludedFrontendRoutes = [];

    public function addBackendRouteExclusion(string $route): self
    {
        $this->excludedBackendRoutes[] = $route;

        return $this;
    }

    public function addFrontendRouteExclusion(string $route): self
    {
        $this->excludedFrontendRoutes[] = $route;

        return $this;
    }

    public function extend(Container $container, Extension $extension = null)
    {
        if (empty($this->excludedBackendRoutes) && empty($this->excludedFrontendRoutes)) {
            return;
        }

        $container->extend('sycho-private-facade.backend-route-exclusions', function ($excludedRoutes) {
            return array_merge($excludedRoutes, $this->excludedBackendRoutes);
        });

        $container->extend('sycho-private-facade.frontend-route-exclusions', function ($excludedRoutes) {
            return array_merge($excludedRoutes, $this->excludedFrontendRoutes);
        });
    }
}

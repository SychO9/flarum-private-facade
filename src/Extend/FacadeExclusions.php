<?php

namespace SychO\PrivateFacade\Extend;

use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;
use SychO\PrivateFacade\PrivateFacadeMiddleware;

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

        PrivateFacadeMiddleware::$backendRouteExclusions = array_merge(PrivateFacadeMiddleware::$backendRouteExclusions, $this->excludedBackendRoutes);
        PrivateFacadeMiddleware::$frontendRouteExclusions = array_merge(PrivateFacadeMiddleware::$frontendRouteExclusions, $this->excludedFrontendRoutes);
    }
}

<?php

namespace SychO\PrivateFacade;

use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Laminas\Diactoros\Response\RedirectResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class PrivateFacadeMiddleware implements MiddlewareInterface
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(SettingsRepositoryInterface $settings, UrlGenerator $url)
    {
        $this->settings = $settings;
        $this->url = $url;
    }

    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $userExcludedRoutes = $this->settings->get('sycho-private-facade.route_exclusions') ?: '';
        $userExcludedUrls = $this->settings->get('sycho-private-facade.url_exclusions') ?: '';

        $extensionExcludedRoutes = self::getBackendRouteExclusions($userExcludedRoutes);
        $extensionExcludedUrls = explode(',', str_replace(' ', '', $userExcludedUrls));

        $excludedRoute = in_array($request->getAttribute('routeName'), $extensionExcludedRoutes, true);

        if (! $excludedRoute) {
            $currentUri = $request->getUri()->getPath();

            foreach ($extensionExcludedUrls as $url) {
                // allow for wildcards
                if (strpos($url, '*') !== false) {
                    $url = str_replace('*', '.*', preg_quote($url, '/'));

                    if (preg_match('/' . $url . '/', $currentUri)) {
                        $excludedRoute = true;
                        break;
                    }
                } elseif ($currentUri === $url) {
                    $excludedRoute = true;
                    break;
                }
            }
        }

        $isPrivateFacade = in_array(
            $request->getAttribute('routeName'),
            ['sycho-private-facade.login', 'sycho-private-facade.signup'],
            true
        );

        if (
            $actor->isGuest()
            &&
            ! $excludedRoute
            &&
            $this->settings->get('sycho-private-facade.force_redirect')
        ) {
            return new RedirectResponse($this->url->to('forum')->route('sycho-private-facade.login'));
        }

        if (! $actor->isGuest() && $isPrivateFacade) {
            return new RedirectResponse($this->url->to('forum')->route('default'));
        }

        if ($actor->isGuest() && ! $this->settings->get('allow_sign_up') && $request->getAttribute('routeName') === 'sycho-private-facade.signup') {
            return new RedirectResponse($this->url->to('forum')->route('sycho-private-facade.login'));
        }

        return $handler->handle($request);
    }

    public static function getBackendRouteExclusions(?string $userExcludedRoutes): array
    {
        return self::getRouteExclusions($userExcludedRoutes, resolve('sycho-private-facade.backend-route-exclusions'));
    }

    public static function getFrontendRouteExclusions(?string $userExcludedRoutes): array
    {
        return self::getRouteExclusions($userExcludedRoutes, resolve('sycho-private-facade.frontend-route-exclusions'));
    }

    protected static function getRouteExclusions(?string $userExcludedRoutes, array $extensionExcludedRoutes): array
    {
        if (! empty($userExcludedRoutes)) {
            $extensionExcludedRoutes = array_merge($extensionExcludedRoutes, explode(',', str_replace(' ', '', $userExcludedRoutes)));
        }

        return $extensionExcludedRoutes;
    }
}

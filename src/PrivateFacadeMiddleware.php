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
    public const BACKEND_ROUTE_EXCLUSIONS = [
        'login', 'register', 'sycho-private-facade.login', 'sycho-private-facade.signup',
        'resetPassword', 'confirmEmail', 'savePassword', 'confirmEmail.submit',
        // FoF-OAuth
        'auth.twitter', 'fof-oauth',
    ];
    public const FRONTEND_ROUTE_EXCLUSIONS = [
        'sycho-private-facade.login', 'sycho-private-facade.signup',
    ];

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
        $extensionExcludedRoutes = self::getBackendRouteExclusions($userExcludedRoutes);

        $excludedRoute = in_array($request->getAttribute('routeName'), $extensionExcludedRoutes, true);

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
        return self::getRouteExclusions($userExcludedRoutes, self::BACKEND_ROUTE_EXCLUSIONS);
    }

    public static function getFrontendRouteExclusions(?string $userExcludedRoutes): array
    {
        return self::getRouteExclusions($userExcludedRoutes, self::FRONTEND_ROUTE_EXCLUSIONS);
    }

    protected static function getRouteExclusions(?string $userExcludedRoutes, array $extensionExcludedRoutes): array
    {
        if (! empty($userExcludedRoutes)) {
            $extensionExcludedRoutes = array_merge($extensionExcludedRoutes, explode(',', str_replace(' ', '', $userExcludedRoutes)));
        }

        return $extensionExcludedRoutes;
    }
}

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
        $extensionExcludedRoutes = [
            'login', 'register', 'sycho-private-facade.login', 'sycho-private-facade.signup',
            'resetPassword', 'confirmEmail', 'savePassword', 'confirmEmail.submit',
            // FoF-OAuth
            'auth.twitter', 'fof-oauth',
        ];

        if (! empty($userExcludedRoutes)) {
            $extensionExcludedRoutes = array_merge($extensionExcludedRoutes, explode(', ', $userExcludedRoutes));
        }

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
            return new RedirectResponse($this->url->to('forum')->route('index'));
        }

        return $handler->handle($request);
    }
}

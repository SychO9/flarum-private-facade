<?php

/*
 * This file is part of sycho/flarum-private-facade.
 *
 * Copyright (c) 2021 Sami Mazouz.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace SychO\PrivateFacade;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Http\RequestUtil;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Exception\PermissionDeniedException;
use Psr\Http\Message\ServerRequestInterface;
use SychO\PrivateFacade\Api\Controller\DeleteIllustrationController;
use SychO\PrivateFacade\Api\Controller\UploadIllustrationController;
use SychO\PrivateFacade\Providers\RouteExclusionProvider;

return [
    (new Extend\Routes('api'))
        ->post('/private_facade_illustration', 'sycho-private-facade.illustration.upload', UploadIllustrationController::class)
        ->delete('/private_facade_illustration', 'sycho-private-facade.illustration.remove', DeleteIllustrationController::class),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/login', 'sycho-private-facade.login', PrivateFacade::class)
        ->route('/signup', 'sycho-private-facade.signup', PrivateFacade::class)
        ->content(function (Document $document, ServerRequestInterface $request) {
            $routeName = $request->getAttribute('routeName');
            $actor = RequestUtil::getActor($request);

            if ($routeName === 'index' && $actor->isGuest()) {
                throw new PermissionDeniedException();
            }

            if (in_array($routeName, ['sycho-private-facade.login', 'sycho-private-facade.signup'], true)) {
                $document->layoutView = "sycho-private-facade::frontend.forum";
            }
        }),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\View())
        ->namespace('sycho-private-facade', __DIR__.'/views'),

    (new Extend\Settings())
        ->default('sycho-private-facade.header_layout', 'show_only_logo')
        ->default('sycho-private-facade.primary_color_bg', true)
        ->default('sycho-private-facade.force_redirect', true)
        ->default('sycho-private-facade.use_welcome_hero_text', true)
        ->serializeToForum('sycho-private-facade.force_redirect', 'sycho-private-facade.force_redirect', 'boolval')
        ->serializeToForum('sycho-private-facade.route_exclusions', 'sycho-private-facade.route_exclusions', function ($value) {
            return PrivateFacadeMiddleware::getFrontendRouteExclusions($value);
        })
        ->serializeToForum('sycho-private-facade.url_exclusions', 'sycho-private-facade.url_exclusions', function (?string $value) {
            return explode(',', str_replace(' ', '', $value ?? ''));
        })
        ->serializeToForum('sycho-private-facade.illustration_url', 'sycho-private-facade.illustration_path', ExposeIllustration::class)
        ->serializeToForum('sycho-private-facade.header_layout', 'sycho-private-facade.header_layout')
        ->serializeToForum('sycho-private-facade.primary_color_bg', 'sycho-private-facade.primary_color_bg', 'boolval')
        ->serializeToForum('sycho-private-facade.screen_banner_title', 'sycho-private-facade.screen_banner_title', function ($value) {
            $settings = resolve(SettingsRepositoryInterface::class);

            return $settings->get('sycho-private-facade.use_welcome_hero_text')
                ? $settings->get('welcome_title')
                : $value;
        })
        ->serializeToForum('sycho-private-facade.screen_banner_message', 'sycho-private-facade.screen_banner_message', function ($value) {
            $settings = resolve(SettingsRepositoryInterface::class);

            return $settings->get('sycho-private-facade.use_welcome_hero_text')
                ? $settings->get('welcome_message')
                : $value;
        }),

    (new Extend\Middleware('forum'))
        ->add(PrivateFacadeMiddleware::class),
];

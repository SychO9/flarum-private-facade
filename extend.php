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
use Psr\Http\Message\ServerRequestInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->route('/login', 'sycho-private-facade.login', PrivateFacade::class)
        ->route('/signup', 'sycho-private-facade.signup', PrivateFacade::class)
        ->content(function (Document $document, ServerRequestInterface $request) {
            if (in_array($request->getUri()->getPath(), ['/login', '/signup'], true)) {
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
        ->serializeToForum('sycho-private-facade.header_layout', 'sycho-private-facade.header_layout')
        ->serializeToForum('sycho-private-facade.primary_color_bg', 'sycho-private-facade.primary_color_bg', 'boolval'),
];

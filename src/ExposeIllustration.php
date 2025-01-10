<?php

namespace SychO\PrivateFacade;

use Flarum\Http\UrlGenerator;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Cloud;

class ExposeIllustration
{
    protected Cloud $uploadDir;

    public function __construct(protected UrlGenerator $url, Factory $filesystemFactory)
    {
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    public function __invoke(?string $logoPath): ?string
    {
        return $logoPath ? $this->uploadDir->url($logoPath) : null;
    }
}

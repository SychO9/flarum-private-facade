<?php

namespace SychO\PrivateFacade;

use Flarum\Http\UrlGenerator;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Cloud;

class ExposeIllustration
{
    /**
     * @var Cloud
     */
    protected $uploadDir;

    /**
     * @var UrlGenerator
     */
    protected $url;

    public function __construct(UrlGenerator $url, Factory $filesystemFactory)
    {
        $this->url = $url;
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    public function __invoke(?string $logoPath): ?string
    {
        return $logoPath ? $this->uploadDir->url($logoPath) : null;
    }
}

<?php

namespace SychO\PrivateFacade\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Filesystem\Factory;
use Illuminate\Contracts\Filesystem\Filesystem;
use Laminas\Diactoros\Response\EmptyResponse;
use Psr\Http\Message\ServerRequestInterface;

class DeleteIllustrationController extends AbstractDeleteController
{
    protected Filesystem $uploadDir;

    public function __construct(protected SettingsRepositoryInterface $settings, Factory $filesystemFactory)
    {
        $this->uploadDir = $filesystemFactory->disk('flarum-assets');
    }

    protected function delete(ServerRequestInterface $request): void
    {
        $request->getAttribute('actor')->assertAdmin();

        $path = $this->settings->get('sycho-private-facade.illustration_path');

        $this->settings->set('sycho-private-facade.illustration_path', null);

        if ($this->uploadDir->exists($path)) {
            $this->uploadDir->delete($path);
        }

        return new EmptyResponse(204);
    }
}

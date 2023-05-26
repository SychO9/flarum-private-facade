<?php

/*
 * This file is part of ThemeBase.
 *
 * (c) Sami Mazouz <sychocouldy@gmail.com>
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace SychO\PrivateFacade\Api\Controller;

use Flarum\Api\Controller\UploadImageController;
use Intervention\Image\Image;
use Intervention\Image\ImageManager;
use Psr\Http\Message\UploadedFileInterface;

class UploadIllustrationController extends UploadImageController
{
    protected $filePathSettingKey = 'sycho-private-facade.illustration_path';

    protected $filenamePrefix = 'private_facade_illustration';

    /**
     * {@inheritDoc}
     */
    protected function makeImage(UploadedFileInterface $file): Image
    {
        $manager = resolve(ImageManager::class);

        return $manager->make($file->getStream()->getMetadata('uri'))->encode('png');
    }
}

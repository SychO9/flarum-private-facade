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
use Intervention\Image\ImageManager;
use Intervention\Image\Interfaces\EncodedImageInterface;
use Psr\Http\Message\StreamInterface;
use Psr\Http\Message\UploadedFileInterface;

class UploadIllustrationController extends UploadImageController
{
    protected string $filePathSettingKey = 'sycho-private-facade.illustration_path';
    protected string $filenamePrefix = 'private_facade_illustration';

    protected function makeImage(UploadedFileInterface $file): EncodedImageInterface|StreamInterface
    {
        /** @var ImageManager $manager */
        $manager = resolve(ImageManager::class);

        return $manager->read($file->getStream()->getMetadata('uri'))->toPng();
    }
}

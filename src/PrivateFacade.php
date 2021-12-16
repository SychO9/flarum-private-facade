<?php

namespace SychO\PrivateFacade;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;

class PrivateFacade
{
    public function __invoke(Document $document, Request $request)
    {


        return $document;
    }
}

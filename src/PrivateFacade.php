<?php

namespace SychO\PrivateFacade;

use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;
use Symfony\Contracts\Translation\TranslatorInterface;

class PrivateFacade
{
    public function __construct(protected TranslatorInterface $translator)
    {
    }

    public function __invoke(Document $document, Request $request)
    {
        $document->title = $request->getAttribute('routeName') === 'sycho-private-facade.login'
            ? $this->translator->trans("sycho-private-facade.forum.log_in_label")
            : $this->translator->trans("sycho-private-facade.forum.sign_up_label");

        return $document;
    }
}

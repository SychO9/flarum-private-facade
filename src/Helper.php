<?php

namespace SychO\PrivateFacade;

class Helper
{
    public static function itemsInclude(array $items, string $value): bool
    {
        $included = false;

        foreach ($items as $item) {
            // allow for wildcards
            if (strpos($item, '*') !== false) {
                $item = str_replace('*', '.*', preg_quote($item, '/'));

                if (preg_match('/' . $item . '/', $value)) {
                    $included = true;
                    break;
                }
            } elseif ($value === $item) {
                $included = true;
                break;
            }
        }

        return $included;
    }
}

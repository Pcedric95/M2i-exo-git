<?php
require_once "TexteTransformer.php";

class Minuscule implements TexteTransformer {
    public function transform(string $input): string {
        return strtolower($input);
    }
}

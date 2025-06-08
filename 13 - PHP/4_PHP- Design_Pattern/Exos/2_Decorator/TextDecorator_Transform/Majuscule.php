<?php
require_once "TexteTransformer.php";

class Majuscule implements TexteTransformer {
    public function transform(string $input): string {
        return strtoupper($input);
    }
}

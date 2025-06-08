<?php
require_once "TexteTransformer.php";

class Prefixe implements TexteTransformer {
    private string $prefixe;

    public function __construct(string $prefixe) {
        $this->prefixe = $prefixe;
    }

    public function transform(string $input): string {
        return $this->prefixe . $input;
    }
}

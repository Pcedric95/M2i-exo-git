<?php
require_once "TexteTransformer.php";

class Suffixe implements TexteTransformer {
    private string $suffixe;

    public function __construct(string $suffixe) {
        $this->suffixe = $suffixe;
    }

    public function transform(string $input): string {
        return $input . $this->suffixe;
    }
}

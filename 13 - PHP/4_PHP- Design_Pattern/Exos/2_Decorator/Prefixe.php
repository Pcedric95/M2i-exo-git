<?php
require_once "TextDecorator.php";

class Prefixe extends TextDecorator {
    private string $prefixe;

    public function __construct(Texte $texte, string $prefixe) {
        parent::__construct($texte);
        $this->prefixe = $prefixe;
    }

    public function getContent(): string {
        return $this->prefixe . $this->texte->getContent();
    }
}

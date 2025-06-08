<?php
require_once "TextDecorator.php";

class Suffixe extends TextDecorator {
    private string $suffixe;

    public function __construct(Texte $texte, string $suffixe) {
        parent::__construct($texte);
        $this->suffixe = $suffixe;
    }

    public function getContent(): string {
        return $this->texte->getContent() . $this->suffixe;
    }
}

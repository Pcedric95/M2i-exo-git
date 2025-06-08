<?php
require_once "TextDecorator.php";

class Minuscule extends TextDecorator {
    public function getContent(): string {
        return strtolower($this->texte->getContent());
    }
}

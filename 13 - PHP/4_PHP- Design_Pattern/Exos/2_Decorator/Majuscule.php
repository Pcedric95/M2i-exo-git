<?php
require_once "TextDecorator.php";

class Majuscule extends TextDecorator {
    public function getContent(): string {
        return strtoupper($this->texte->getContent());
    }
}

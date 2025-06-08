<?php

require_once 'Texte.php';

class TexteSimple implements Texte{
    private string $contenu;

    public function __construct(string $contenu){
        $this->contenu = $contenu;
    }
    public function getContent(): string{
        return $this->contenu;
    }
}
<?php


require_once "Texte.php";

abstract class TextDecorator implements Texte{
    protected Texte $texte;

    public function __construct(Texte $texte){
        $this->texte = $texte;
    }
}
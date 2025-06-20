<?php

namespace Library\Manager\Models;

class Book {
    private string $titre;
    private string $auteur;

    public function __construct(string $titre, string $auteur) {
        $this->titre = $titre;
        $this->auteur = $auteur;
    }

    public function getTitre(): string {
        return $this->titre;
    }

    public function getAuteur(): string {
        return $this->auteur;
    }
}

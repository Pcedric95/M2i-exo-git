<?php

namespace Library\Manager\Models;

class Category
{
    private ?int $id;
    private string $nom;

    public function __construct(string $nom, ?int $id = null)
    {
        $this->nom = $nom;
        $this->id = $id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom(string $nom): void
    {
        $this->nom = $nom;
    }
}

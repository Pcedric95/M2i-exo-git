<?php

namespace src\model;

use src\model;

class Film
{
    public function __construct(
        private ?string $id = null,
        private ?string $titre = null,
        private ?string $annee_production = null,
        private ?string $genres = null,
        private ?string $age_limite = null,
    )
    {}

    /**
     * @return string|null
     */
    public function getId(): ?string
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTitre(): ?string
    {
        return $this->title;
    }

    /**
     * @return string|null
     */
    public function getAnneeProduction(): ?string
    {
        return $this->annee_production;
    }

    /**
     * @return string|null
     */
    public function getGenres(): ?string
    {
        return $this->genres;
    }

    /**
     * @return string|null
     */
    public function getAgeLimite(): ?string
    {
        return $this->age_limite;
    }

    public function __toString(){
        $genres = $this->genres ? explode(",", $this->genres) : [];
        return <<<EOT
            Film: {$this->getTitre()}
            Annee de production: {$this->getAnneeProduction()}
            Genres: {$this->getGenres()}
            Age limite: {$this->getAgeLimite()}
            
            EOT;

    }


}
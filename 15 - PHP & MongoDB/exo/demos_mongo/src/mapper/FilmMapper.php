<?php

namespace src\mapper;

use src\model\Film;

class FilmMapper
{

    public function fromDocumentToFilm(array $document): Film{
        return new Film(
        $document['id'] ?? null,
        $document['title'] ?? null,
        $document['annee_production'] ?? null,
        isset($document['genres']) ? (array) $document['genres'] : [],
        $document['age_limie'] ?? null,

        );
    }

}
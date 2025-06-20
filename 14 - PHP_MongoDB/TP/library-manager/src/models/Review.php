<?php

namespace Library\Manager\Models;

class Review
{
    public int $book_id;
    public int $note;
    public string $commentaire;
    public \DateTime $date;

    public function __construct(int $book_id, int $note, string $commentaire, ?\DateTime $date = null)
    {
        $this->book_id = $book_id;
        $this->note = $note;
        $this->commentaire = $commentaire;
        $this->date = $date ?? new \DateTime();
    }
}


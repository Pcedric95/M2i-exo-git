<?php

namespace Library\Manager\Models;

use Library\Manager\Database\MySQLConnection;

class Book {
    private ?int $id;
    private string $titre;
    private string $auteur;
    private string $isbn;
    private int $user_id;

    public function __construct(string $titre, string $auteur, string $isbn, int $user_id, ?int $id = null)
    {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->isbn = $isbn;
        $this->user_id = $user_id;
        $this->id = $id;
    }

    // Getters
    public function getId(): ?int {
        return $this->id;
    }

    public function getTitre(): string{
        return $this->titre;
    }
    public function getAuteur(): string {
        return $this->auteur;
    }
    public function getIsbn(): string {
        return $this->isbn;
    }
    public function getUserId(): int {
        return $this->user_id;
    }

    // Enregistrer un livre
    public function save(): void
    {
        $pdo = MySQLConnection::getConnection();
        $stmt = $pdo->prepare("INSERT INTO books (titre, auteur, isbn, user_id) VALUES (:titre, :auteur, :isbn, :user_id)");

        $stmt->execute([
            'titre' => $this->titre,
            'auteur' => $this->auteur,
            'isbn' => $this->isbn,
            'user_id' => $this->user_id
        ]);
        $this->id = $pdo->lastInsertId();
    }

    // Recherche un livre avec son ID
    public static function findById(int $id): ?Book {
        $pdo = MySQLConnection::getConnection();
        $stmt = $pdo->prepare("SELECT * FROM books WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            return new Book($data['titre'], $data['auteur'], $data['isbn'], $data['user_id'], $data['id']);
        }
        return null;
    }



}

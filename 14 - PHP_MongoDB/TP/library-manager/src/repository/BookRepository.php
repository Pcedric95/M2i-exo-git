<?php

namespace Library\Manager\Repository;

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\Book;
use PDO;

class BookRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = MySQLConnection::getConnection();
    }

    /**
     * Insère un nouveau livre en base.
     */
    public function create(Book $book): void
    {
        $stmt = $this->pdo->prepare(
            "INSERT INTO books (titre, auteur, isbn, user_id) VALUES (?, ?, ?, ?)"
        );

        $stmt->execute([
            $book->getTitre(),
            $book->getAuteur(),
            $book->getIsbn(),
            $book->getUserId()
        ]);
    }

    /**
     * Met à jour un livre existant.
     */
    public function update(Book $book): void
    {
        $stmt = $this->pdo->prepare(
            "UPDATE books SET titre = ?, auteur = ?, isbn = ?, user_id = ? WHERE id = ?"
        );

        $stmt->execute([
            $book->getTitre(),
            $book->getAuteur(),
            $book->getIsbn(),
            $book->getUserId(),
            $book->getId()
        ]);
    }

    /**
     * Supprime un livre par son ID.
     */
    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare("DELETE FROM books WHERE id = ?");
        $stmt->execute([$id]);
    }

    /**
     * Récupère tous les livres.
     */
    public function findAll(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM books");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $books = [];
        foreach ($rows as $row) {
            $books[] = new Book(
                $row['titre'],
                $row['auteur'],
                $row['isbn'],
                $row['user_id'],
                $row['id']
            );
        }
        return $books;
    }

    /**
     * Recherche un livre par son ID.
     */
    public function findById(int $id): ?Book
    {
        $stmt = $this->pdo->prepare("SELECT * FROM books WHERE id = ?");
        $stmt->execute([$id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        return $data
            ? new Book($data['titre'], $data['auteur'], $data['isbn'], $data['user_id'], $data['id'])
            : null;
    }

    /**
     * Recherche un livre par son ISBN.
     */
    public function findByIsbn(string $isbn): ?Book
    {
        $stmt = $this->pdo->prepare("SELECT * FROM books WHERE isbn = ?");
        $stmt->execute([$isbn]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        return $data
            ? new Book($data['titre'], $data['auteur'], $data['isbn'], $data['user_id'], $data['id'])
            : null;
    }

    /**
     * Sauvegarde un livre : insert ou update selon s'il a un ID.
     */
    public function save(Book $book): void
    {
        if ($book->getId()) {
            $this->update($book);
        } else {
            $this->create($book);
        }
    }
}

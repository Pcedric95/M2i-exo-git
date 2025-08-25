<?php

namespace Library\Manager\Repository;

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\Category;


use PDO;

class CategoryRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = MySQLConnection::getConnection();
    }

    /**
     * Supprime une catégorie par son ID
     */
    public function delete(int $id): void
    {
        $stmt = $this->pdo->prepare("DELETE FROM categories WHERE id = ?");
        $stmt->execute([$id]);
    }

    /**
     * Récupère toutes les catégories
     *
     * @return Category[]
     */
    public function findAll(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM categories");
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $categories = [];
        foreach ($rows as $row) {
            $categories[] = new Category($row['nom'], $row['id']);
        }
        return $categories;
    }

    /**
     * Récupère une catégorie par son ID
     */
    public function findById(int $id): ?Category
    {
        $stmt = $this->pdo->prepare("SELECT * FROM categories WHERE id = ?");
        $stmt->execute([$id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        return $data ? new Category($data['nom'], $data['id']) : null;
    }

    /**
     * Sauvegarde une catégorie (insert/update selon présence d’ID)
     */
    public function save(Category $category): void
    {
        if ($category->getId()) {
            $this->update($category);
        } else {
            $this->create($category);
        }
    }

    /**
     * Màj une catégorie existante
     */
    public function update(Category $category): void
    {
        $stmt = $this->pdo->prepare("UPDATE categories SET nom = ? WHERE id = ?");
        $stmt->execute([
            $category->getNom(),
            $category->getId()
        ]);
    }

    /**
     * Insère une nouvelle catégorie
     */
    public function create(Category $category): void
    {
        $stmt = $this->pdo->prepare("INSERT INTO categories (nom) VALUES (?)");
        $stmt->execute([$category->getNom()]);
    }

    /**
     * Récupère les catégories associées à un livre
     */
    public function findByBookId(int $bookId): array
    {
        $stmt = $this->pdo->prepare("
        SELECT c.* FROM categories c
        JOIN book_category bc ON c.id = bc.category_id
        WHERE bc.book_id = :bookId
    ");
        $stmt->execute(['bookId' => $bookId]);

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $categories = [];
        foreach ($rows as $row) {
            $categories[] = new \Library\Manager\Models\Category($row['nom'], $row['id']);
        }
        return $categories;
    }

}

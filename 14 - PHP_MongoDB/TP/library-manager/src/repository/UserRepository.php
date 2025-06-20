<?php


namespace Library\Manager\Repository;

use Library\Manager\Database\MySQLConnection;
use Library\Manager\Models\User;
use PDO;

class UserRepository
{
    private PDO $pdo;

    public function __construct()
    {
        $this->pdo = MySQLConnection::getConnection();
    }

    public function save(User $user): void
    {
        $stmt = $this->pdo->prepare("INSERT INTO users (nom, email) VALUES (?, ?)");
        $stmt->execute([
            $user->getNom(),
            $user->getEmail()
        ]);

        // Récupère l'ID généré
        $userReflection = new \ReflectionClass($user);
        $property = $userReflection->getProperty('id');
        $property->setAccessible(true);
        $property->setValue($user, $this->pdo->lastInsertId());
    }

    public function findById(int $id): ?User
    {
        $stmt = $this->pdo->prepare("SELECT * FROM users WHERE id = ?");
        $stmt->execute([$id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            return new User($data['nom'], $data['email'], $data['id']);
        }
        return null;
    }

    public function findAll(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM users");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

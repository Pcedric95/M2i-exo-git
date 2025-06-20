<?php

namespace Library\Manager\Models;
use Library\Manager\Database\MySQLConnection;
use PDO;

class User {
    private ?int $id;
    private string $nom;
    private string $email;

    /**
     * Constructeur de l'utilisateur
     *
     * @param string $nom
     * @param string $email
     * @param int|null $id
     */
    public function __construct(string $nom, string $email, ?int $id = null)
    {
        $this->nom = $nom;
        $this->email = $email;
        $this->id = $id;
    }

    // --- Getters ---
    public static function findById(int $id): ?User {
        $pdo = MySQLConnection::getConnection();

        $stmt = $pdo->prepare("SELECT * FROM users WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $data = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($data) {
            return new User($data['nom'], $data['email'], $data['id']);
        }

        return null;
    }

    public function getId(): ?int {
        return $this->id;
    }

    public function getNom(): string {
        return $this->nom;
    }

    public function getEmail(): string {
        return $this->email;
    }

    // --- Setters ---

    public function setNom(string $nom): void {
        $this->nom = $nom;
    }

    public function setEmail(string $email): void {
        $this->email = $email;
    }
}

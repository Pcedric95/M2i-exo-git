<?php

namespace Library\Manager\Database;

use PDO;
use PDOException;

class MySQLConnection {
    private static ?PDO $pdo = null;

    public static function getConnection(): PDO {
        if (self::$pdo === null) {
            $host = 'localhost';
            $dbname = 'library_db';
            $user = 'root';
            $password = 'root';

            try {
                self::$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $password);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            } catch (PDOException $e) {
                die("Erreur de connexion à MySQL : " . $e->getMessage());
            }
        }

        return self::$pdo;
    }
}

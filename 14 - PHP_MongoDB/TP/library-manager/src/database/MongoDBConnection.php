<?php


namespace Library\Manager\Database;

use MongoDB\Client;
use MongoDB\Database;
use Exception;

class MongoDBConnection
{
    private static ?Database $db = null;

    public static function getDatabase(): Database
    {
        if (self::$db === null) {
            try {
                $client = new Client("mongodb://localhost:27017");
                self::$db = $client->selectDatabase("library_nosql");
            } catch (Exception $e) {
                die("Erreur de connexion!" . $e->getMessage());
            }
        }

        return self::$db;
    }
}

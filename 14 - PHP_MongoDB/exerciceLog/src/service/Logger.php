<?php

namespace src\service;

use MongoDB\Client;

class Logger {
    private $collection;


    // Connexion à Mongodb
    public function __construct() {
        $client = new Client("mongodb://localhost:27017");
        $db = $client->ecole;
        $this->collection = $db->logs;
    }

    // Insertion log
    public function log(string $type, string $operation, string $message): void {
        $this->collection->insertOne([
            'type' => $type,
            'operation' => $operation,
            'message' => $message,
            'created_at' => new \MongoDB\BSON\UTCDateTime()
        ]);
    }
    // Récup des logs derniers logs
    public function getLastLogs(int $limit = 10): array {
        return $this->collection->find(
            [],
            ['sort' => ['created_at' => -1], 'limit' => $limit]
        )->toArray();
    }

    // Vider les logs
    public function clearLogs(): void {
        $this->collection->deleteMany([]);
    }
}

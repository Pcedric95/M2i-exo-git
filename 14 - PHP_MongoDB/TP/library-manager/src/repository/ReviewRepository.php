<?php

namespace Library\Manager\Repository;

use Library\Manager\Database\MongoDBConnection;
use Library\Manager\Models\Review;
use MongoDB\BSON\UTCDateTime;

class ReviewRepository
{
    private $collection;

    public function __construct()
    {
        $db = MongoDBConnection::getDatabase();
        $this->collection = $db->reviews;
    }

    public function addReview(Review $review): void
    {
        $this->collection->insertOne([
            'book_id' => $review->book_id,
            'note' => $review->note,
            'commentaire' => $review->commentaire,
            'date' => new UTCDateTime($review->date->getTimestamp() * 1000),
        ]);
    }

    public function exists(Review $review): bool
    {
        $result = $this->collection->findOne([
            'book_id' => $review->book_id,
            'note' => $review->note,
            'commentaire' => $review->commentaire,
        ]);

        return $result !== null;
    }

    public function findByBookId(int $bookId): array
    {
        return $this->collection->find(['book_id' => $bookId])->toArray();
    }

    public function getAverageNote(int $bookId): float
    {
        $pipeline = [
            ['$match' => ['book_id' => $bookId]],
            ['$group' => ['_id' => null, 'avg' => ['$avg' => '$note']]]
        ];

        $result = $this->collection->aggregate($pipeline)->toArray();

        return isset($result[0]['avg']) ? round($result[0]['avg'], 2) : 0;
    }
}

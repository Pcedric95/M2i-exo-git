<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/products')]
final class ApiProductController extends AbstractController
{
    private array $products = [
        1 => ['id' => 1, 'name'=> 'Clavier', 'price' => 39.99],
        2 => ['id' => 2, 'name'=> 'Souris', 'price' => 19.99],
    ];

    #[Route('', name: 'get_products', methods: ['GET'])]
    public function list(): JsonResponse{
        return new JsonResponse(array_values($this->products), Response::HTTP_OK);
    }

    #[Route('/{id}', name: 'get_product', methods: ['GET'])]
    public function get(int $id): JsonResponse{
        return isset($this->products[$id])
            ? new JsonResponse($this->products[$id], Response::HTTP_OK)
            : new JsonResponse(['error' => 'Produit non trouvé'], Response::HTTP_NOT_FOUND);

    }
}

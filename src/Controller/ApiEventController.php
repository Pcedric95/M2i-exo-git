<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ApiEventController extends AbstractController
{
    #[Route('/api/events', name: 'api_events', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $lieu = $request->query->get('location');

        $evenements = [
            [
                'id' => 1,
                'title' => 'Conférence Symfony',
                'location' => 'Lyon',
                'date' => '2025-06-10',
                'isPublic' => true,
            ],
            [
                'id' => 2,
                'title' => 'Atelier PHP Avancé',
                'location' => 'Paris',
                'date' => '2025-06-15',
                'isPublic' => false,
            ]
        ];

        // Filtrage si "location" est présent dans l'URL
        if ($lieu) {
            $evenements = array_filter($evenements, function ($event) use ($lieu) {
                return strtolower($event['location']) === strtolower($lieu);
            });
        }

        return $this->json(array_values($evenements));
    }





}

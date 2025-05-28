<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class ApiEventController extends AbstractController
{
    // 1er GET évènements avec filtre par lieu
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

        // Filtre apr lieu
        if ($lieu) {
            $evenements = array_filter($evenements, function ($event) use ($lieu) {
                return strtolower($event['location']) === strtolower($lieu);
            });
        }

        return $this->json(array_values($evenements));
    }

    // 2e GET liste évènements publiques
    #[Route('/api/events/public', name: 'api_events_public', methods: ['GET'])]
    public function publicEvents(): Response
    {
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

        $evenementsPublics = array_filter($evenements, function ($event) {
            return $event['isPublic'] === true;
        });

        return $this->json(array_values($evenementsPublics));
    }

// 3e GET Détails d'un évènement




}

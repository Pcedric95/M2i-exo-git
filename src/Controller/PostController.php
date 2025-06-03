<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PostController extends AbstractController
{
    #[Route('/post', name: 'post_index')]
    public function index(): Response
    {
        // ⚙️ Liste simulée d'articles
        $posts = [
            [
                'id' => 1,
                'title' => 'Premier article',
                'content' => 'Contenu du premier article',
                'createdAt' => new \DateTimeImmutable('-2 days'),
            ],
            [
                'id' => 2,
                'title' => 'Deuxième article',
                'content' => 'Contenu du deuxième article',
                'createdAt' => new \DateTimeImmutable('-1 day'),
            ],
        ];

        // 🧠 On passe ces posts à la vue Twig
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }
}

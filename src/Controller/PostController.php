<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

class PostController extends AbstractController
{
    #[Route('/posts', name: 'post_index')]
    public function index(): Response
    {
        // Liste simulée d'articles
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

        // Envoyer à la vue Twig les articles
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }
    #[Route('/post/{id}', name: 'post_show', requirements: ['id' => '\d+'])]
    public function show(int $id): Response
    {
        $posts = [
            1 => [
                'id' => 1,
                'title' => 'Premier article',
                'content' => 'Contenu du premier article',
                'createdAt' => new \DateTimeImmutable('-2 days'),
            ],
            2 => [
                'id' => 2,
                'title' => 'Deuxième article',
                'content' => 'Contenu du deuxième article',
                'createdAt' => new \DateTimeImmutable('-1 day'),
            ],
        ];

        if (!isset($posts[$id])) {
            throw $this->createNotFoundException('Article non trouvé');
        }

        return $this->render('post/show.html.twig', [
            'post' => $posts[$id],
        ]);
    }
    #[Route('/post/create', name: 'post_create')]
    public function create(Request $request): Response
    {
        // Récupère les données du formulaire si soumises
        $title = $request->request->get('title');
        $content = $request->request->get('content');

        // Si les champs ont été remplis
        if ($title && $content) {
            return $this->render('post/create.html.twig', [
                'message' => 'Article publié avec succès !',
                'title' => $title,
                'content' => $content,
            ]);
        }

        return $this->render('post/create.html.twig');
    }


}

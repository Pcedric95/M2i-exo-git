<?php

namespace App\Controller;

use App\Entity\Attendee;
use App\Form\AttendeeForm;
use App\Repository\AttendeeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/attendee')]
final class AttendeeController extends AbstractController
{
    #[Route(name: 'app_attendee_index', methods: ['GET'])]
    public function index(AttendeeRepository $attendeeRepository): Response
    {
        return $this->render('attendee/index.html.twig', [
            'attendees' => $attendeeRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_attendee_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $attendee = new Attendee();
        $form = $this->createForm(AttendeeForm::class, $attendee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($attendee);
            $entityManager->flush();

            return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('attendee/new.html.twig', [
            'attendee' => $attendee,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_attendee_show', methods: ['GET'])]
    public function show(Attendee $attendee): Response
    {
        return $this->render('attendee/show.html.twig', [
            'attendee' => $attendee,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_attendee_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Attendee $attendee, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AttendeeForm::class, $attendee);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('attendee/edit.html.twig', [
            'attendee' => $attendee,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_attendee_delete', methods: ['POST'])]
    public function delete(Request $request, Attendee $attendee, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$attendee->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($attendee);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_attendee_index', [], Response::HTTP_SEE_OTHER);
    }
}

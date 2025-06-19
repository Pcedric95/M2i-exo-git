<?php

namespace src\service;

use src\model\Student;
use src\repository\StudentRepository;
use src\service\Logger;

require_once 'Logger.php';



class StudentService
{
    // Définition des regex à utiliser sous forme de constantes
    const DATE_PATTERN = "/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/";
    const EMAIL_PATTERN = "/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/";

    public function __construct(private StudentRepository $studentRepository){
        $this->logger = new Logger();
    }
    private Logger $logger;


    // Permet d'afficher les étudiants
    function displayStudents(): void
    {
        $students = $this->studentRepository->findAll();
        echo "=== Affichage des étudiants ===\n";
        if(empty($students))
            echo "Aucun étudiant";

        foreach ($students as $student) {
            // On affiche chaque étudiant récupéré depuis la base de données
            echo $student . PHP_EOL;
        }
    }

    // Créé un étudiant et effectue des vérifications
    function createStudent(): bool
    {
        echo "Saisir le prénom : ";
        $firstname = readline();

        if (empty($firstname)) {
            echo "Prénom incorrect";
            return false;
        }

        echo "Saisir le nom : ";
        $lastname = readline();

        if (empty($lastname)) {
            echo "Nom incorrect";
            return false;
        }

        echo "Saisir date naissance (aaaa-mm-jj): ";
        $dob = readline();

        if (!preg_match(self::DATE_PATTERN, $dob)) {
            echo "Date incorrecte";
            return false;
        }

        echo "Saisir email: ";
        $email = readline();

        if (!preg_match(self::EMAIL_PATTERN, $email)) {
            echo "Email incorrect";
            return false;
        }

        $success = $this->studentRepository->save(new Student(null, $firstname, $lastname, $dob, $email));

        if ($success) {
            $this->logger->log("DEBUG", "Insertion", "Ajout de l'étudiant : $firstname $lastname");
        } else {
            $this->logger->log("ERR", "Insertion", "Échec de l'ajout de l'étudiant : $firstname $lastname");
        }

        return $success;
    }


    // Permet d'éditer un étudiant
    function editStudent(): void
    {
        echo "Saisir l'id de l'étudiant: ";
        $id = (int)readline();

        // On récupère l'étudiant en base de données s'il existe
        $student = $this->studentRepository->findById($id);

        // Si l'étudiant n'est pas trouvé, on quitte la fonction
        if (!$student) {
            echo "Aucun étudiant trouvé avec l'id {$id}";
            return;
        }
        readline();

        echo "Saisir prénom: ";
        $firstname = readline();

        // Si l'utilisateur ne saisit rien, firstname garde son ancienne valeur
        if (!empty($firstname)) {
            $student->firstname = $firstname;
        }

        echo "Saisir nom: ";
        $lastname = readline();

        if (!empty($lastname)) {
            $student->lastname = $lastname;
        }

        echo "Saisir date naissance: ";
        $dob = readline();

        if (!empty($dob) && !preg_match(self::DATE_PATTERN, $dob)) {
            $student->date_of_birth = $dob;
        }

        echo "Saisir email: ";
        $email = readline();

        if (!empty($email) && !preg_match(self::EMAIL_PATTERN, $email)) {
            $student->email = $email;
        }

        $this->studentRepository->update($student);
    }

    // Supprime un étudiant par son id
    function deleteStudent(): void
    {
        echo "Saisir l'id de l'étudiant: ";
        $id = (int)readline();

        $success = $this->studentRepository->deleteById($id);

        if($success)
            echo "L'étudiant avec l'ID $id a été supprimé.\n";
        else
            echo "L'id est incorrecte.\n";
    }

    function searchStudentsByIdentity(): void {
        // On prépare le paramètre pour le like
        echo "Saisir le nom ou prénom de l'étudiant: ";
        $input = '%' . readline() . '%';

        $students = $this->studentRepository->findAllByName($input);

        echo "=== Affichage de tout étudiants ayant $input dans leur nom ou prénom === \n";
        foreach ($students as $student) {
            // On affiche chaque étudiant récupéré depuis la base de données
            echo $student . PHP_EOL;
        }
    }



    // === Méthodes appelées depuis l'interface HTML ===

    public function createStudentFromForm(array $data): void
    {
        $firstname = $data['prenom'] ?? '';
        $lastname = $data['nom'] ?? '';
        $dob = $data['date_naissance'] ?? null;
        $email = $data['email'] ?? null;

        if (empty($firstname) || empty($lastname)) {
            $this->logger->log("WARN", "Insertion", "Prénom ou nom manquant.");
            return;
        }

        $success = $this->studentRepository->save(new Student(null, $firstname, $lastname, $dob, $email));

        if ($success) {
            $this->logger->log("DEBUG", "Insertion", "Ajout étudiant : $firstname $lastname");
        } else {
            $this->logger->log("ERR", "Insertion", "Échec ajout étudiant : $firstname $lastname");
        }
    }

    public function editStudentFromForm(array $data): void
    {
        $id = (int)($data['id'] ?? 0);
        if (!$id) return;

        $student = $this->studentRepository->findById($id);
        if (!$student) {
            $this->logger->log("ERR", "Modification", "Étudiant ID $id non trouvé.");
            return;
        }

        if (!empty($data['prenom'])) $student->firstname = $data['prenom'];
        if (!empty($data['nom'])) $student->lastname = $data['nom'];
        if (!empty($data['date_naissance'])) $student->date_of_birth = $data['date_naissance'];
        if (!empty($data['email'])) $student->email = $data['email'];

        $this->studentRepository->update($student);
        $this->logger->log("DEBUG", "Modification", "Étudiant ID $id modifié.");
    }

    public function deleteStudentById(int $id): void
    {
        $success = $this->studentRepository->deleteById($id);

        if ($success) {
            $this->logger->log("DEBUG", "Suppression", "Étudiant ID $id supprimé.");
        } else {
            $this->logger->log("ERR", "Suppression", "Échec suppression étudiant ID $id.");
        }
    }




}
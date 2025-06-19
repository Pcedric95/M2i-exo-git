<?php

require_once './vendor/autoload.php';
require_once './src/service/Logger.php';
require_once './src/repository/StudentRepository.php';
require_once './src/service/StudentService.php';
require_once './src/model/Student.php';
require_once './src/mapper/StudentMapper.php';


use src\repository\StudentRepository;
use src\service\StudentService;
use src\service\Logger;

$db = new PDO("mysql:host=localhost;dbname=php", "root", "root");
$studentRepo = new StudentRepository($db);
$studentService = new StudentService($studentRepo);
$logger = new Logger();

// Récupération des actions formulaire
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Fonctionnement depuis "value" du formulaire HTML
    $action = $_POST['action'] ?? '';

    if ($action === 'Ajouter') {
        $studentService->createStudentFromForm($_POST);
    }

    if ($action === 'Modifier') {
        $studentService->editStudentFromForm($_POST);
    }

    if ($action === 'Supprimer') {
        $id = (int)($_POST['id_supprimer'] ?? 0);
        $studentService->deleteStudentById($id);
    }
}

// Récupérer les étudiants
$students = $studentRepo->findAll();

// Affichage HTML
include '.\src\view\StudentView.php';
;
;

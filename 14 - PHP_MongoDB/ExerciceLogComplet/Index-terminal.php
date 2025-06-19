<?php

require './vendor/autoload.php';
require_once './src/service/Logger.php';

use src\repository\StudentRepository;
use src\service\StudentService;
use src\service\Logger;



$logger = new Logger();

// Affichage du menu
function menu(): void
{
    echo "
       _             _ _             _
   ___| |_ _   _  __| (_) __ _ _ __ | |_ ___
  / _ \ __| | | |/ _` | |/ _` | '_ \| __/ __|
 |  __/ |_| |_| | (_| | | (_| | | | | |_\__ \
  \___|\__|\__,_|\__,_|_|\__,_|_| |_|\__|___/" . PHP_EOL;

    echo "1. Afficher les étudiants
2. Créer un étudiant
3. Editer un étudiant
4. Supprimer un étudiant
5. Chercher par nom ou prénom
6. Afficher les 10 derniers logs\n
7. Vider les logs\n
8. Quitter";
}


$db = null;
try {
    $db = new PDO("mysql:host=localhost;dbname=php", "root", "root");
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "La connexion est établie avec notre BDD!", PHP_EOL;
} catch (PDOException $e){
    echo "Erreur de connexion : " . $e->getMessage(), PHP_EOL;
    return; // Ne continue pas si la connexion échoue.
}

$request = "CREATE TABLE IF NOT EXISTS student (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    firstname VARCHAR(50) NOT NULL, 
    lastname VARCHAR(50) NOT NULL, 
    date_of_birth DATE,
    email VARCHAR(50)
)";


/* --------------------  Ajouter une connection avec MongoDb     -----------------------------------------------*/



// Ajouter un log repo (gérer les accès à la bdd : insertions, récupérer tout les logs et les vider

// Ajouter un log service (ajouter, vider)


$db->exec($request);

$studentRepo = new StudentRepository($db);
$studentService = new StudentService($studentRepo); // ajouter le log repo à student service

while (true) {
    menu();
    $input = readline("Saisir une option: ");
    switch ($input) {
        case "1":
            $studentService->displayStudents();
            break;
        case "2":
            $studentService->createStudent();
            break;
        case "3":
            $studentService->editStudent();
            break;
        case "4":
            $studentService->deleteStudent();
            break;
        case "5":
            $studentService->searchStudentsByIdentity();
            break;
        case "6":
            $logs = $logger->getLastLogs();
            echo "=== 10 Derniers logs ===\n";
            foreach ($logs as $log) {
                echo "[{$log->type}] {$log->operation} : {$log->message}\n";
            }
            break;
        case "7":
            $logger->clearLogs();
            echo "Tous les logs ont bien été supprimés.\n";
            break;
        case "8":
            exit();
        default:
            print("saisie invalide");
    }


    echo "\n---Press enter to continue---\n";
    readline();
}

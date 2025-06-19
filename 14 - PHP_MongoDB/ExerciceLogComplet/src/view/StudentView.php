<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Gestion des étudiants</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 2rem; background-color: #f9f9f9; }
        h2 { color: #333; }
        form, table { margin-bottom: 2rem; }
        input[type="text"], input[type="number"], input[type="date"], input[type="email"] {
            padding: 0.5rem; margin: 0.3rem; width: 300px;
        }
        input[type="submit"] {
            padding: 0.5rem 1rem; margin: 0.3rem;
        }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ccc; padding: 0.5rem; text-align: left; }
        th { background-color: #eee; }
    </style>
</head>
<body>

<h2>Ajouter ou modifier un étudiant</h2>
<form method="POST">
    <input type="number" name="id" placeholder="ID (laisser vide pour un nouvel étudiant)">
    <br>
    <input type="text" name="prenom" placeholder="Prénom" required>
    <br>
    <input type="text" name="nom" placeholder="Nom" required>
    <br>
    <input type="date" name="date_naissance" placeholder="Date de naissance (aaaa-mm-jj)">
    <br>
    <input type="email" name="email" placeholder="Email">
    <br>
    <input type="submit" name="action" value="Ajouter">
    <input type="submit" name="action" value="Modifier">
</form>

<h2>Supprimer un étudiant</h2>
<form method="POST">
    <input type="number" name="id_supprimer" placeholder="ID à supprimer" required>
    <input type="submit" name="action" value="Supprimer">
</form>

</body>
</html>

# Récapitulatif – Exercice Logs & Étudiants : Partie 1

## 🎯 Objectif
Apprendre à :
- Se connecter à une base MongoDB
- Enregistrer des actions (logs)
- Afficher les logs
- Vider la collection de logs

---

## 🔧 Étapes réalisées

### ✅ 1. Création de la classe `Logger`
**Fichier :** `src/service/Logger.php`

**Pourquoi ?**  
Centraliser la gestion des logs dans une seule classe, réutilisable.

**Ce qu’elle fait :**
- Se connecte à MongoDB (`ecole`)
- Insère un log (`log()`)
- Récupère les 10 derniers (`getLastLogs()`)
- Vide tous les logs (`clearLogs()`)

---

### ✅ 2. Connexion MongoDB
**Où ?**  
Dans la classe `Logger`, via :

```php
$client = new Client("mongodb://localhost:27017");
$db = $client->ecole;
```

**Pourquoi là ?**  
Pour rendre `Logger` totalement autonome.

---

### ✅ 3. Ajout de `Logger` dans `StudentService`
**Ce qui a été fait :**
- Déclaration d’un attribut privé :
  ```php
  private Logger $logger;
  ```

- Initialisation dans le constructeur :
  ```php
  $this->logger = new Logger();
  ```

---

### ✅ 4. Log d'insertion dans `createStudent()`
**Extrait ajouté :**
```php
if ($success) {
    $this->logger->log("DEBUG", "Insertion", "Ajout de l'étudiant : $firstname $lastname");
} else {
    $this->logger->log("ERR", "Insertion", "Échec de l'ajout de l'étudiant : $firstname $lastname");
}
```

**Pourquoi ?**  
Pour garder une trace de chaque insertion (réussie ou échouée).

---

### ✅ 5. Ajout d'options dans `Index.php`
- `[6]` Afficher les logs avec :
  ```php
  $logs = $logger->getLastLogs();
  foreach ($logs as $log) {
      echo "[{$log->type}] {$log->operation} : {$log->message}\n";
  }
  ```

- `[7]` Vider les logs :
  ```php
  $logger->clearLogs();
  echo "✅ Tous les logs ont été supprimés.\n";
  ```

---

## ✅ Résultat attendu

- ✅ Chaque action `createStudent()` génère un log dans MongoDB
- ✅ `[6]` affiche les logs dans le terminal
- ✅ `[7]` supprime tous les logs en une commande

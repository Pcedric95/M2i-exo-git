# Presentation d'une serre

**Exercice :** 

Dans un fichier `classes.php`, créer une classe `Vegetal` avec les propriétés suivantes :

- nom (chaîne de caractères)
- couleur (chaîne de caractères)

La classe doit posséder :

- un constructeur prenant en paramètre le nom et la couleur, et initialisant les propriétés correspondantes.
- une méthode `afficher()` qui retourne une chaîne contenant le nom, la couleur et le nom de la classe (`get_class()`).

Créer ensuite deux classes, `Plante` et `Fleur`. Ces classes doivent hériter de la classe Vegetal et surcharger la méthode afficher() pour ajouter une petite description spécifique à leur type (ex : “Je suis une fleur”...).


Ensuite, créer une page HTML qui comprend :

- Un titre (ex : "La serre des 3 fontaines")
- Un formulaire pour ajouter un végétal (stocké dans `$_SESSION`) contenant :
    - un champ `input` pour le nom
    - un champ `input` pour la couleur
    - un champ `select` pour choisir le type de végétal (`Fleur`, `Plante`, ou `Autre`)
    - un bouton `Ajouter`
- Un bouton "Vider la session" pour supprimer tous les végétaux enregistrés

- Un affichage sous forme de "cards" de tous les végétaux enregistrés dans la session, avec le résultat de leur méthode `afficher()`.
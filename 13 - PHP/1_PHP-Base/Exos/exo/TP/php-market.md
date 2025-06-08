# Exercice récapitulatif: Les formulaires

# PHP Market

**Objectif : Créer un script PHP qui simule un panier d'achats en ligne. Le panier doit permettre d'ajouter, de supprimer et d'afficher les articles sélectionnés par l'utilisateur.**

1. Créez un tableau associatif `$articles` contenant les informations suivantes :
    - Nom 
    - Prix
    - Quantité en stock
2. Créez une variable `$panier` initialisée à un tableau vide.
3. Créez une structure conditionnelle qui vérifie si l'utilisateur a soumis un formulaire pour ajouter un article au panier. Si c'est le cas, récupérez le nom de l'article et la quantité souhaitée à partir des données du formulaire.
4. Vérifiez si l'article existe dans le tableau `$articles` et si la quantité demandée est disponible en stock. Si c'est le cas, ajoutez l'article et sa quantité au tableau `$panier`. Sinon, affichez un message d'erreur indiquant que l'article n'est pas disponible ou que la quantité demandée est insuffisante.
5. Créez une structure conditionnelle qui vérifie si l'utilisateur a soumis un formulaire pour supprimer un article du panier. Si c'est le cas, récupérez le code de l'article à partir des données du formulaire et supprimez-le du tableau `$panier`.
6. Créez une boucle itérative qui parcourt le tableau `$panier` et affiche les articles sélectionnés par l'utilisateur, ainsi que leur prix total.
7. Affichez un formulaire HTML permettant à l'utilisateur de sélectionner un article, d'entrer une quantité et de cliquer sur un bouton "Ajouter au panier".
8. Affichez un autre formulaire HTML permettant à l'utilisateur de sélectionner un article dans son panier et de cliquer sur un bouton "Supprimer du panier".
9. Ajoutez des vérifications et des messages d'erreur appropriés pour gérer les cas où l'utilisateur tente d'ajouter ou de supprimer un article inexistant ou une quantité invalide.
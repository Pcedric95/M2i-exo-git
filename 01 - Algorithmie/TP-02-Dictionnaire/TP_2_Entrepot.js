//TP entrepôt

// Etape 1 : Créer un stock initial où l'utilisateur entre le nombre d'articles différents en stock
// et pour chaque article, son nom et son stock initial

// Etape 2 : Afficher le stock
// Etape 3 : Menu de gestion du stock
// Etape 4 : Ajouter du stock
// Etape 5 : Vendre un article
// Etape 6 : Trouver les articles les plus chers


/* --------------------------Fonctions ---------------------------------------- */

//Etape 1 : Créer un stock initial où l'utilisateur entre le nombre d'articles différents en stock

function StockInitial() {
    console.log("👉La Fonction StockInitial est appelée ");

    let nBArticles = parseInt(prompt("Entrez le nombre d'articles différents en stock : "));
    while (isNaN(nBArticles) || nBArticles <= 0) {
        nBArticles = parseInt(prompt("Veuillez entrer un nombre valide (> 0) d'articles :"));
    }

    const stock = new Map();

    for (let i = 0; i < nBArticles; i++) {
        const nom = prompt("Entrez le nom de l'article : ");
        const prix = parseFloat(prompt("Entrez le prix de l'article : "));
        const quantite = parseInt(prompt("Entrez le stock initial de l'article : "));

        stock.set(nom, { quantite: quantite, prix: prix });
    }

    console.log(stock);
    return stock;
}


//Etape 2 : Afficher le stock
function AfficherStock(stock) {
    console.log("👉La Fonction AfficherStock est appelée ");

    console.log("----------- Voici l'état du stock : ----------");
    for (const [nom, { quantite, prix }] of stock) {
        console.log('Article : ' + nom + ' / Quantité : ' + quantite + ' unités' + ' / Prix : ' + prix + ' €');
    }
}



//Etape 3 : Menu de gestion du stock

function MenuGestionStock (stock) {
    console.log("👉La Fonction MenuGestionStock est appelée ");

    let choix = 0;

    while (choix !== 5) { 
        // Afficher le menu
        choix = parseInt(prompt("Entrez : 1 - Ajouter du stock / 2 - Ajouter un nouvel article / 3 - Vendre un article / 4 - Trouver les articles les plus chers / 5 - Quitter"));

        // Vérifier si le choix est valide
        while (isNaN(choix) || choix < 1 || choix > 4) {
            choix = parseInt(prompt("Veuillez entrer un choix valide : 1 - Ajouter du stock / 2 - Ajouter un nouvel article / 3 - Vendre un article / 4 - Trouver les articles les plus chers / 5 - Quitter"));
        }
        switch (choix) {
            case 1:
                AjouterStock(stock);
                break;
            case 2:
                AjouterNouvelArticle(stock);
                break;
                
            case 3:
                VendreArticle(stock);
                break;
            case 4:
                TrouverArticlePlusCher(stock);
                break;
            case 5:
                AfficherStock(stock);
                console.log("Au revoir !");
                break;
        }
    }
}


//Etape 4 : Ajouter du stock
function AjouterStock(stock) {
    console.log("👉La Fonction AjouterStock est appelée ");
    
    let nom = prompt("Entrez le nom de l'article : ");

    if (stock.has(nom)) { // Si l'article existe dans le stock

        let quantite = parseInt(prompt("Entrez la quantité à ajouter : "));
        stock.get(nom).quantite += quantite; // Ajouter la quantité à l'article

        console.log("La quantité de l'article " + nom + " a été augmentée de " + quantite + " unités"); // Afficher le message de confirmation
        alert("La quantité de l'article " + nom + " a été augmentée de " + quantite + " unités");
        AfficherStock(stock); // Afficher le stock

    } else { // Si l'article n'existe pas dans le stock
        console.log("L'article " + nom + " n'existe pas dans le stock");
        alert("L'article " + nom + " n'existe pas dans le stock");
    }
}

//Etape 4.1 : Ajouter un  nouvel article
function AjouterNouvelArticle(stock) {

    console.log("👉La Fonction AjouterNouvelArticle est appelée ");
    const nom = prompt("Entrez le nom de l'article : ");
    
    if(stock.has(nom)) {
        console.log("L'article " + nom + " existe déjà dans le stock");
        alert("L'article " + nom + " existe déjà dans le stock");
        return;
    }

    const prix = parseFloat(prompt("Entrez le prix de l'article : "));
    const quantite = parseInt(prompt("Entrez le stock initial de l'article : "));

    if (isNaN(prix) || isNaN(quantite) || quantite < 0 || prix < 0) {
        alert("Veuillez entrer un prix et une quantité valides");
        return;
    }
    stock.set(nom, { quantite: quantite, prix: prix });
    alert("L'article " + nom + " a été ajouté au stock");
    console.log("L'article " + nom + " a été ajouté au stock");
    AfficherStock(stock);
}

//Etape 5 : Vendre un article
function VendreArticle(stock) {
    
    console.log("👉 La Fonction VendreArticle est appelée ");
    let nom = prompt("Entrez le nom de l'article : ");

    if (stock.has(nom)) { // Si l'article existe dans le stock

        let quantite = parseInt(prompt("'Entrez la quantité à vendre : "));
        let article = stock.get(nom); // Récupérer l'article

        if (quantite <= article.quantite) {
        
            article.quantite -= quantite; // Retirer la quantité à l'article
            console.log("La quantité de l'article " + nom + " a été diminuée de " + quantite + " unités"); // Afficher le message de confirmation
            alert("La quantité de l'article " + nom + " a été diminuée de " + quantite + " unités");
            AfficherStock(stock); // Afficher le stock
        
        } else { 
            console.log("La quantité de l'article " + nom + " est insuffisante");
            alert("La quantité de l'article " + nom + " est insuffisante");
        }
    
    } else {
        console.log("L'article " + nom + "n'existe pas dans le stock")
        alert("L'article " + nom + " n'existe pas dans le stock");
    }
}

//Etape 6 : Trouver les articles les plus chers
function TrouverArticlePlusCher(stock) {
    console.log("👉 Fonction TrouverArticlePlusCher est appelée ");

    let NomArticleLePlusCher = null;
    let prixMaximum = 0;

    let NbArticlesValeurMax = null; // Nom de l'article avec la valeur la plus élevée
    let prixValeurMax = 0; // Valeur maximale de l'article

    for (const [nom, { quantite, prix }] of stock) { // Parcourir le stock

        if (prix > prixMaximum) { // Si le prix de l'article est supérieur au prix maximum
            prixMaximum = prix; // Mettre à jour le prix maximum
            NomArticleLePlusCher = nom; // Mettre à jour le nom de l'article le plus cher
        }

        // Calculer la valeur totale de l'article
        const valeurTotale = prix * quantite; 
        if (valeurTotale > prixValeurMax) { // Si la valeur totale de l'article est supérieure à la valeur max
            prixValeurMax = valeurTotale; // Mettre à jour la valeur max
            NbArticlesValeurMax = nom; // Mettre à jour le nom de l'article
        }
    }


    console.log("L'article le plus cher est : " + NomArticleLePlusCher + " avec un prix de " + prixMaximum + " €");
    console.log("L'article avec la valeur la plus élevée est : " + NbArticlesValeurMax + " avec une valeur de " + prixValeurMax + " €");
}

/* ---------------------------Programme principal -------------------*/

// Programme principal

const monStock = StockInitial(); // Crée le stock avec les questions posées à l'utilisateur
AfficherStock(monStock); // Affiche le stock
MenuGestionStock(monStock); // Menu de gestion du stock

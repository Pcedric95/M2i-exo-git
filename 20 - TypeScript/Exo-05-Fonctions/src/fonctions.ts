// Exercice 1 : Paramètres typés (budget quotidien)


// 1 : Addition des dépenses
function additionDepenses(a: number, b: number): number {
    return a + b;
}


// 2 : Conversion en kilomètres
function toKilometers(v: number | string): string {
    if (typeof v === "number") {
        return v + " km";
    }else {
        return v;
    }
}

// 3 : Calcul du total du panier
function totalPanier (...prix: number[]): number {
    let total = 0;
    for (const p of prix) {
        total += p;
    }
    return total;
}

// --- Tests ---

console.log("## Tests pour l'Exercice 1");

// Test de additionDepenses
console.log("Résultat de l'addition :", additionDepenses(2.50, 15));
// L'appel additionDepenses(2, "3") ne peut pas être testé ici car il est bloqué avant la compilation.

console.log("---");

// Tests de toKilometers
console.log("Conversion (nombre) :", toKilometers(42));
console.log("Conversion (chaîne) :", toKilometers("12km"));

console.log("---");

// Tests de totalPanier
console.log("Total du panier (3 articles) :", totalPanier(10, 4.50, 20))
console.log("Total du panier (0 article) :", totalPanier());


console.log("---   Exercice 2   ---");



// Exercice 2: Valeurs par défaut et optionnels (messagerie et calcul)


// 1 : Salutation personnalisée

function saluer(prenom: String = "Anonyme"): String {
    return `Bonjour, ${prenom}!`;
}

console.log(saluer("Marie")); // Affiche : Bonjour, Marie!
console.log(saluer());

// 2 : Calcul du prix TTC

function prixTTC(prixHT: number, tauxTVA: number = 0.2): number {
    return prixHT * (1 + tauxTVA);
}

// 3 : Pourboire

function ajouterPourboire(total: number, tip?: number): number {
    const pourboireFinal = tip ?? 0;
    return total + pourboireFinal;
}

console.log("Pourboire (20%) :", ajouterPourboire(100, 20));
console.log("Pourboire (0%) :", ajouterPourboire(100, 0));


// 4 : formatContact

function formatContact(opts: {nom?: string; ville?: string}):string {
    const { nom = "Inconnu", ville = "N/A" } = opts;
    return `${nom} (${ville})`;
}

// --- Tests ---

console.log("## Tests pour formatContact");

// Cas 1 : Aucun argument fourni. Ne fonctionne pas
//console.log(formatContact());
// Affiche : Inconnu — N/A

// Cas 2 : Un objet avec juste propriété 'nom'.
console.log(formatContact({ nom: "Alice" }));
// Affiche : Alice — N/A

// Cas 3 : Un objet avec juste propriété 'ville'.
console.log(formatContact({ ville: "Lyon" }));
// Affiche : Inconnu — Lyon

// Cas 4 : Un objet complet est fourni.
console.log(formatContact({ nom: "Bob", ville: "Paris" }));

// Exercice 3 : Fonctions Anonymes & fléchées

// 1 : Arrondir au centime

const arrondirAuCentime = function(n: number): number {
    return Math.round(n * 100) / 100;
}

// 2 : Appliquer une réduction
const appliquerReduction = (prix: number): number => prix * 0.9;



// 3 : --> Correction du formateur
const upperProduits = (liste: string[]): string[] => liste.map((s) => s.toUpperCase());


// 4 : Créer un contact --> Correction du formateur
const creerContact = (nom: string): {id: string; nom: string} => ({
    id : Date.now().toString(), nom
});
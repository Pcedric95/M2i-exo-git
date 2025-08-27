// Exercice 1 : Paramètres typés (budget quotidien)
// 1 : Addition des dépenses
function additionDepenses(a, b) {
    return a + b;
}
// 2 : Conversion en kilomètres
function toKilometers(v) {
    if (typeof v === "number") {
        return v + " km";
    }
    else {
        return v;
    }
}
// 3 : Calcul du total du panier
function totalPanier() {
    var prix = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        prix[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, prix_1 = prix; _a < prix_1.length; _a++) {
        var p = prix_1[_a];
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
console.log("Total du panier (3 articles) :", totalPanier(10, 4.50, 20));
console.log("Total du panier (0 article) :", totalPanier());
console.log("---   Exercice 2   ---");
// Exercice 2: Valeurs par défaut et optionnels (messagerie et calcul)
// 1 : Salutation personnalisée
function saluer(prenom) {
    if (prenom === void 0) { prenom = "Anonyme"; }
    return "Bonjour, ".concat(prenom, "!");
}
console.log(saluer("Marie")); // Affiche : Bonjour, Marie!
console.log(saluer());
// 2 : Calcul du prix TTC
function prixTTC(prixHT, tauxTVA) {
    if (tauxTVA === void 0) { tauxTVA = 0.2; }
    return prixHT * (1 + tauxTVA);
}
// 3 : Pourboire
function ajouterPourboire(total, tip) {
    var pourboireFinal = tip !== null && tip !== void 0 ? tip : 0;
    return total + pourboireFinal;
}
console.log("Pourboire (20%) :", ajouterPourboire(100, 20));
console.log("Pourboire (0%) :", ajouterPourboire(100, 0));
// 4 : formatContact
function formatContact(opts) {
    var _a = opts.nom, nom = _a === void 0 ? "Inconnu" : _a, _b = opts.ville, ville = _b === void 0 ? "N/A" : _b;
    return "".concat(nom, " (").concat(ville, ")");
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

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

function saluer(nom: string, message: string = "Bienvenue"): string {
    return `${message}, ${nom}!`;
}

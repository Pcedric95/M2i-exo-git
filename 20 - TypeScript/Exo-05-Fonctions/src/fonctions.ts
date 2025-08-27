// Exercice 1 :


// 1 : Addition des dépenses
function additionDepenses(a: number, b: number): number {
    return a + b;
}

// 2 : Conversion en kilomètres
function toKilometers(v: number | string): string {
    if (typeof v === "number") {
        return v + " km";
    }else {
        return v + " km";
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



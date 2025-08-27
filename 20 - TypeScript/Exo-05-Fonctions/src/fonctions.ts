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

// Exercice 4 : 'this' et méthodes

export const podometre = {
  pas: 0,
  increment(): void { 
    this.pas += 1 /* augmente this.pas */ },
  reset(): void { this.pas = 0 /* remet à 0 */ },
  // fléchée : n’utilisez PAS this ici
  incrementArrow: (): number => {  return podometre.pas + 1 /* renvoie la nouvelle valeur à partir d’un état interne simulé */ }
};
// incrementArrow : l'accès se fait via le nom de l'objet et donc sa propriété


// Exercice 5 : Typages des retours ("void", "never", "Promise<T>") (journal météo)

// 1 : logAction

function logAction(message: string): void {
    console.log("Partie faire le tour du monde : ", message);
}


// 2: erreurfatale

function erreurFatale(message: string): never {
    throw new Error("Erreur fatale : " + message);
}

// 3 : getMeteo

async function getMeteo(ville: string): Promise<{ ville: string; degres: number }> {
    return Promise.resolve({ ville: ville, degres: 21 });
}



// Exercice 06 : Types de fonctions & callbacks (dépenses mensuelles)

// 1 : 
type Critere<T> = (v: T) => boolean;

// 2 :
function filtrer<T>(arr: T[], crit: Critere<T>): T[] {
    const resultat: T[] = [];


    for (const element of arr){
        if(crit(element)){
            resultat.push(element)
        }
    }
    return resultat;
}

// 3 : 

function depenseEstGrande(n: number): boolean {
    return n >= 100;
}

// 4: minLongueur ---> Correction 

function minLongueur(min: number): (s: string) => boolean {
    return (s) => s.length >= min;
}

filtrer([50, 120, 30], depenseEstGrande);
filtrer(["café", "épicerie"], minLongueur(7))

// Exercice 7 -- correction formateur

// --------------------------------------

// Exercice 8 : Surcharges (heures & minutes)

export function convertirHeure(hhmm: string): number;   // "13:45" -> 825 (minutes)
export function convertirHeure(minutes: number): string; // 825 -> "13:45"
export function convertirHeure(v: number | string): number | string {
  // implémentation unique

  if (typeof v === "string") {
    const [hh, mm] = v.split(":").map(Number);
    return hh * 60 + mm;
  }else{
    const hh = Math.floor(v / 60);
    const mm = v % 60;

    const hhFormatte = hh.toString().padStart(2, '0');
    const mmFormatte = mm.toString().padStart(2, '0');

    return `${hhFormatte}:${mmFormatte}`;

    // Appris padStart
  }
}

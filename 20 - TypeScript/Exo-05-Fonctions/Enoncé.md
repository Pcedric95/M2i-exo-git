# Exercices - Fonctions en TS

> Créez un fichier src/fonctions.ts 

---

## Exercice 1 — Paramètres typés (budget quotidien)

1. `additionDepenses(a: number, b: number): number`
    
    → Retourne la somme de deux montants (ex. café + sandwich).
    
2. `toKilometers(v: number | string): string`
    1. → Si v est un nombre (ex. 5), renvoie "5km".
    2. → Si v est déjà une chaîne en km (ex. "5km"`), renvoie telle quelle.
3. `totalPanier(...prix: number[]): number`
    
    → Additionne un nombre variable de prix. `totalPanier()` doit retourner `0`.
    

**Contraintes**

- `additionDepenses(2, "3")` doit échouer à la compilation.
- `toKilometers("5km")` ne doit pas produire `"5kmkm"`.


## Exercice 2 — Valeurs par défaut & optionnels (messagerie & calculs)

1. `saluer(prenom = "Anonyme"): string`
    
    → Retourne `Bonjour, <prenom> !`.
    
2. `prixTTC(prixHT: number, tauxTVA: number = 0.2): number`
    
    → Retourne le prix TTC (ex. `prixHT=10` → `12` à 20%).
    
3. `ajouterPourboire(total: number, tip?: number): number`
    
    → Ajoute un **pourboire optionnel** (en euros). Si non fourni → `0`.
    
    → Attention à distinguer `0` (valeur valable) de `undefined`.
    
4. `formatContact(opts: { nom?: string; ville?: string }): string`
    
    → Utiliser **déstructuration avec défauts** pour renvoyer `"<nom> — <ville>"`
    
    → Valeurs de repli : `nom="Inconnu"`, `ville="N/A"`.
    

**Contraintes**

- `saluer()` et `saluer(undefined)` → identiques.
- `ajouterPourboire(50, 0)` doit renvoyer `50` (ne pas substituer 0).

## Exercice 3 — Fonctions anonymes & fléchées (liste de courses)

1. `const arrondirAuCentime = function (n: number): number { ... }`
    
    → Retourne `n` arrondi à 2 décimales.
    
2. `const appliquerReduction = (prix: number): number => ...`
    
    → Renvoie le prix avec une réduction de 10% (**retour implicite**).
    
3. `const upperProduits = (liste: string[]) => string[]`
    
    → Renvoie la liste en **majuscules** (map, **retour implicite**).
    
4. `const creerContact = (nom: string) => { id: string; nom: string }`
    
    → Retourne un objet (id “fake” autorisée : `Date.now().toString()`).
    

**Contraintes**

- Pour 4), attention au **retour d’objet** en fléchée (parenthèses !).


## Exercice 4 — `this` et méthodes (compteur de pas)

Créez :

```tsx
export const podometre = {
  pas: 0,
  increment(): void { /* augmente this.pas */ },
  reset(): void { /* remet à 0 */ },
  // fléchée : n’utilisez PAS this ici
  incrementArrow: (): number => { /* renvoie la nouvelle valeur à partir d’un état interne simulé */ return 0; }
};

```

**Objectif**

- `podometre.increment()` doit augmenter `pas`.
- En **commentaire**, expliquez pourquoi **`incrementArrow` ne doit pas toucher `this.pas`** (rappel : `this` lexical des fléchées).


## Exercice 5 — Typage des retours (`void`, `never`, `Promise<T>`) (journal & météo)

1. `logAction(message: string): void`
    
    → Affiche un message d’activité (ex. “sortie courir 5km”).
    
2. `erreurFatale(message: string): never`
    
    → Lance **toujours** une erreur (ex. data corrompue) — ne doit jamais “retourner”.
    
3. `async getMeteo(ville: string): Promise<{ ville: string; degres: number }>`
    
    → **Simuler** une réponse asynchrone : `return Promise.resolve({ ville, degres: 21 })`.
    

**Contraintes**

- `erreurFatale` doit être annotée en `never`.
- `getMeteo("Lyon")` doit fournir un objet typé (pas de `any`).


## Exercice 6 — Types de fonction & callbacks (dépenses mensuelles)

1. `type Critere<T> = (v: T) => boolean`.
2. `filtrer<T>(arr: T[], crit: Critere<T>): T[]`
    
    → Recréez un “filter” **sans** utiliser `Array.prototype.filter`.
    
3. `depenseEstGrande(n: number): boolean`
    
    → Vrai si `n` ≥ 100.
    
4. `minLongueur(min: number): (s: string) => boolean`
    
    → Retourne un **prédicat** qui teste la longueur minimale (ex. descriptions de dépenses).
    

**Contraintes**

- `filtrer([50, 120, 30], depenseEstGrande)` doit garder `120`.
- `filtrer(["café", "épicerie"], minLongueur(7))` doit garder `"épicerie"`.


## Exercice 7 — Interface “call signature” (mise en forme de textes)

1. 

```tsx
export interface Transformeur {
  (v: string): string; // call signature
  locale?: string;     // propriété optionnelle
}

```

1. `const titreCase: Transformeur = (s) => ...`
    
    → Transforme `"bonjour le monde"` → `"Bonjour Le Monde"`.
    
    → `titreCase.locale = "fr-FR"` (optionnel).
    
2. `appliquerTransformeur(textes: string[], t: Transformeur): string[]`.

**Contraintes**

- `appliquerTransformeur(["la plage", "le marché"], titreCase)` → `["La Plage", "Le Marché"]` (accentuation inchangée, juste majuscules initiales des mots).


## Exercice 8 — Surcharges (heures & minutes)

Implémentez **`convertirHeure`** avec surcharges :

```tsx
export function convertirHeure(hhmm: string): number;   // "13:45" -> 825 (minutes)
export function convertirHeure(minutes: number): string; // 825 -> "13:45"
export function convertirHeure(v: number | string): number | string {
  // implémentation unique
}

```

**Règles**

- Format `"HH:MM"` sur 24h, **zéro-padding** (ex. `"07:05"`).
- Validation minimale (heures 0–23, minutes 0–59) — retour au format correct.


## Exercice 9 — Fil rouge “Tâches quotidiennes”

Types :

```tsx
export type Tache = { id: string; titre: string; faite: boolean; priorite?: 1|2|3|4|5 };

```

À écrire :

1. `creerTache(titre: string, priorite: 1|2|3|4|5 = 3): Tache`
2. `majTache(t: Tache, maj: { titre?: string; faite?: boolean; priorite?: 1|2|3|4|5 } = {}): Tache`
    
    → Retourne une **nouvelle** tâche fusionnée (ne pas muter `t`).
    
3. `basculerFaite(t: Tache): Tache`
    
    → Retourne une **nouvelle** tâche avec `faite` inversé.
    
4. `statTaches(ts: Tache[]): { total: number; faites: number; restantes: number }`
    
    → Comptabilise les tâches.
    

**Contraintes**

- `majTache` doit respecter l’**immutabilité** (utilisez `...`).
- `statTaches([])` → `{ total:0, faites:0, restantes:0 }`.


## Exercice 10 — Bonus “qualité de type”

Activez dans `tsconfig.json` (si pas déjà fait) :

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}

```

Puis **corrigez** votre code si des erreurs apparaissent et **commentez** en 1–2 phrases l’impact de **chaque** option (où ça vous a fait corriger quelque chose et pourquoi).
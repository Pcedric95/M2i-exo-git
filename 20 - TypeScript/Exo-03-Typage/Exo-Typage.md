## Exercice 1 — QCM rapides

Pour chaque question, choisissez la bonne réponse.

1. Quelle est la différence entre `any` et `unknown` ?
    
    a) Ils sont identiques.
    
    b) `any` permet tout sans contrôle, `unknown` impose une vérification avant usage.
    
    c) `unknown` est moins sûr que `any`.
    
2. Que se passe-t-il si on écrit :
    
    ```tsx
    let x = 42;
    x = "Texte";
    
    ```
    
    a) Ça compile, car TypeScript accepte tout.
    
    b) Erreur de compilation, car `x` est inféré en `number`.
    
    c) Ça marche seulement si `strictNullChecks` est désactivé.
    
3. Le type `never` est utilisé quand :
    
    a) Une fonction retourne toujours un nombre.
    
    b) Une fonction ne retourne jamais (erreur ou boucle infinie).
    
    c) Une variable est de type inconnu.
    


## Exercice 2 — Typage explicite vs inférence

1. Déclare une variable `prenom` initialisée avec `"Alice"` (sans annotation de type).
2. Déclare une variable `age` **sans valeur initiale**, qui doit être un `number`.
3. Vérifie que si tu fais `age = "trente";` → une erreur est détectée.


## Exercice 3 — Erreurs de typage

Corrige le code suivant pour qu’il compile :

```tsx
let actif = true;
actif = "oui"; // ❌

let valeur;
valeur = 10;
valeur = "texte"; // ❌ devrait être interdit

```


## Exercice 4 — Null et Undefined

Avec `strictNullChecks` activé :

1. Explique pourquoi ce code provoque une erreur :
    
    ```tsx
    let message: string = null;
    
    ```
    
2. Propose une correction pour autoriser `null` dans `message`.


## Exercice 5 — Fonctions

Complète la fonction suivante pour que son type soit correct :

```tsx
// Doit retourner une chaîne de caractères formatée
function bonjour(nom) {
  return "Bonjour " + nom.toUpperCase();
}

```

- Quel type faut-il mettre à `nom` ?
- Quel type faut-il préciser en retour de fonction ?


## Exercice 6 — Bonus (réflexion)

Explique la différence entre ces deux écritures :

```tsx
const pi = 3.14;
let pi2 = 3.14;

```
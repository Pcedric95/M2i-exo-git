## Correction Quiz

### JSX

1. JSX est une extension de syntaxe pour JavaScript recommandée par React pour décrire l'UI.
2. Non, les navigateurs ne comprennent pas le JSX. Il doit être transpilé en JavaScript classique
3. Non, JSX n'est pas obligatoire, mais c'est la manière la plus courante et la plus pratique d'écrire des composants React.
4. En utilisant des accolades {}
5. En utilisant .map() pour transformer un tableau en éléments JSX.
6. Retourner `null` est autorisé et permet de ne rien afficher.
7. Les "expressions JSX" sont des expressions JS intégrées dans des {} pour du contenu dynamique.
8. Oui, on peut, mais c'est déconseillé pour des raisons de sécurité.
9. En utilisant {/* Commentaires */}

### Composants
1. Extraire des composants favorise la réutilisabilité, la maintenabilité et une structure plus claire
2. Quand tu trouves des motifs répétitifs ou une logique bien distincte.
3. On appelle ça du **refactoring**
4. Oui, et c'est même recommandé pour une meilleure organisation.
5. Avec `function MonComposant() {}`
6. Avec `const MonComposant = () => {}`

### Gestion des évènements

1. En créant une fonction, ex `function handleClick() {}`
2. En utilisant un attribut JSX, `onClick={handleClick}`
3. Préfixer par `handle` + nom de l'évènement
4. Oui, et c'est même courant.
5. En utilisant une fonction fléchée, `onClick={() => handleClick(arg)}`
6. Oui
7. `e.target` correspond à l'élément DOM qui a déclenché l'évènement
8. En ajoutant (event) en paramètre `function handleClick(event) {}`
9. `event.preventDefault()` empêche le comportement par défaut (soumettre un formulaire, suivre un lien...)
10. `event.stopPropagation()` empêche la propagation de l'évènement dans le DOM.

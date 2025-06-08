# Navire (trait)

**Exercice :** 

Créer une classe `Navire` qui a pour attributs : `nom` (string) et `longueur` (float). 
Créer une classe `BateauAMoteur` qui a pour attributs : `nom` (string) et `puissance`(int). 

La classe `Navire` et `BateauAMoteur` aura, en plus de leur constructeur, une méthode `naviguer()` qui affiche dans la console : 'Le $nom est en train de naviguer'. 

Créé les trait suivant : `Barre` qui implementera une méthode `virerDeBord()` (affiche "Vire de bord à la barre"), un trait `Voile` qui contient un attribut `nbVoile` et 2 méthodes (`hisser()` et `retracter()`) et un trait `Gouvernail` qui implementera également une méthode `virerDeBord()` (affiche "Vire de bord au gouvernail). 

La classe Navire utilesera les trait `Voile`, `Barre` et `Gouvernail`. 
- En cas de conflits, on privilégiera celle du trait `Gouvernail`.

La classe `BateauAMoteur` utilisera le train `Barre`. 

Créer une instance de `Navire` et une instance de `BateauAMoteur`. 
Utiliser toutes les méthodes disponibles sur chaque objets, y compris celles fournies par les traits. 
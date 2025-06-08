# Personnage jeu vidéo

- Écrivez une classe Personnage qui représente un personnage de jeu vidéo, avec les attributs suivants :

  - `nom` : le nom du personnage, de type String.
  - `vie` : le nombre de points de vie du personnage, de type Number.
  - `force` : le nombre de points de force du personnage, de type Number.

- La classe **Personnage** doit avoir un constructeur qui prend en paramètres le **nom**, la **vie** et la **force** du personnage, et qui initialise les attributs. La classe Personnage doit aussi avoir une méthode attaquer(cible) qui prend en paramètre un objet de type Personnage, et qui inflige des dégâts à la cible en fonction de la force du personnage. La méthode attaquer(cible) doit afficher dans la console le nom du personnage, le nom de la cible et les dégâts infligés.

- Écrivez ensuite une classe **Guerrier** qui hérite de la classe Personnage, et qui ajoute un attribut **armure** de type Number. La classe Guerrier doit aussi **redéfinir la méthode attaquer(cible)** pour infliger des dégâts supplémentaires à la cible en fonction de l’armure du guerrier. La classe Guerrier doit aussi **redéfinir la méthode vie** pour renvoyer la vie du guerrier plus l’armure du guerrier.

- Écrivez enfin une classe **Magicien** qui hérite de la classe Personnage, et qui ajoute un attribut **mana** de type Number. La classe Magicien doit aussi redéfinir la méthode **attaquer(cible)** pour infliger des dégâts à la cible en fonction de la force et du mana du magicien. La classe Magicien doit aussi avoir une méthode soigner(personnage) qui prend en paramètre un objet de type Personnage, et qui restaure des points de vie au personnage en fonction du mana du magicien.

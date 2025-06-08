Rapport d’accessibilité – Formulaire de réservation de voyage


1. Introduction

Ce TP a pour objectif de créer un formulaire de réservation de voyage accessible, en HTML et CSS, en respectant les bonnes pratiques d’accessibilité web.

Il s’adresse à une agence de voyage en ligne souhaitant améliorer l'accessibilité de son site.

2. Structure du formulaire

Le formulaire est divisé en plusieurs blocs grâce aux balises <fieldset> et <legend>, qui permettent de regrouper les champs par thématique :

- Informations personnelles
- Adresse de facturation
- Adresse de destination
- Création de compte
- Informations de voyage
- Classe de voyage
- Options supplémentaires
- Demandes spéciales

Cette organisation améliore la lisibilité et facilite la navigation.

3. Accessibilité technique 

Tous les champs sont reliés à leurs labels via l’attribut for et id.
Les attributs aria-required="true" sont utilisés pour les champs obligatoires.

L’attribut "aria-describedby" est utilisé pour détailler les champs, comme celui du numéro de téléphone.

Le formulaire est intégralement navigable au clavier.

4. Expérience utilisateur

L’interface est claire et épurée, avec une mise en page facile à lire :

- Les contrastes sont respectés (ex. : texte sombre sur fond clair, boutons bien visibles).
- Les boutons radio et les cases à cocher sont accompagnés de labels lisibles et accessibles.
- Les placeholders viennent compléter les labels pour illustrer les données attendues.

5. Validation

Bien que le JavaScript ne soit pas encore utilisé, une première validation est assurée via :

- type="email" pour l’adresse mail
- type="tel" pour le téléphone
- required pour les champs obligatoires

6. Conclusion

Le formulaire respecte les fondamentaux de l’accessibilité : 
- structure logique, 
- navigation au clavier,
- labels et attributs ARIA. 

L'objectif d'offrir une expérience inclusive est globalement atteint.
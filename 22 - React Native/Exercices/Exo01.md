# Exercice React Native : Carte de Profil Utilisateur

## Objectif

Créer un composant de carte utilisateur en React Native en utilisant les composants de base `View`, `Text`, `Image` et les propriétés de style Flexbox.

## Rendu attendu

Votre carte doit afficher :

1. **Section header** : Photo de profil + informations utilisateur
   - Photo de profil circulaire
   - Nom complet
   - Intitulé du poste
   - Note sous forme d'étoiles

2. **Section contact** : Informations de contact
   - Adresse email
   - Numéro de téléphone

## Spécifications visuelles

### Layout
- Carte avec fond blanc et ombres légères
- Coins arrondis
- Marges extérieures
- Padding interne

### Header
- Photo et informations côte à côte
- Photo de profil circulaire (80x80 pixels)
- Informations alignées verticalement à droite de la photo

### Section contact
- Séparée du header par une ligne horizontale
- Informations de contact listées verticalement

### Données à utiliser
- **Nom** : John Doe
- **Poste** : Développeur React Native
- **Note** : 5 étoiles
- **Email** : john@example.com
- **Téléphone** : +33 6 12 34 56 78
- **Photo** : https://randomuser.me/api/portraits/men/1.jpg

## Instructions

### Étape 1 : Création du composant de base

1. Créez un nouveau fichier `UserCard.js`
2. Importez les composants nécessaires depuis `react-native`
3. Créez la fonction composant `UserCard`
4. Exportez le composant par défaut

### Étape 2 : Structure du layout

1. Créez la `View` principale avec le style `card`
2. Ajoutez la section `header` contenant :
   - L'image de profil
   - Les informations utilisateur dans une `View` séparée
3. Ajoutez la section `contact` pour les informations de contact

### Étape 3 : Intégration de l'image

1. Utilisez le composant `Image` avec une source URL
2. Appliquez les styles pour rendre l'image circulaire
3. Définissez des dimensions fixes (largeur et hauteur)

### Étape 4 : Styling avec StyleSheet

1. Créez un objet `StyleSheet` avec `StyleSheet.create()`
2. Définissez les styles suivants :

   **card** :
   - Fond blanc
   - Padding de 20px
   - Marge de 16px
   - Coins arrondis (borderRadius: 10)
   - Ombres (shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation)

   **header** :
   - Direction flex en ligne (row)
   - Alignement des éléments
   - Marge inférieure

   **avatar** :
   - Dimensions : 80x80 pixels
   - Bordure circulaire (borderRadius: 40)
   - Marge droite
   - Prévention du rétrécissement

   **userInfo** :
   - Utilisation de l'espace restant
   - Gestion du retour à la ligne

   **Styles de texte** (name, job, rating) :
   - Tailles de police appropriées
   - Couleurs
   - Marges

   **contact** :
   - Bordure supérieure
   - Padding supérieur

   **contactItem** :
   - Taille de police
   - Couleur
   - Marge inférieure

### Étape 5 : Gestion du responsive

1. Assurez-vous que le texte s'adapte à différentes longueurs
2. Gérez le retour à la ligne automatique
3. Empêchez l'image de se déformer

## Points d'attention

- **Flexbox** : Utilisez `flexDirection: 'row'` pour la section header
- **Responsive** : Pensez aux textes longs qui pourraient déborder
- **Image** : N'oubliez pas de spécifier des dimensions pour les images avec URL
- **Accessibilité** : Gardez des contrastes de couleurs suffisants

## Extensions possibles (Bonus)

Une fois l'exercice de base terminé, vous pouvez :

1. Ajouter un bouton "Contacter" sous les informations de contact
2. Rendre les données dynamiques via des props
3. Créer plusieurs variantes de cartes (compacte, détaillée)
4. Ajouter des animations au toucher

## Aide

Si vous rencontrez des difficultés :

1. Vérifiez que tous les imports sont corrects
2. Assurez-vous que les dimensions de l'image sont spécifiées
3. Utilisez `flex: 1` pour les éléments qui doivent s'étendre
4. N'oubliez pas `flexWrap: 'wrap'` pour la gestion du texte long

Bonne découverte de React Native !
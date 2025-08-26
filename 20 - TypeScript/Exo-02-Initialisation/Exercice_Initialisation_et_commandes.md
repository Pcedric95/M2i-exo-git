# TP TypeScript - Liste des commandes exécutées

Ce document répertorie les commandes utilisées pour réaliser l'exercice sur la manipulation d'outils de TypeScript


## 1. Mise en place du projet

Créer un dossier pour le projet et s'y déplacer :

1.`mkdir Exo-02-Initialisation`

2.`cd Exo-02-Initialisation`


Initialiser npm pour créer le fichier package.json :

`npm init -y`


Installer TypeScript comme dépendance de développement :

`npm install -D typescript`



## 2. Utilisation de npx

Générer le fichier tsconfig.json :

`npx tsc --init`


Créer le dossier src/ :

`mkdir src`


Créer le fichier src/index.ts avec un petit test:

 `function sayHello(name: string): string {`

    return `Bonjour, ${name} !`;
  `}`

`console.log(sayHello("Bonjour buveur d'encre"));`


Compiler le projet TypeScript en JavaScript :

`npx tsc`


Exécuter le fichier JavaScript compilé avec Node.js :

`node dist/index.js`



## 3. Nettoyage avec rimraf

Installer rimraf comme dépendance de développement :

`npm install -D rimraf`


Ajouter le script clean dans `package.json` :

#### dans la section "scripts" :

`"clean": "rimraf dist"`


Tester le script clean après avoir recompilé et exécuté :

`npx tsc`

`node dist/index.js`

`npm run clean`



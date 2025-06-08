//Ceci est le jeu de Noël, vous incarnerez le père Noël et vous devrez retrouver les rennes et les baies magiques pour sauver Noël !
// Vous avez 24 heures pour retrouver les rennes et les baies magiques.


//Etape 1 Variables Globales du jeu Sauvez Noël !

let tempsRestant = 24*60 // temps en minutes
let nombreBaies = 0;
let rennesTrouvés = [];

//Etape 2 : Liste des rennes à retrouver
const rennes = [
    {nom : "Foufou", caractère: "rationnel"},
    {nom : "Gilbert", caractère: "influenceur"},
    {nom : "Frostine", caractère: "timide"},
    {nom : "Borealis", caractère: "frilleux"},
    {nom : "Ventigo", caractère: "maladroit"},
    {nom : "Cupidon", caractère: "blazé"},
    {nom : "BerryBelly", caractère: "gourmand"},
];


//Etape 3 : Fonction jouer

function jouer(){
    alert("C'est parti pour sauver Noël ! Vous aves 24 heures pour retrouver les rennes et les baies magiques !")
    
}
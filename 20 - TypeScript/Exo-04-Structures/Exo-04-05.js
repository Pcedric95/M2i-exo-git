var Niveau;
(function (Niveau) {
    Niveau[Niveau["Debutant"] = 0] = "Debutant";
    Niveau[Niveau["Intermediaire"] = 1] = "Intermediaire";
    Niveau[Niveau["Avance"] = 2] = "Avance";
})(Niveau || (Niveau = {}));
var niveauActuel = Niveau.Intermediaire;
console.log(niveauActuel);
console.log(Niveau[niveauActuel]);

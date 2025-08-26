var Statut;
(function (Statut) {
    Statut["TODO"] = "TODO";
    Statut["EN_COURS"] = "EN_COURS";
    Statut["TERMINE"] = "TERMINE";
})(Statut || (Statut = {}));
var tache;
var tache1 = {
    titre: "Apprendre TypeScript",
    statut: Statut.TODO
};
console.log("T\u00E2che: ".concat(tache1.titre, " [").concat(tache1.statut, "]"));

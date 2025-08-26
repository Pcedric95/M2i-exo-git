enum Statut {
  TODO = "TODO",
  EN_COURS = "EN_COURS",
  TERMINE = "TERMINE"
}

let tache: {
    titre: string;
    statut: Statut;
}

let tache1 = {
    titre: "Apprendre TypeScript",
    statut: Statut.TODO
};

console.log(`Tâche: ${tache1.titre} [${tache1.statut}]`);
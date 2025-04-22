//  Sélectionner la grille ddu html
const grille = document.getElementById("grille");

// Générer 6 lignes de 5 cases

for (let ligne = 0; ligne < 6 ; ligne ++){ // Créer les 6 lignes
    const ligneDiv = document.createElement("div");
    ligneDiv.classList.add("ligne")

    for (let colonne = 0; colonne < 5 ; colonne ++){ // Créer les 5 cases
        const caseDiv = document.createElement("div");
        caseDiv.classList.add("case");
        ligneDiv.appendChild(caseDiv);
    }
    grille.appendChild(ligneDiv); //  Ici, ajouter chaque case dans chaque lignes
}
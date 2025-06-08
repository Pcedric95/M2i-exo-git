const formulaire = document.getElementById('formulairePersonne')
const nomInput = document.getElementById('nom')
const prenomInput = document.getElementById('prenom')
const dateNaissanceInput = document.getElementById('dateNaissance')
const tableauBody = document.getElementById('tableauPersonnes')

// Stocker les personnes 
const personnes = []

formulaire.addEventListener('submit', (e) => {

    e.preventDefault() // empêche le rechargement de la page

    const nom = nomInput.value.trim();
    const prenom = prenomInput.value.trim();
    const dateNaissance = dateNaissanceInput.value.trim();

    //Vérifier que tous les champs sont remplis
    if (nom && prenom && dateNaissance) {
        const personne= {
            nom: nom,
            prenom: prenom,
            dateNaissance: dateNaissance
        }
        // Ajouter dans le tableau
        personnes.push(personne)

        // Mettre à jour l'affichage
        afficherTableau()

        // Réinitialiser les champs
        nomInput.value = ''
        prenomInput.value = ''
        dateNaissanceInput.value = ''
    }
})

function afficherTableau() {
    //Vider le tableau
    tableauBody.innerHTML = ''

    // Pour chaque personne dans le tebleau
    personnes.forEach((personne, index) => {
        // Créer une ligne
        const ligne = document.createElement('tr')

        // Créer les cellules
        const numeroCellule = document.createElement('td')
        numeroCellule.textContent = index + 1

        const nomCellule = document.createElement('td')
        nomCellule.textContent = personne.nom

        const prenomCellule = document.createElement('td')
        prenomCellule.textContent = personne.prenom

        const dateNaissanceCellule = document.createElement('td')
        dateNaissanceCellule.textContent = personne.dateNaissance

        //Ajouter les cellules dans la ligne
        ligne.appendChild(numeroCellule)
        ligne.appendChild(nomCellule)
        ligne.appendChild(prenomCellule)
        ligne.appendChild(dateNaissanceCellule)

        //Ajouter la ligne dans le tableau
        tableauBody.appendChild(ligne)
    })
}

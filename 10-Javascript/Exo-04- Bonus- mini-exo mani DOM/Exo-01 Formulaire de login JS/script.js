const formulaire = document.getElementById('formulaireLogin')
const pseudoInput = document.getElementById('pseudo')
const motdepasseInput = document.getElementById('motdepasse')
const erreurPseudo = document.getElementById('erreurPseudo')
const erreurMotdepasse = document.getElementById('erreurMotdepasse')

//Vérifier si le pseudo est valide ou non

pseudoInput.addEventListener('input', ()=> 
    {
    const valeur = pseudoInput.value.trim();
    if (valeur.length < 3 || valeur.length > 20)
        {
        erreurPseudo.textContent = 'Le pseudo doit contenir entre 3 et 20 caractères.'
        pseudoInput.style.borderColor = 'red'
        erreurPseudo.style.color = 'red'
        console.log(pseudoInput.value)
        }
        else{
        erreurPseudo.textContent = ''
        pseudoInput.style.borderColor = 'green'
        }
    });

//Vérifier si le mot de passe est valide ou non
motdepasseInput.addEventListener('input', ()=>{
    const valeur = motdepasseInput.value.trim();
    if (valeur.length < 8 || valeur.length > 20)
        {
        erreurMotdepasse.textContent = 'Le mot de passe doit contenir entre 8 et 20 caractères.'
        motdepasseInput.style.borderColor = 'red'
        erreurMotdepasse.style.color = 'red'
        console.log(motdepasseInput.value)
        }
        else{
            erreurMotdepasse.textContent = ''
            motdepasseInput.style.borderColor = 'green'
        }

})


formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const pseudo = pseudoInput.value.trim()
    const motdepasse = motdepasseInput.value.trim()

    //Vérification finale avant création de l'objet
    if (pseudo.length >= 3 && pseudo.length <= 20 && motdepasse.length >=8 && motdepasse.length <=20) {
        //Créer l'objet avec les données
        const userDetails = {
            pseudo: pseudo,
            motdepasse: motdepasse
        }
        console.log("Utilisateur connecté")
        alert("Vous êtes connecté")
    }else{
        console.log("Le formulaire contient des erreurs")
        alert("Le formulaire contient des erreurs")
    }
})
// Calculette flexbox fonctionnelle - HTML, CSS et JavaScript

const ecran = document.querySelector('.ecran'); // Sélectionne l'élément avec la classe 'ecran'
const boutons = document.querySelectorAll('.touches div'); // Sélectionne tous les divs à l'intérieur de l'élément avec la classe 'touches'

// Fonction pour ajouter un chiffre ou un opérateur à l'affichage
boutons.forEach((boutons) => 
    {
        boutons.addEventListener('click', (e) => {
            let valeur = e.target.textContent; // Récupère le texte du bouton cliqué 
            if (valeur === 'C'){
                ecran.textContent = '0';  
                return
              }

            if (valeur === '+/_'){
                let nombre = parseFloat(ecran.textContent);
                nombre = -nombre;
                ecran.textContent = nombre;
                return
              }
            if (valeur === '%'){
                let nombre = parseFloat(ecran.textContent);
                nombre = nombre / 100;
                ecran.textContent = nombre;
                return;
            }
            if (valeur === '=') {
                ecran.textContent = eval(ecran.textContent); // afficher le résultat
              } else if (ecran.textContent === '0') {
                ecran.textContent = valeur;
              } else {
                ecran.textContent += valeur;
              }
        console.log(valeur); // J'affiche la valeur clicqué dans la console
       
        

    })        
})    


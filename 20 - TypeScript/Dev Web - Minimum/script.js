document.addEventListener("DOMContentLoaded", () => {
  // Sélection et récupération des éléments
  const themeToggle = document.getElementById('themeToggle');
  const descriptionText = document.getElementById('descriptionText');
  const changeDescriptionBtn = document.getElementById('changeDescriptionBtn');
  const pseudoInput = document.getElementById('pseudoInput');
  const pseudoError = document.getElementById('pseudoError');
  const avatarList = document.getElementById('avatarList');
  const nextBtn = document.getElementById('nextBtn');
  const appRoot = document.getElementById('app');
  const cardTpl = document.getElementById('profileCardTemplate');

  /* 1 - Etat des descriptions */

  const descriptions = [
    "Toujours prêt pour de nouveaux challenges",
    "Passionné par le développement web",
    "Adepte des bonnes pratiques de code",
    "Toujours en quête d'apprentissage",
    "Aimant le travail en équipe",
  ];

  let lastDescriptionIndex = -1;

  let state = {
    theme: "light",
    description: "",
    pseudo: "",
    pseudoValid: false,
    avatar: null,
  };

  // Utilitaires codes

  // Fonction pour obtenir un index aléatoire en excluant un index donné
  const randomIndexExcluding = (len, exclude) => {
    if (len <= 1) return 0;
    let idx;
    do {
      idx = Math.floor(Math.random() * len);
    } while (idx === exclude);
    return idx;
  };

  const onlyLettersRegex = /^[a-zA-Z]+$/;

  // 
  const setTheme = (theme) => {
    const body = document.body;
    body.classList.toggle("theme-dark", theme === "dark");
    body.classList.toggle("theme-light", theme === "light");
    themeToggle.textContent = `Thème: ${theme === "light" ? "Light" : "Dark"}`;
    state.theme = theme;
  };

    const pickDescription = () => {
    const idx = randomIndexExcluding(descriptions.length, lastDescriptionIndex);
    lastDescriptionIndex = idx;
    state.description = descriptions[idx];
    descriptionText.textContent = state.description;
  };

  // Fonction pour valider pseudo
  const validatePseudo = (value) => {
    if (!value) {
      pseudoError.textContent = "";
      pseudoInput.classList.remove("invalid");
      state.pseudoValid = false;
      return;
    }
    const valid = onlyLettersRegex.test(value);
    state.pseudoValid = valid;
    if (!valid) {
      pseudoError.textContent = "Le pseudo doit contenir uniquement des lettres (a-z, A-Z).";
      pseudoInput.classList.add('invalid');
    } else {
      pseudoError.textContent = "";
      pseudoInput.classList.remove('invalid');
    }
  };

  // Fonction pour mettre à jour l'état du bouton "Suivant"
  const updateNextEnabled = () => {
    const canProceed = Boolean(state.pseudoValid && state.description && state.avatar);
    nextBtn.disabled = !canProceed;
  };


  // Fonction pour sélectionner un avatar
  const selectAvatar = (btn) => {
    // retirer l'ancien
    Array.from(avatarList.querySelectorAll('.avatar.selected'))
      .forEach(el => {
        el.classList.remove('selected');
        el.setAttribute('aria-pressed', 'false');
      });

    // ajouter le nouveau
    btn.classList.add('selected');
    btn.setAttribute('aria-pressed', 'true');

    const img = btn.querySelector('img');
    state.avatar = {
      id: btn.dataset.avatar,
      src: img?.getAttribute('src') || ''
    };
  };

  // Fonction pour rendre la carte de profil
  const renderProfileCard = () => {
    // Remplacer le formulaire par la carte
    appRoot.innerHTML = '';
    const node = cardTpl.content.cloneNode(true);

    node.getElementById('cardPseudo').textContent = state.pseudo;
    node.getElementById('cardDescription').textContent = state.description;
    node.getElementById('cardAvatar').setAttribute('src', state.avatar?.src || '');

    appRoot.appendChild(node);

    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
      // Réinitialiser en rechargeant la page (simple pour débuter)
      window.location.reload();
    });
  };


  // Evènements

  // Thème
  themeToggle.addEventListener('click', () => {
    const next = state.theme === 'light' ? 'dark' : 'light';
    setTheme(next);
  });

  // Description initiale + bouton changer
  pickDescription();
  changeDescriptionBtn.addEventListener('click', () => {
    pickDescription();
    updateNextEnabled();
  });

  // Pseudo: validation dynamique
  pseudoInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    state.pseudo = value;
    validatePseudo(value);
    updateNextEnabled();
  });

  // Avatars: sélection exclusive
  avatarList.addEventListener('click', (e) => {
    const btn = e.target.closest('.avatar');
    if (!btn) return;
    selectAvatar(btn);
    updateNextEnabled();
  });

  // Suivant: affichage de la carte finale
  nextBtn.addEventListener('click', () => {
    if (nextBtn.disabled) return;
    renderProfileCard();
  });

  // Thème par défaut
  setTheme('light');
});

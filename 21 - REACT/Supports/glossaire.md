# Terminologie des concepts en React

### **Composants (Components)**

- **Définition :** Ce sont les briques de base d’une application React.
- **Rôle :** Un composant représente une partie de l’interface utilisateur (UI), par exemple un bouton, un formulaire ou un menu.
- **Types :**
    - **Fonctionnels** (les plus courants aujourd’hui) : simples fonctions JavaScript qui retournent du JSX.
    - **Classiques** (via `class`) : plus anciens, moins utilisés dans les nouveaux projets.
- **Avantage :** Réutilisables et modulaires, ils permettent de construire des applications complexes à partir de petites unités indépendantes.

---

### **JSX**

- **Définition :** Abréviation de *JavaScript XML*, c’est une syntaxe qui mélange du JavaScript et une écriture proche du HTML.
- **Rôle :** Décrire l’interface utilisateur à afficher.
- **Particularité :** Les navigateurs ne comprennent pas directement le JSX → il est transformé en JavaScript pur (par Babel, Vite, etc.).
- **Exemple :**
    
    ```jsx
    const App = () => <h1>Hello React !</h1>;
    
    ```
    

---

### **EventHandler (Gestionnaires d’événements)**

- **Définition :** Fonctions déclenchées lorsqu’un événement survient dans l’interface (clic, saisie clavier, soumission de formulaire, etc.).
- **Rôle :** Rendre l’application interactive.
- **Syntaxe :** En JSX, les noms des événements sont en **camelCase** et passent une fonction comme valeur.
- **Exemple :**
    
    ```jsx
    const handleClick = () => alert("Bouton cliqué !");
    <button onClick={handleClick}>Clique-moi</button>
    
    ```
    

---

### **Props (Propriétés)**

- **Définition :** Abréviation de *properties*, ce sont des données transmises **du parent vers l’enfant**.
- **Rôle :** Permettre à un composant d’être dynamique et réutilisable en changeant son contenu ou son comportement via des paramètres.
- **Particularité :** Elles sont **en lecture seule** (un composant enfant ne peut pas les modifier).
- **Exemple :**
    
    ```jsx
    const Welcome = ({ name }) => <h1>Bonjour {name} !</h1>;
    
    <Welcome name="Alice" />
    <Welcome name="Bob" />
    
    ```
    

---

### **State (État)**

- **Définition :** Donnée interne d’un composant, mémorisée par React et pouvant évoluer dans le temps.
- **Rôle :** Permet de rendre une interface dynamique et réactive aux interactions utilisateur.
- **Exemple :**
    
    ```jsx
    const [count, setCount] = useState(0);
    // "count" est le state courant, "setCount" permet de le mettre à jour
    
    ```
    

---

### **useState**

- **Définition :** Hook de React qui permet à un composant fonctionnel de créer et gérer un **state**.
- **Syntaxe :**
    
    ```jsx
    const [state, setState] = useState(valeurInitiale);
    
    ```
    
- **Renvoie :**
    - la valeur actuelle du state,
    - une fonction qui met à jour ce state et provoque un **re-render** du composant.
- **Exemple :**
    
    ```jsx
    const [name, setName] = useState("");
    
    ```
    

---

### **Callback Handler**

- **Définition :** Event Handler spécifique passée dans les props qui sera exécutée lorsqu’un événement ou une action spécifique se produit dans l’enfant jusqu’au parent
- **Schéma :**
1. (A) Le parent définit une fonction.
2. (B) Il la passe à l’enfant via props.
3. (C) L’enfant l’appelle dans son code (souvent dans un event handler).
4. (D) Le parent est “notifié” de l’action.
- **Exemple :**
    
    ### Parent (`App`)
    
    ```jsx
    const App = () => {
      const stories = [ ... ];
    
      // A - fonction définie dans App
      const handleSearch = (event) => {
        // D - reçoit la valeur de Search
        console.log(event.target.value);
      };
    
      return (
        <div>
          <h1>My Hacker Stories</h1>
          {/* B - passage de la fonction en props */}
          <Search onSearch={handleSearch} />
          <hr />
          <List list={stories} />
        </div>
      );
    };
    
    ```
    
    ### Enfant (`Search`)
    
    ```jsx
    const Search = (props) => {
      const [searchTerm, setSearchTerm] = React.useState('');
    
      const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // C - exécution du callback transmis par App
        props.onSearch(event);
      };
    
      return (
        <div>
          <label htmlFor="search">Search: </label>
          <input id="search" type="text" onChange={handleChange} />
          <p>Searching for <strong>{searchTerm}</strong></p>
        </div>
      );
    };
    
    ```
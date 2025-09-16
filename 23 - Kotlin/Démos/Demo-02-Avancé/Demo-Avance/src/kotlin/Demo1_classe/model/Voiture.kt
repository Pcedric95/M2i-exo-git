package Demo1_classe.model

// Par défaut classe en public
// Le constructeur principal est directement mis en en-tete
class Voiture (nom: String, var kilometrage: Double = 0.0, var couleur: String = "", var marque: String = ""){
    var nom: String = ""
        get() = field.uppercase()
        set(value) {
            field = "'"+value+"'"
        }


    private var estDemarree: Boolean = false

    init {
        this.nom = nom
        this.kilometrage = kilometrage
        this.couleur = couleur
        this.marque = marque
        nbVoitures++
        println("Voiture construite : $nom")
    }

    companion object {
        var nbVoitures: Int = 0
            private set

        fun afficherNbVoitures() {
            println("Nombre de voitures : $nbVoitures")
        }
    }

    // Constructeur secondaire (appelant le constructeur principal)
    constructor(nom: String, couleur: String): this(nom, 0.0, couleur, "") {
        this.nom = nom
        this.couleur = couleur
    }

    // Constructeur secondaire (appelant d'abord un autre constructeur secondaire
    // qui appelle le constructeur principal)
    constructor(nom: String): this(nom, "rouge") {
        this.nom = nom
    }

    fun demarrer() {
        if (!estDemarree) {
            println("La voiture est déjà démarée")
        } else {
            println("La voiture démarre")
        }
    }


}
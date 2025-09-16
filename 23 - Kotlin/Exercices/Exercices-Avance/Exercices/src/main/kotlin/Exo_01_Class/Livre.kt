package Exo_01_Class

class Livre (val titre: String, val auteur: String, val nbPages: Int) {

    // Le constructeur secondaire
    constructor(titre: String, auteur: String) : this(titre, auteur, 100)

    // Méthode pour retourner la description du livre
    fun description() = "Le livre \"$titre\" de $auteur, contient $nbPages pages."
}

fun main() {
    // Objet avec constructeur primaire
    val livre1 = Livre("Le buveur d'encre", "Eric Sanvoisin", 48)

    // Objet avec constructeur secondaire
    val livre2 = Livre("L'avare", "Molière")

    // afficher les descriptions des livres
    println(livre1.description())
    println(livre2.description())
}
import Exceptions.DocumentDejaEmprunteException
import Exceptions.DocumentNonEmprunteException
import Consultable

class Livre (
    titre: String,
    anneePublication: Int,
    val auteur: String,
    val nbPages: Int,
    val genre: Genre

): Document(titre, anneePublication), Empruntable, Consultable {
    constructor(
        titre: String,
        auteur: String,
        genre: Genre
    ) :this(
        titre = titre,
        anneePublication = 0,
        auteur = auteur,
        nbPages = 100,
        genre = genre
    )

    // 7. interface Empruntable
    override var estEmprunte: Boolean = false

    override fun emprunter() {
        if (!estEmprunte) {
            estEmprunte = true
            println("Le livre $titre est emprunté avec succès.")
        } else {
            throw DocumentDejaEmprunteException()
        }
    }

    override fun rendre() {
        if (estEmprunte) {
            estEmprunte = false
            println("Le livre $titre a été rendu avec succès.")
        } else {
            throw DocumentNonEmprunteException()
        }
    }


    override fun afficherInformations() {
        println("Livre : $titre, année de publication : $anneePublication, auteur : $auteur, $nbPages pages, Genre : $genre")
    }
}
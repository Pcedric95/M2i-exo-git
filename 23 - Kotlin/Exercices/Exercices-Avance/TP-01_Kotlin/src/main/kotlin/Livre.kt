class Livre (
    titre: String,
    anneePublication: Int,
    val auteur: String,
    val nbPages: Int,
    val genre: Genre

): Document(titre, anneePublication) {
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

    override fun afficherInformations() {
        println("Livre : $titre, année de publication : $anneePublication, auteur : $auteur, $nbPages pages, Genre : $genre")
    }
}
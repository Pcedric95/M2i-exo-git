class Magazine(
    titre: String,
    anneePublication: Int,
    val numero: Int,
) : Document(titre, anneePublication) {
    
    override fun afficherInformations() {
        println("Magazine : $titre, année de publication : $anneePublication, Numéro : $numero")
    }
}
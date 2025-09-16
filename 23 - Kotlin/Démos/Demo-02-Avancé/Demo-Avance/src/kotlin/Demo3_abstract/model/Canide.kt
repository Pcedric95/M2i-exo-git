package Demo3_abstract.model

abstract class Canide(var nom: String) {
    abstract fun parler(); // Méthode abstraite à définir dans l'enfant

    fun manger() {
        println("$nom mange")
    }

}
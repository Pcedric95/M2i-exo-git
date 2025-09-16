package Demo3_abstract.model

class Coyote(nom: String, var age: Int) : Canide(nom) {

    override fun parler() {
        println("$nom dit ahoooouuuuu")
    }
}
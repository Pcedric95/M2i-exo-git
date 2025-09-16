package Demo3_abstract.model

class Loup(nom: String, var age: Int) : Canide(nom) {

    override fun parler() {
        println("$nom dit ahoooouuuuu")
    }
}
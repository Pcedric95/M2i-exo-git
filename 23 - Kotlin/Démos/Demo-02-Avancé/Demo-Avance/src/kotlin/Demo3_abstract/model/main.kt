package Demo3_abstract.model


fun main() {

    var canide: List<Canide> = listOf(Chien("Max", 3), Coyote("Vil", 3), Loup("Paille", 3))

    for (c in canide) {


        if (c is Chien){
            println("${c.nom} est un chien !!")
        }else if (c is Coyote){
            println("${c.nom} est un coyote !!")
        }else if (c is Loup){
            println("${c.nom} est un loup !!")
        }
    }


}

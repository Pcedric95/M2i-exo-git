fun quelleCategorie(age: Int) {
    when (age) {
        in 3..6 -> println("Baby")
        in 7..8 -> println("Poussin")
        in 9..10 -> println("Pupille")
        in 11..12 -> println("Minime")
        else -> println("Cadet")
    }

}

fun main() {
    println(quelleCategorie(5)) // Baby
    println(quelleCategorie(8)) // Poussin
    println(quelleCategorie(10)) // Pupille
    println(quelleCategorie(12)) // Minime
    println(quelleCategorie(15)) // Cadet

    // Appel avec paramètre
    print("Entrez votre age : ")
    val age = readLine() ?: ""
    val ageInt = age.toInt()
    quelleCategorie(ageInt)



}
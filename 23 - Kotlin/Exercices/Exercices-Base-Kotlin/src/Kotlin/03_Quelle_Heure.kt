fun QuelleHeure(heure: String = "12h00"){
    println("il est $heure")
}

fun main() {
    // Appel sans paramètre
    QuelleHeure()

    // Appel avec paramètre
    QuelleHeure("17h30")
    println("Et non ! Ce n'est pas les vacances !")
}
fun compterLettreA(texte: String): Int {
    var compteur = 0
    for (lettre in texte) {
        if (lettre == 'a') {
            compteur++
        }
    }
    return compteur
}

fun main() {

    // Appel sans paramètre
    println(compterLettreA("Kotlin"))
    println(compterLettreA("abracadabra"))


    print("Entrez votre texte : ")
    val texte = readLine() ?: ""
    val resultat = compterLettreA(texte)
    println("Le nombre de lettres 'a' est : $resultat")
}
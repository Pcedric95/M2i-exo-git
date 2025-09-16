// 1. Vérifier que la chaîne d'ADN est valide
fun verifierADN(adn: String): Boolean {
    val caracteresAutorises = setOf('a', 't', 'c', 'g')
    for (caractere in adn.lowercase()) {
        if (caractere !in caracteresAutorises) {
            return false
        }
    }
    return true
}

// 2. Saisir une chaîne d'ADN valide
fun saisirADN(): String {
    var saisie: String
    do {
        print("Entrez une chaîne d'ADN (a, t, c, g uniquement) : ")
        saisie = readLine()?.lowercase() ?: ""
        if (!verifierADN(saisie)) {
            println("La chaîne entrée est invalide, veuillez recommencer.")
        }
    } while (!verifierADN(saisie))
    return saisie
}

// 3. Calculer le pourcentage d'occurrences d'une séquence dans l'ADN
fun proportion(adn: String, sequence: String): Double {
    var compteur = 0
    val longueurSequence = sequence.length

    // On parcourt l'ADN en vérifiant chaque sous-chaîne
    for (i in 0..adn.length - longueurSequence) {
        val morceau = adn.substring(i, i + longueurSequence)
        if (morceau == sequence) {
            compteur++
        }
    }

    // Calcul du pourcentage
    val totalPositions = adn.length - longueurSequence + 1
    return (compteur.toDouble() / totalPositions) * 100
}



fun main() {

    println("bienvenue dans le programme d'ADN de M2I nouvelle génération")
    val adn = saisirADN()
    val sequenceADN = saisirADN()
    val pourcentage = proportion(adn, sequenceADN)
    println("Le pourcentage d'occurrences de la séquence dans l'ADN est : $pourcentage")

}
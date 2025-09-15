// 01 - Nom complet

fun nomComplet(prenom: String, nom: String) = "$prenom $nom"

fun main() {
    print("Entrez votre prénom : ")
    val prenom = readLine() ?: ""

    print("Entrez votre nom : ")
    val nom = readLine() ?: ""

    val resultatNom = nomComplet(prenom, nom)
    println("Votre nom complet est : $resultatNom")
}

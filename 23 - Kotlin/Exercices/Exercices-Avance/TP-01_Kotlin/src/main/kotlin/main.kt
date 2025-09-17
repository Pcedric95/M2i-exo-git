import Genre
import Livre
import Magazine
import Document
import Exceptions.DocumentDejaEmprunteException
import Exceptions.DocumentNonEmprunteException

fun main() {

    // 1. Création de plusieurs livres de genres différents
    val livre1 = Livre("Bel ami", "Hervé Le Tellier", Genre.ROMAN)
    val livre2 = Livre("L'avare", "Molière", Genre.ROMAN)
    val livre3 = Livre("Harry potter", "J.K. Rowling", Genre.FANTASTIQUE)
    val livre4 = Livre("Dragon Ball", "Akira Toriyama", Genre.SCIENCE_FICTION)

    // Création de plusieurs magazines
    val magazine1 = Magazine("Worldwide natural happiness", 2025, 48)
    val magazine2 = Magazine("Les finances du succès", 2024, 3)

    // 2. Stocker dans une collection
    val documents = mutableListOf<Document>(livre1, livre2, livre3, livre4, magazine1, magazine2)

    // 3. Afficher liste
    println("Liste de tout les éléments : ")
    documents.forEach { it.afficherInformations() }
    println()

    // 4. Actions

    // 4.1 consultations
    println("Consultation d'un livre et d'un magazine : ")
    livre3.consulter()
    magazine1.consulter()
    println()


    // 4.2 emprunts
    println("Emprunt d’un livre :")
    try {
        livre1.emprunter()
    } catch (e: DocumentDejaEmprunteException) {
        println("Erreur : ${e.message}")
    }
    println()

    // 4.3 livre déjà emprunté
    println("️ Tentative d’emprunt d’un livre déjà emprunté :")
    try {
        livre1.emprunter()
    } catch (e: DocumentDejaEmprunteException) {
        println("Erreur : ${e.message}")
    }
    println()

    // 4.4 rendre livre non emprunté
    println("️ Tentative de rendre un livre non emprunté :")
    try {
        livre2.rendre()
    } catch (e: DocumentNonEmprunteException) {
        println("Erreur : ${e.message}")
    }
    println()

    // 4.5 retour livre emprunté
    println(" Retour d’un livre emprunté :")
    try {
        livre1.rendre()
    } catch (e: DocumentNonEmprunteException) {
        println("Erreur : ${e.message}")
    }

}
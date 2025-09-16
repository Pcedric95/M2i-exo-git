package Exo_02_Class_and_static_methods

class Etudiant (val nom: String, val age: Int){


    // pour chaque étudiant créé, le compteur augmente de 1
    init {
        compteur++
    }

    companion object {
        // Variable statique compteur
        private var compteur: Int = 0

        // La méthode statique affiche le nombre total d'etudiant crée
        fun afficherCompteur() {
            print("Nombres total d'étuditans crée : $compteur")
        }
    }
    fun description(){ println("L'etudiant $nom a $age ans") }
    fun detailsEtudiant() { println("Nom : $nom, Age : $age") }
}

fun main() {
    val etudiant_01 = Etudiant("Paul", 25)
    val etudiant_02 = Etudiant("Pierre", 22)
    val etudiant_03 = Etudiant("Jeanne", 21)
    val etudiant_04 = Etudiant("Marie", 23)


    Etudiant.afficherCompteur()

    etudiant_01.description()
    etudiant_02.détailsEtudiant()
    etudiant_03.description()
    etudiant_04.détailsEtudiant()

}
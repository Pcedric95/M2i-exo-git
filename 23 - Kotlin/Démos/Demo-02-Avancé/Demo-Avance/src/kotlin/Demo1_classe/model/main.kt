package Demo1_classe.model

import Demo1_classe.model.Voiture

fun main() {
    var voiture = Voiture("Renault", 10000.0, "rouge", "noir")

    println(voiture.nom) // Appel du getter
    voiture.nom = "Renault" // Appel du setter
    println(voiture.nom)

    println(voiture.marque)


    voiture.demarrer()

    var voiture2 = Voiture("Citroen", "rouge")
    println(voiture2)

    Voiture.afficherNbVoitures()
}


fun main() {

    println("Veuillez saisir un prénom : ")
    var prenom: String? = readlnOrNull()

    // while

    println(" Boucle while ")

    while (prenom != "Toto"){
        println("Erreur, ce n'est pas le bon prénom.... ( indice : commence par To et finis par to) ")
        print("Saisissez à nouveau un prénom : ")
        prenom = readlnOrNull()
    }

    // Do while
    var saisie: String?
    println("Boucle do while ")
    do {
        print("Saisir la première lettre de l'alphabet : " )
        saisie = readlnOrNull()
    } while (saisie != "a")

    // for (compteur in sequence)
    // avec range
    println("Boucle for ")
    for (i in 1..10){
        if (i == 5) continue
        if (i == 7) break

        println("Le compteur est à $i")
    }

    println("Bcoule for en comptant à l'envers")
    for (i in 10 downTo 1){
        println("L'instruction n° $i a été éxécutée")
    }


    // avec un tableau
    var tableau = arrayOf(10,20,30)

    println("Tableau parcouru avec for")
    for (i in tableau){
        println(i)
    }

    println("tableau parcouru avec for (via indice)")
    for (i in tableau.indices){
        println(tableau[i])
    }

    println("tableau parcouru avec for (with index)")
    for ((index, element) in tableau.withIndex()) {
        println("Je suis d'indice : $index et de valeur : $element")
    }


}
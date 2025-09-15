fun main() {
    var tableau = Array<Int>(3) {0}
    println("Taille du tableau : ${tableau.size}")

    tableau[0] = 1
    tableau[1] = 2
    tableau[2] = 3

    // Allocation et initialisation
    var tableau2 = intArrayOf(1,2,3)
    var tableau3 = arrayOf("Un", "Deux", "Trois") // Créer un tableau de type inféré (de type String)

    // Tableau avec types différents (Any = équivalent de Object en Java), si possible, à éviter
    var tableau4 = arrayOf(1, 2.4F, "Trois")

    // Parcourir un tableau
    for (o in tableau4)
    println("Objet : $o de type ${o::class}")


    // Copie d'un tableau
    // Fausse copie (référence partagé)
    
    var copie = tableau2
    copie[0] = 5
    print("La valeur du tableau d'origine a été modifiée : ${tableau2[0]}")
    
    // Véritable copie
    
    var copie2 = tableau3
    copie2[0] = "Quatre"
   // println("La valeur du tableau de copie a été modifiée : ${copie2[0]}")
    println("La valeur du tableau d'origine n'a pas été modifiée : ${tableau3[0]}")
    
    // CopyTo
    var copie3 = Array<String?>(3) {null}
    for (i in tableau3.indices) {
        copie3[i] = tableau3[i]
    }
    
    // CopiOf
    var copie4 = tableau3.copyOf()
    copie4[0] = "Cinq"
    println("La valeur du tableau de copie a été modifiée : ${copie4[0]}")
    println("La valeur du tableau d'origine n'a pas été modifiée : ${tableau3[0]}")
    
    // CopyOfRange
    
    var copie5 = tableau3.copyOfRange(1, 2)
    for (i in copie5){
        println("objet : $i")
    }
    
    // Matrice (tableaux de tableau)
    var matrice = arrayOf(
        intArrayOf(1,2,3),
        intArrayOf(4,5,6),
        intArrayOf(7,8,9),
    )
    
    println(matrice[1][2]) // = 6

    for (row in matrice){
        for (valeur in row){
            print("$valeur, ")
        }
    }

    // List (mutable)
    var listOfString = mutableListOf<String>("Un", "Deux", "Trois")
    listOfString.add("Quatre")
    listOfString.remove("Un")
    listOfString.removeAt(1)

    listOfString.sort()
    println("Taille de la liste : ${listOfString.size}")

    for (chaine in listOfString){
        println(chaine)
    }
}
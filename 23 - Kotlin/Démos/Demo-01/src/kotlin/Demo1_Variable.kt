
// Point d'entrée de l'application

fun main() {
    println("Hello Kotlin")
    print("\t Bonjour ")
    print("Tout le monde \n")

    // Déclaration d'une variable

    // var est un mot-clé pour déclarer une variable

    // Chaine de caractères
    var maVariable = "Hello World"
    println(maVariable)

    // Nombre entier
    var entier: Int = 12
    println(entier)
    var `var`: Int = 0 // Les mots-clés peuvent être placés entre guillemets

    // Nombre décimaux
    var decimal: Float = 12.5F

    // Booléen
    var bool: Boolean = true

    // Typage dynamique
    var test = "Hi ?"

    // Affichage d'une variante
    println("Affichage d'une variable : ${entier::class.simpleName}") // Type kotlin
    println("Affichage du type d'une variable : ${entier::class.java} ") // Type équivalent Java

    // String Template
    println("Affichage d'une variable dans ma chaine : $test")

    // Nullable
    // var nullable: String = null // Erreur car null non-prévu
    var nullable: String? = null
    println("Null ! :  $nullable")

    // Constantes
    val constante = "C'est une constante normale"
    println(constante)

    // Concaténation
    var chaine1 = "Chaine 1"
    var chaine2 = "Chaine 2"

    println(chaine1 + " " + chaine2)

    // Lecture d'entrée utilisateur
    print("Entrez votre nom : ")
    val input = readln()
    println("Vous avez tapé : $input, type : ${input::class.simpleName}")

}
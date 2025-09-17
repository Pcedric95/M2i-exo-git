fun main() {
    val fileAttente = ArrayDeque<String>()

    // Ajoutez plusieurs clients (exemple)
    fileAttente.addAll(listOf( "Arthur", "John", "Lennie", "Charles", "Sean"))

    println("File initiale : $fileAttente")
    println("Appuie sur Entrée pour traiter chaque client...")

    while (fileAttente.isNotEmpty()) {
        readln() //  pression de la touche Entrée
        val clientEnCours = fileAttente.removeFirst()
        println("Client en cours : $clientEnCours")
        println("Clients restants : ${fileAttente.size}")
    }

    println("C'est l'heure de la pause.")
}

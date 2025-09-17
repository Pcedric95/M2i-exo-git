
fun main() {

    val participants = sortedSetOf<String>()

    // Ajouts (
    participants.add("Zelda")
    participants.add("Mario")
    participants.add("Luigi")
    participants.add("Mario") // doublon ignoré
    participants.add("Peach")
    participants.add("Yoshi")
    participants.add("Toad")
    participants.add("Toad") // doublon ignoré

    // Affichage
    println("Participants inscrits :")
    participants.forEach { println(it) }

    // Taille
    println("Nombre total de participants: ${participants.size}")

    // Une fois les inscriptions closes, figer la liste
    val participantsFinal = participants.toSet()
}

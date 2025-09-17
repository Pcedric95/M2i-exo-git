fun main () {
    // map avec plusieurs élèves

    val notes = mutableMapOf<String, Int>(
        "Arthur" to 19,
        "John" to 12,
        "Dutch" to 16,
        "Lennie" to 14,
        "Charles" to 16,
        "Sean" to 14,
    )

    // Afficher les notes des élèves

    println("----------------")
    println("Notes avant modification : $notes")
    println("----------------")

    // Modification d'une note
    notes["Dutch"] = 17

    // Afficher la note du dernier élève
    println("Note de Dutch Van der Lind : ${notes["Dutch"]}")
    println("----------------")


    // Afficher la liste complète des élèves
    for (eleve in notes.keys) {
        println("$eleve : ${notes[eleve]}")
        println("----------------")
    }

}
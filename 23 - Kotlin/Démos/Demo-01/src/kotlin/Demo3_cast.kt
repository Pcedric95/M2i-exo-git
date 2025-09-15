fun main() {
    // Pas de cast implicite !!
    val unOctet: Byte = 127
    val unShort: Short = unOctet.toShort()
    val unInt: Int = unShort.toInt()
    val unLong: Long = unInt.toLong()

    println(unLong)

    val unAutreInt: Int = 200
    val unAutreByte: Byte = unAutreInt.toByte()
    println("Valeur casté en Byte : $unAutreByte") // Attention : la valeur est tronquée car supérieure à la capacité d'un Byte

    // Test de type
    val isCompatible = 21 is Int
    val isNotCompatible = 21 is String
    println("21 est compatible avec Int : $isCompatible")
    println("21 est compatible avec String : $isNotCompatible")

    // Smart cast
    val anyVal: Any = 45 // Type any est similaire au type object en Java
    if (anyVal is Int) {
        val entier: Int = anyVal // Pas besoin de caster anyval car la vérification est faite avec 'is'
        println("anyVal est un Int : ${entier + 1}")
    }
    // val autreEntier: Int = anyVal // erreur, anyVal n'est pas un Int car il n'est pas cast en dehors de notre bloc if


    // Cast avec le as

    val varInt: Int? = 22 as? Int

    println("Valeur castée avec as? en Int (sinon null) ")

    // Lecture utilisateur
    print("Entrez votre année de naissance : ")
    var inputAnnee: String? = readlnOrNull()
    var anneeNaissance: Int? = inputAnnee?.toIntOrNull()
    println("Vous êtes né(e) en $anneeNaissance")

}



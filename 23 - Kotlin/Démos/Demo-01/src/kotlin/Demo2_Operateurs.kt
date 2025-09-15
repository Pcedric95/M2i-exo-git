import kotlin.math.*


fun main() {

    // Opérateurs arithmétiques
    println(1 + 1)
    println(2 - 1)
    println(2 * 2)
    println(3 / 2)
    println(3 % 2)

    // Opérateurs de comparaison
    println(1 == 1)
    println(1 != 6)
    println(1 > 1)
    println(1 < 1)
    println(1 >= 1)
    println(1 <= 1)

    println("toto" == "Toto") // comparison de chaines de caractères

    // Opérateurs logiques

    // ET
    println(true && false)

    // OU
    println(true || true)

    // NOT
    println(!true)

    // XOR
    println(true.xor(false))


    // Opérateurs d'affectation et d'incrémentation
    var a = 15
    a += 1
    println(a++)
    println(a)
    println(a--)
    println(a)
    println(++a)
    println(--a)

    // Opérateurs de type
    var b: Int = 1
    println(b::class.simpleName)

    // Opérateurs de null
    var c: String? = null
    println(c?.length)

    // Méthodes mathématiques
    println(Math.max(1, 2))
    println(Math.pow(2.0, 3.0)) // Kotlin utilise la bibliothèque mathématique de Java
    println(kotlin.math.floor(2.5))
    println(kotlin.math.ceil(2.5))
    println(kotlin.math.round(2.5))
    println(kotlin.math.sqrt(4.0))


}
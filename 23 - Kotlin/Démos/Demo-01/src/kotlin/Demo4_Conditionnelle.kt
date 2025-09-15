import kotlin.random.Random

fun main() {
    var age = 18

    // Si
    if (age >= 18) 
        println("Vous ête majeur")

    // Si ... Sinon
    if (Math.PI > 4) {
        println("Votre pi est bizarre 4")
    } else {
        println("Votre pi est normal")
        println("Votre pi est 3.14")
    }

    // Si ... Sinon
    var isCorrectPi = if (Math.PI > 4) {
        "false"
    } else {
        print("Dans le else ")
        "true"
    }

    println("La valeur de isCorrectPi est : $isCorrectPi")


    // Si ... Sinon si ... Sinon
    var nbRandom= Random.nextInt(1, 100)
    if (nbRandom < 10)
        println("Le nombre $nbRandom est un chiffre")
    else if (nbRandom <= 80)
        println("Le nombre $nbRandom est un nombre compris entre 10 et 80")
    else
        println("Le nombre $nbRandom est supérieur à 80")

    var isSup50: Boolean = nbRandom > 50
    var Sup50str = if (isSup50) "Le nombre random est supérieur à 50" else "Le nombre est inférieur à 50"

    println(Sup50str)

    // Elvis operator
    var messageVide: String? = null
    var message = messageVide ?: "Message par defaut"

    println(message)

    // When (switch...case like)
    var codeHttp = 200
    var result: String = when {
        codeHttp == 200 -> "OK"
        codeHttp == 400 -> "Client Error"
        codeHttp == 500 -> "Server Error"
        else -> "Unknown"
    }

    println(result)


    var autreResult: String = when (codeHttp) {
        200 -> "OK"
        in 400 .. 405 -> "Client Error"
        500 -> "Server Error"
        else -> "Unknown"
    }
}
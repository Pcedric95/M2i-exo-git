import java.sql.Ref

// Définition d'une fonction
// Nous pouvons omettre le 'unit' si nous n'avons pas de type retour
fun displayMessage(message: String){
    println(message)
}
// Il est possible de renvoyer une valeur avec le mot-clé 'return'
fun soustraire(a: Int, b: Int): Int{
    return a - b
}

fun addition(a: Int, b: Int): Int{
    return a + b
}

fun multiply(a: Int, b: Int): Int{
    return a * b
}

// Plage de valeur avec vararg (équivalent de params... en Java)
fun bienvenueA(vararg prenoms: String){
    var hello = "Bienvenue à "
    for (prenom in prenoms){
        hello += " $prenom"
    }
    println(hello)
}

fun main() {
    displayMessage("Hello World")

    println(addition(2, 4))
    println(soustraire(2, 4))
    println(multiply(2, 4))
    println(soustraire(4,2)) // Appel avec paramètres nommés

    bienvenueA("Monsieur", "Madame", "Mademoiselle")
}
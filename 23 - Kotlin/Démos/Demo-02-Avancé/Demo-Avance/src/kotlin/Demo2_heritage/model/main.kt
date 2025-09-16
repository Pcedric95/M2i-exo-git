package Demo2_heritage.model

fun main() {
    val chien = Chien("Rex", 5)
    val animal: Animal = Chien("Max", 3)

    chien.manger()
    chien.sePresenter()
    chien.aboyer()
    chien.aboyer("le facteur")
    chien.aboyer(3)

    animal.manger()
    animal.sePresenter()
}

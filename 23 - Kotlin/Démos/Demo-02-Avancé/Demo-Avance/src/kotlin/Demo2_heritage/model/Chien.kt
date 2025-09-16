package kotlin.Demo2_heritage.model

class Chien(name: String, var age: Int) : Animal(name) {

    override fun manger() {
        println("Le chien mange")
    }

    override fun sePresenter() {
        super.sePresenter()
        println("Je suis un chien qui s'appelle $name et j'ai $age ans")
    }

    fun aboyer() {
        println("Le chien aboie")
    }

    fun aboyer(cible: String) {
        println("Le chien aboie sur $cible")
    }

    fun aboyer(cible: Int) {
        println("Le chien aboie $cible fois")
    }
}

package Demo2_heritage.model

open class Animal(var name: String) {

    open fun faireDuBruit() {
        println("L'animal fait du bruit")
    }

    open fun manger() {
        println("$name mange")
    }

    open fun sePresenter() {
        println("Je suis un animal qui s'appelle $name")
    }
}
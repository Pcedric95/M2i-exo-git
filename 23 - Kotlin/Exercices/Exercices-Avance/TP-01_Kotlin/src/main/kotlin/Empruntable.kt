interface Empruntable {
    val estEmprunte: Boolean

    abstract fun emprunter()
    abstract fun rendre()
}
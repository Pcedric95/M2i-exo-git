package Exceptions

class DocumentDejaEmprunteException(message: String = "Cet élément est déjà emprunté.") : Exception(message)


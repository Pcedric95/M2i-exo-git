package Exceptions

class DocumentNonEmprunteException(message: String = "Cet élément n'est pas emprunté.") : Exception(message)
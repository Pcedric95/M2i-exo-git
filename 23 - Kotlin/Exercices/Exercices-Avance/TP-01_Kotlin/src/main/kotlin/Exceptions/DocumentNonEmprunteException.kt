package Exceptions

class DocumentNonEmprunteException(message: String = "Ce document n'est pas emprunté.") : Exception(message)
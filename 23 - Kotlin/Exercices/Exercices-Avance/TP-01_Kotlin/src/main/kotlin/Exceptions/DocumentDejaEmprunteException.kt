package Exceptions

class DocumentDejaEmprunteException(message: String = "Ce document est déjà emprunté.") : Exception(message)


package com.example.correctionnotefrais.model


data class NoteFrais(
    var id: Int = 0,
    var nomEmploye: String = "",
    var numeroEmploye: String = "",
    var departement: String = "",
    var typeFrais: String = "",
    var montant: Double = 10.0,
    var avecTVA: Boolean = false,
    var fraisRecurrent: Boolean = false,
    var justificatifFourni: Boolean = false,
    var urgence: String = "Normal",
    // Nouveaux champs pour validation
    var statut: String = "En attente", // "Approuvé", "Refusé", "En attente"
    var commentairesManager: String = "",
    var remboursementPrioritaire: Boolean = false,
    var delaiTraitement: String = "48h",
    var dateCreation: String = "",
    var dateValidation: String = ""
)
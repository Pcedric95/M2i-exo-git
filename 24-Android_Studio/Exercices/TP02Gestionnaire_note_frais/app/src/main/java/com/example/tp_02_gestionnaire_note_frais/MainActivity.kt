package com.example.tp_02_gestionnaire_note_frais

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

data class NoteFrais(
    var nomEmploye: String = "",
    var numeroEmploye: String = "",
    var departement: String = "",
    var typeFrais: String = "",
    var montant: Double = 10.0,
    var avecTVA: Boolean = false,
    var fraisRecurrent: Boolean = false,
    var justificatifFourni: Boolean = false,
    var urgence: String = "Normal"
) {
    fun isNomValide(): Boolean {
        val mots = nomEmploye.trim().split("\\s+".toRegex())
        return mots.size >= 2 && mots.all { it.isNotEmpty() }
    }

    fun isNumeroValide(): Boolean {
        return numeroEmploye.matches("\\d{5}".toRegex())
    }

    fun calculerMontantTTC(): Double {
        return if (avecTVA) montant * 1.20 else montant
    }
}

class MainActivity : AppCompatActivity() {

    private lateinit var noteFrais: NoteFrais
    private lateinit var montantTextView: TextView
    private lateinit var montantSeekBar: SeekBar
    private lateinit var montantTTCTextView: montantTTCTextView
    private lateinit var budgetProgressBar: ProgressBar





    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        noteFrais = NoteFrais()
        initialiserComposants()
        configurerEcouteurs()
    }

    private fun initialiserComposants() {
        montantTextView = findViewById(R.id.montantTextView)
        montantSeekBar = findViewById(R.id.montantSeekBar)
        montantTTCTextView = findViewById(R.id.montantTTCTextView)
        budgetProgressBar = findViewById(R.id.budgetProgressBar)
    }

    private fun configurerEcouteurs() {}

}
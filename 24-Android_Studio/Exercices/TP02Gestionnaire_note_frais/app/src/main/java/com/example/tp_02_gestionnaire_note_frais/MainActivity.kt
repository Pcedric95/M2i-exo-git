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

/*private lateinit var noteFrais: NoteFrais
private lateinit var montantTextView: TextView
private lateinit var montantSeekBar: SeekBar
private lateinit var ticketTextView: TextView
private lateinit var budgetProgressBar: ProgressBar*/






class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }
    }
}
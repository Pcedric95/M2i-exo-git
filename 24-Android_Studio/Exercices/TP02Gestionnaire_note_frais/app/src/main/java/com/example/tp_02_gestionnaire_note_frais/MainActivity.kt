package com.example.tp_02_gestionnaire_note_frais

import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import android.widget.TextView
import android.widget.SeekBar
import android.widget.ProgressBar
import android.widget.Button
import android.widget.CheckBox
import android.widget.Switch
import android.widget.RadioGroup
import android.widget.Spinner
import android.widget.EditText


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
    private lateinit var montantTTCTextView: TextView
    private lateinit var budgetProgressBar: ProgressBar




    // Méthode appelée à la création de l'activité
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)  // Layout de l'activité

        noteFrais = NoteFrais()  // Initialiser une nouvelle note de frais
        initialiserComposants()  // Initialiser les composants UI
        configurerEcouteurs()    // Configurer les écouteurs d'événements
    }

    // Lier les composants UI  à leurs IDs
    private fun initialiserComposants() {
        montantTextView = findViewById(R.id.montantTextView)
        montantSeekBar = findViewById(R.id.montantSeekBar)
        montantTTCTextView = findViewById(R.id.montantTTCTextView)
        budgetProgressBar = findViewById(R.id.budgetProgressBar)
    }

    // Configure les écouteurs d'événements pour les interactions utilisateur
    private fun configurerEcouteurs() {
        // Écouteur pour le SeekBar : met à jour le montant affiché quand l'utilisateur interagit
        montantSeekBar.setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
                noteFrais.montant = progress.toDouble()  // Met à jour le montant dans noteFrais
                montantTextView.text = "Montant : ${noteFrais.montant} €"  // Met à jour l'affichage
            }
            override fun onStartTrackingTouch(seekBar: SeekBar?) {}  // Méthode appelée quand l'utilisateur commence à interagir
            override fun onStopTrackingTouch(seekBar: SeekBar?) {}   // Méthode appelée quand l'utilisateur arrête d'interagir
        })
    }
}
package com.m2i;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class HangmanTest {

    @Mock
    private WordGenerator wordGenerator; // faux WordGenerator

    private Hangman game;

    @BeforeEach
    void setUp() {
        // imposer mot JAVA avec le mock
        when(wordGenerator.getRandomWord()).thenReturn("JAVA");
        game = new Hangman(wordGenerator, 5);
    }

    @Test
    @DisplayName("Au démarrage -> mot masqué, 5 essais, pas gagné ni perdu")
    void startState_shouldBe_MaskedWithAttempts() {
        assertEquals("____", game.getMaskedWord()); // mot masqué
        assertEquals(5, game.getRemainingAttempts()); // 5 essais
        assertFalse(game.isGameWon()); // pas encore gagné
        assertFalse(game.isGameOver()); // pas encore fini

        // Vérifie si le mock a été utilisé
        verify(wordGenerator).getRandomWord();
    }
}

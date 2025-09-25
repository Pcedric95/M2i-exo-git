package com.m2i;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {

    @Test
    @DisplayName("Additionner 5 et 7 doit donner 12")
    void testAddition() {
        Calculator calc = new Calculator();
        int resultat = calc.add(5, 7);
        assertEquals(12, resultat);
    }

    @Test
    @DisplayName("Soustraire 4 à 10 doit donner 6")
    void testSoustraction() {
        Calculator calc = new Calculator();
        int resultat = calc.sub(-10, 4);
        assertEquals(6, resultat);
    }

    @Test
    @DisplayName("Multiplier 3 par 5 doit donner 15")
    void testMultiplication() {
        Calculator calc = new Calculator();
        int resultat = calc.mul(3, 5);
        assertEquals(15, resultat);
    }

    @Test
    @DisplayName("Diviser 20 par 4 doit donner 5")
    void testDivision() {
        Calculator calc = new Calculator();
        int resultat = calc.div(20, 4);
        assertEquals(5, resultat);
    }

    @Test
    @DisplayName("Division par zéro doit lancer une ArithmeticException")
    void testDivisionParZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.div(10, 0));
    }

}

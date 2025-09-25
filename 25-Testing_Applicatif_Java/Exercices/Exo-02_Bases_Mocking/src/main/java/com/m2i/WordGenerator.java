package com.m2i;

import java.util.*;

public class WordGenerator {
    private final List<String> words;
    private final Random random;

    public WordGenerator() {
        // liste fixe pour faire simple
        this.words = List.of("JAVA", "SPRING", "DOCKER", "REACT");
        this.random = new Random();
    }

    // va renvoyer un mot aléatoire
    public String getRandomWord() {
        int index = random.nextInt(words.size());
        return words.get(index);
    }
}

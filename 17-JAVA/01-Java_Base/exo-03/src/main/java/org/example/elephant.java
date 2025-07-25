package org.example;

public class elephant extends Animal{
    public String name;
    public int age;

    public elephant(int age, String name) {
        this.age = age;
        this.name = name;
    }

    @Override
    public void manger() {
        System.out.println(name + "l'éléphant mange de la Salade italienne");
    }

    @Override
    public void dormir() {
        System.out.println(name + "l'éléphant dort la tête dans l'eau");
    }

    @Override
    public void faireDuBruit() {
        System.out.println(name + "l'éléphant fait SPLASH !");
    }
}

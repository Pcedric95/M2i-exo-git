package org.example;

public class lion extends Animal {
    public String name;
    public int age;

    public lion(int age, String name) {
        this.age = age;
        this.name = name;
    }

    public void manger(){
        System.out.println(name + "le lion mange de la viande");
    }

    @Override
    public void dormir() {
        System.out.println(name + "le lion dort les pattes en l'air");
    }

    @Override
    public void faireDuBruit() {
        System.out.println(name + "le lion fait GRRRRR !");
    }
}

package org.example;

public enum TypePlace {
    STANDARD,
    VIP,
    PREMIUM;

    @Override
    public String toString() {
        return name().charAt(0) + name().substring(1).toLowerCase(); // Pour l'affichage: Standard, Vip...
    }
}

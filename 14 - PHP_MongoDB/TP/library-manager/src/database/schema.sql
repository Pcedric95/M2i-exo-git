CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

-- Utilisateurs
CREATE TABLE IF NOT EXISTS users (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     nom VARCHAR(100),
    email VARCHAR(100)
    );

-- Livres
CREATE TABLE IF NOT EXISTS books (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     titre VARCHAR(255),
    auteur VARCHAR(100),
    isbn VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
    );

-- Catégories
CREATE TABLE IF NOT EXISTS categories (
                                          id INT AUTO_INCREMENT PRIMARY KEY,
                                          nom VARCHAR(100)
    );

-- Table de liaison livres <-> catégories (many-to-many)
CREATE TABLE IF NOT EXISTS book_category (
                                             book_id INT,
                                             category_id INT,
                                             PRIMARY KEY (book_id, category_id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    );


CREATE DATABASE IF NOT EXISTS kennelDB;
USE kennelDB;

CREATE TABLE clients (
    id int AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    date_naissance DATE,
    pseudo VARCHAR(50)
);

CREATE TABLE adresses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero VARCHAR(10),
  rue VARCHAR(100),
  code_postal VARCHAR(10),
  commune VARCHAR(100)
);

CREATE TABLE clients_adresses (
  client_id INT,
  adresse_id INT,
  PRIMARY KEY (client_id, adresse_id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (adresse_id) REFERENCES adresses(id)
);

CREATE TABLE chiens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50),
  date_naissance DATE,
  race VARCHAR(50),
  sterilise BOOLEAN
);

CREATE TABLE chats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50),
  date_naissance DATE,
  race VARCHAR(50),
  sterilise BOOLEAN
);

/* Insert Tests */

INSERT INTO clients (nom, prenom, date_naissance, pseudo)
VALUES 
('Maxime', 'Jack', '1985-04-12', 'jamax'),
('Enero', 'Claire', '1990-08-23', 'eclat');


INSERT INTO adresses (numero, rue, code_postal, commune)
VALUES 
('12', 'Rue des monnaies', '75012', 'Paris'),
('8', 'Avenue des Champs Elysee', '69001', 'Lyon');

INSERT INTO clients_adresses (client_id, adresse_id)
VALUES 
(1, 1),
(2, 2);


INSERT INTO chiens (nom, date_naissance, race, sterilise)
VALUES 
('Rexo', '2020-03-15', 'Berger Allemand', TRUE),
('Bazil', '2019-07-10', 'Labrador', FALSE);

INSERT INTO chats (nom, date_naissance, race, sterilise)
VALUES 
('Misty', '2018-05-20', 'Siamois', TRUE),
('Tigrou', '2021-01-12', 'Européen', FALSE);

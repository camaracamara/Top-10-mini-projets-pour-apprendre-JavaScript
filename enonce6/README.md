# Exemple de Manipulation de Chaînes en JavaScript

Ce projet en JavaScript montre comment manipuler des chaînes de caractères et afficher des valeurs aléatoires sur une page web.

## Fonctionnalités

- Affiche un nombre aléatoire sur la page.
- Remplace le nom "Pierre" par "Mathiele" dans une chaîne de texte et l'affiche.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Explication du Code

Le code suivant gère l'affichage d'un nombre aléatoire et la manipulation de chaînes de caractères :

```javascript
let pez  = 'Bonjour je suis Pierre ';

// Affichage d'un nombre aléatoire
document.getElementById('p1').innerHTML = Math.random();

// Remplacement de "Pierre" par "Mathiele"
let pez2 = pez.replace("Pierre", "Mathiele");

// Affichage de la chaîne modifiée
document.getElementById('p2').innerHTML = pez2;

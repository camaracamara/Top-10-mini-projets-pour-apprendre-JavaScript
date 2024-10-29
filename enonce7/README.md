# Calcul de Surface et Périmètre d'un Rectangle

Ce projet en JavaScript permet à l'utilisateur de saisir la largeur et la longueur d'un rectangle, puis calcule et affiche sa surface et son périmètre.

## Fonctionnalités

- Demande à l'utilisateur d'entrer la largeur et la longueur du rectangle.
- Calcule la surface et le périmètre du rectangle.
- Affiche les résultats sur la page web.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Explication du Code

Le code suivant gère la saisie des dimensions du rectangle et calcule la surface et le périmètre :

```javascript
var largeur = prompt("Entrez la largeur du rectangle");
var longueur = prompt("Entrez la longueur du rectangle");
var perimetre = (parseInt(largeur) + parseInt(longueur)) * 2;
var surface = largeur * longueur;
document.write("Surface : " + surface + " m<sup>2</sup> <br> Périmètre : " + perimetre + " m");

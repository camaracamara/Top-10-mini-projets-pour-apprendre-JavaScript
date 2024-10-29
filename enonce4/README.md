# Calcul de Factorielle et Table de Multiplication

Ce projet en JavaScript permet à l'utilisateur d'entrer un nombre entier, puis de calculer la factorielle de ce nombre et de générer une table de multiplication pour ce même nombre.

## Fonctionnalités

- Demande à l'utilisateur d'entrer un nombre.
- Vérifie si le nombre est un entier.
- Calcule la factorielle de l'entier entré.
- Affiche une table de multiplication pour le nombre donné.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Explication du Code

Le code suivant gère l'interaction avec l'utilisateur et effectue les calculs :

```javascript
document.getElementById("number").addEventListener("click", function() {
    var number = prompt("Entrez un nombre");
    if (number % 1 === 0) {
        var result = 1;
        for (var i = 1; i <= number; i++) {
            result = result * i;
        }
        alert(result);
        for (var j = 1; j <= 10; j++) {
            document.write("<tr><td>" + j + " x " + number + " = " + j * number + "</td></tr><br>");
        }
    } else {
        alert("Le nombre n'est pas un entier");
    }
});

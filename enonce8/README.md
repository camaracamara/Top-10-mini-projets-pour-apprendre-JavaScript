# Calcul du Factoriel d'un Nombre

Ce projet en JavaScript permet à l'utilisateur d'entrer un nombre et de calculer son factoriel. Des vérifications sont effectuées pour s'assurer que le nombre est positif ou zéro.

## Fonctionnalités

- Demande à l'utilisateur d'entrer un nombre.
- Vérifie si le nombre est positif, nul ou négatif.
- Calcule le factoriel si le nombre est positif ou zéro.
- Affiche le résultat sur la page web.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Explication du Code

Le code suivant gère la saisie du nombre et le calcul de son factoriel :

```javascript
let nombre = parseInt(prompt("Veuillez entrer un nombre"));
if (nombre < 0) {
    document.write("Veuillez entrer un nombre positif");
} else if (nombre == 0) {
    document.write("Le Factoriel de 0 est 1");
} else {
    let resultat = 1;
    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }
    document.write("Le Factoriel de : " + nombre + " est : " + resultat);
}

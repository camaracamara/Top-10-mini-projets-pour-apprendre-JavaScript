let nombre = parseInt(prompt("veuillez entrer un nombre"));
if (nombre < 0) {
    document.write("Veuillez entrer un nombre positif");
} else if (nombre == 0) {
    document.write("Le Factoriel de 0 est 1");
} else {
    let resultat = 1;
    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }
    document.write("Le Factoriel de : "+nombre+" est : "+resultat);
}
# Liste de Tâches

Ce projet en JavaScript permet à l'utilisateur d'ajouter des tâches à une liste et de les marquer comme terminées. Les tâches sont affichées dynamiquement sur la page web.

## Fonctionnalités

- Ajoutez des tâches à la liste.
- Marquez les tâches comme terminées en cliquant sur le bouton "Terminer".
- Ajoutez des tâches en appuyant sur la touche "Entrée" du clavier.

## Installation

1. Clonez le dépôt ou téléchargez les fichiers.
2. Ouvrez le fichier `index.html` dans votre navigateur web.

## Explication du Code

Le code suivant gère l'ajout de tâches et la suppression des tâches terminées :

```javascript
// Sélection des boutons de base 
document.getElementById('addbtn').addEventListener('click', function(){
    const totoInput = document.getElementById('totoInput').value;
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    // Création de notre div mère
    const div = document.createElement('div');
    // Création du bouton
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-danger'); 
    btn.textContent = 'Terminer';

    // Ajout des classes Bootstrap à notre liste des tâches 
    div.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    // Ajout de span autour du texte de la tâche 
    const span = document.createElement('span');
    span.textContent = totoInput;
    div.appendChild(span);
    div.appendChild(btn);
    li.appendChild(div);

    // Création des ul lors de l'ajout des tâches dans la page 
    document.querySelector('ul').appendChild(li);
    document.getElementById('totoInput').value = '';
});

// Suppression d'une tâche lorsque le bouton "Terminer" est cliqué
document.querySelector('ul').addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.parentElement.remove();
    }
});

// Liaison entre le bouton "Entrer" physique et le bouton "Entrer" clavier
document.getElementById('totoInput').addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        document.getElementById('addbtn').click();
    }
});

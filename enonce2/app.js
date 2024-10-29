
document.getElementById('hellobtn').addEventListener('click', function() {
    alert('Hello, world !');
});

document.getElementById('askuser_name').addEventListener('click', function() {
    var nom = prompt('Quel est votre nom?');
    alert('Bonjour,'+ nom);
});

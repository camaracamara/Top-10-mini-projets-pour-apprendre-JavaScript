document.getElementById('add_name').onclick = function(){
    let nom = prompt("Entrer un nom");
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = nom;
    ul.appendChild(li);
    document.body.appendChild(ul);
}
document.getElementById('button_hazard_nom').onclick = function(){ 
    let ul = document.querySelectorAll('ul li');
    let index = Math.floor(Math.random() * ul.length);
    let li = ul[index];
    let nom = li.innerHTML;
    alert(nom);
}       
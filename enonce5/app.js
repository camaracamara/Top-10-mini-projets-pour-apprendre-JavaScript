// Selection de button de base 
document.getElementById('addbtn').addEventListener('click', function(){
    const totoInput = document.getElementById('totoInput').value;
    const li = document.createElement('li');
    li.classList.add('list-group-item');

    // Creation de notre div mère
    const div = document.createElement('div');
    // Creation du button
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-danger'); 
    btn.textContent = 'Terminer';

    // ajout des class bootstrap à notre liste des taches 
    div.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    // ajout de span autour de nos text de tache 
    const span = document.createElement('span');
    span.textContent = totoInput;
    div.appendChild(span);
    div.appendChild(btn);
    li.appendChild(div);


    // Creation des ul lors de la mise les tache dans la page 
    document.querySelector('ul').appendChild(li);
        document.getElementById('totoInput').value = '';
    });
    // 
    document.querySelector('ul').addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON'){
            e.target.parentElement.parentElement.remove();
        }
    });
    // Liaison entre le button entrer physique et le button entrer clavier
    document.getElementById('totoInput').addEventListener('keyup', function(e){
        if(e.keyCode === 13){
            document.getElementById('addbtn').click();
        }
    });
    

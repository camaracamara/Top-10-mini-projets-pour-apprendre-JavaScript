document.getElementById("number").addEventListener("click", function(){
    var number = prompt("Entrez un nombre");
    if(number % 1 === 0){
        var result = 1;
        for(var i = 1; i <= number; i++){
            result = result * i;
        }
        alert(result);
        for(var j = 1; j <= 10; j++){
            document.write("<tr><td>"+j+" x "+number+" = "+j*number+"</td></tr><br>");
        }       
        
    }
    else{
        alert("Le nombre n'est pas un entier");
    }
})

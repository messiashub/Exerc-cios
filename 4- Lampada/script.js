let ligada = document.getElementById("ligar");
let desliga = document.getElementById("desligar");
let lampada = document.getElementById("lamp");


function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1;
}

function lampadaOn(){
    if(!estaQuebrada()){  // se não está quebrada
    lampada.src ="./imagens/ligada.jpg";
    }
}
function lampadaOff(){
    if(!estaQuebrada()){   // se não está quebrada
    lampada.src="./imagens/desligada.jpg";
    }
}
 function quebrada(){
     lampada.src="./imagens/quebrada.jpg";
 }


ligada.addEventListener('click', lampadaOn)
desliga.addEventListener('click',lampadaOff);
lampada.addEventListener("mouseover",lampadaOn);
lampada.addEventListener('mouseout',lampadaOff);
lampada.addEventListener("dblclick",quebrada);

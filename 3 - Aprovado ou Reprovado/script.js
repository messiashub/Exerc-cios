


function calcMedia(){
    let nome = document.getElementById("nome").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);   
    let nota2 = parseFloat(document.getElementById("nota2").value);  
   

    let media = (nota1 + nota2)/2;  
    let nota = ""
    
    
    if(media < 5){
        nota = "reprovado(a), estude mais!"
    }else if(media >= 5 && media <= 8){
        nota = "aprovado(a)"
    }else{
        nota = "aprovado(a) com louvor!"
    } 

     document.querySelector(".resultado").innerHTML =`${nome} você foi ${nota} Sua média foi de ${media} pontos`;  
    
} 
 



function calcMedia(){
    let nome = document.getElementById('nome').value;
    console.log(nome);
    let nota1 = parseInt(document.getElementById("nota1").value);
    console.log(nota1);
    
    let nota2 = parseInt(document.getElementById("nota2").value);
    console.log(nota2);
   

    let media = (nota1 + nota2)/2;
    console.log(media);
    

    let nota = ""

    if(media < 5){
        nota = "reprovado, estude mais"
    }else if(media >= 5 && media <= 8){
        nota = "aprovado"
    }else{
        nota = "aprovado com louvor!"
    } 

    document.querySelector(".resultado").innerHTML =`${nome} você foi ${nota} sua media foi ${media} pontos`;
    
} 
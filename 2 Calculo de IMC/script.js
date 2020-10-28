function calculo(){
    let nome = document.getElementById("nome").value;
        
    let alt = document.getElementById("altura").value;
            
    let pes = document.getElementById("peso").value;

    let res = document.querySelector(".resultado");
    
    if(nome !== "" && alt !=="" && pes !== ""){
        

        let IMC = (pes / (alt * alt)).toFixed(2);
        let classificacao = "";

        if(IMC < 18.5){
            classificacao = "Abaixo do Peso"
        }
        else if(IMC >= 18.5 && IMC < 24.99){
            classificacao = "com o peso Normal"
        }
        else if(IMC >= 25 && IMC <= 29.9){
            classificacao = "com Sobrepeso"
        }
        else{
           classificacao = 'com OBESIDADE MÓRBIDA, procure uma acadêmia!'
        }
        
        res.innerHTML = `<p>${nome} seu IMC é de ${IMC} e está ${classificacao}</p>`;

    }else{
        res.innerHTML = `<p>Preencha os campos</p>`
    }

}
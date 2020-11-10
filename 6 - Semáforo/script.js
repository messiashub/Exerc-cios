const imagem = document.getElementById("img");
const botoes = document.getElementById("btns");
let coresIndex = 0;
let intervalid = null;

const trafficlight =(event)=>{
   stopAutomatic();
   ligado[event.target.id]();
}
const nextIndex=() =>{
    if(coresIndex < 2){
       coresIndex++
    }else{
        coresIndex=0;
    }
}

const trocaCor = () =>{
   const cores = ['red','yellow','green']
   const cor = cores[coresIndex];
   ligado[cor]();
   nextIndex();
}

const stopAutomatic = ()=>{
    clearInterval(intervalid);
}

const ligado = {
    "red":     ()=>imagem.src = "/6 - Semáforo/assets/vermelho.png",
    "yellow":  ()=>imagem.src = "/6 - Semáforo/assets/amarelo.png",
    "green":   ()=>imagem.src = "/6 - Semáforo/assets/verde.png",
    "automatic":()=>intervalid= setInterval(trocaCor,1000),

}

botoes.addEventListener("click", trafficlight);
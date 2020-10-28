function calcular(){
    let val = parseInt( document.querySelector(".valor").value);
    let parc = parseInt(document.querySelector(".parcelas").value);
    
    console.log(typeof(val));
    let taxa = (val * 20)/ 100 + val;
    let totalParce = taxa/parc;
    console.log(taxa);
    console.log(totalParce);
    document.querySelector('.resultado').innerHTML = `<p> Valor do empréstimo R$ ${val}  <br>
    Com juros de 20% = R$ ${taxa} <br> Total de parcelas = ${parc} <br> Valor das parcelas = R$ ${totalParce} </p>` 
}

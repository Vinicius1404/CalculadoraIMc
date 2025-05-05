function calculaMedia(){
    const nota1 = parseFloat(document.getElementById ("nota1").value);
    const nota2 = parseFloat(document.getElementById ("nota2").value);
    const nota3 = parseFloat(document.getElementById ("nota3").value);
    
    media = ((nota1 + nota2 + nota3)/ 3).toFixed(2);
    let classificacao = "";

    if(media>= 7)
    classificacao = `Aprovado com média ${media}`
    else if (media >= 5)
    classificacao = `Exame com média ${media}`
    else
    classificacao = `Reprovado com média ${media}`
    
    document.getElementById("media").innerText= `${media}`;
}
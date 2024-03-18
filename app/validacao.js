function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML +="<div class='invalido'>Valor invalido</div>"
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div class='invalido'>Valor invalido: O numero secreto está entre
        ${menorValor} e ${maiorValor}</div>`
        return;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <div class="container">
            <h1>Você acertou!!</h1>
            <h3>O número secreto é <span class='correto'>${numeroSecreto}</span></h3>
        `
    }else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior 
            <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é menor
            <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}
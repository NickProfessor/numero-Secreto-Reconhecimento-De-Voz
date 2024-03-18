function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML +=
        "<div class='invalido'>Valor invalido: Você precisa falar um número!</div>"
        document.querySelector('#instrucao').innerHTML = ""
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=`<div class='invalido'>Valor invalido: O numero secreto está entre
        ${menorValor} e ${maiorValor}</div>`
        document.querySelector('#instrucao').innerHTML = ""
        return;
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <div class="container">
            <h1>Você acertou!!</h1>
            <h3>O número secreto é <span class='correto'>${numeroSecreto}</span></h3>
            <h4>No total, você utilizou ${numeroTentativas} tentativas</h4>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            <p class="msg-desafie">Desafie seus amigos a acertarem mais rápido que você!</p>
        `
    
    }else if (numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior 
            <i class="fa-solid fa-arrow-up-long"></i></div>
        `
        document.querySelector('#instrucao').innerHTML = ""
    }else{
        elementoChute.innerHTML += `
            <div>O número secreto é menor
            <i class="fa-solid fa-arrow-down-long"></i></div>
        `
        document.querySelector('#instrucao').innerHTML = ""
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        location.reload();
    }
})
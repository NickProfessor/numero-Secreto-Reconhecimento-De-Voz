const menorValor = 1;
const maiorValor = 1000
const numeroSecreto = gerarNumeroSecreto();
const elementoMenorValor = document.querySelector('#menor-valor');
const elementoMaiorValor = document.querySelector('#maior-valor');

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

console.log(numeroSecreto);
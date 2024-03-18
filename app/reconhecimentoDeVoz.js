const elementoChute = document.querySelector('#chute')
let numeroTentativas = 0;
window.SpeechRecognition = window.SpeechRecongnition
 || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    numeroTentativas++;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
    if(numeroTentativas == 1){
        elementoChute.innerHTML += `
        <div class="tentativas">Você deu <span class="numeroDeTentativas">${numeroTentativas}</span> chute nessa partida!</div>
    `
    }else{
        elementoChute.innerHTML += `
        <div class="tentativas">Você deu <span class="numeroDeTentativas">${numeroTentativas}</span> chutes nessa partida!</div>        `
    }
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => {
    recognition.start()
})
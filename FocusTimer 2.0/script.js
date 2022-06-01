// Variáveis de Botões
let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonCount = document.querySelector('.count')

let buttonPlus = document.querySelector('.add5')
let buttonMinus = document.querySelector('.sub5')


//Variáveis de Cartões
let cardFloresta = document.querySelector('.floresta')
let cardFloresta2 = document.querySelector('.floresta2')
let cardChuva = document.querySelector('.chuva')
let cardChuva2 = document.querySelector('.chuva2')
let cardCafeteria = document.querySelector('.cafeteria')
let cardCafeteria2 = document.querySelector('.cafeteria2')
let cardLareira = document.querySelector('.lareira')
let cardLareira2 = document.querySelector('.lareira2')


//Variáveis de Efeitos Sonoros
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const florestaSound = new Audio("sounds/Floresta.wav")
const chuvaSound = new Audio("sounds/Chuva.wav")
const cafeteriaSound = new Audio("sounds/Cafeteria.wav")
const lareiraSound = new Audio("sounds/Lareira.wav")


//Outras variáveis
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let newMinutes
let pauseCountDown


//Atualização do Timer
function updateTimerDisplay (minutes, seconds) {
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
}

function resetControls () {
    updateTimerDisplay(minutes,0)
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonCount.classList.remove('hide')
    buttonStop.classList.add('hide')
}

function resetTimer () {
    updateTimerDisplay(minutes,0)
    clearTimeout(pauseCountDown)
}


// Eventos de Clique e mudança de cor dos botões
buttonPlay.addEventListener('click', function (){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonCount.classList.add('hide')
    buttonStop.classList.remove('hide')
    buttonPressAudio.play()
    countdown()
})

buttonPause.addEventListener('click', function (){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(pauseCountDown)
    buttonPressAudio.play()
})

buttonCount.addEventListener('click', function (){
    buttonCount.classList.add('hide')
    buttonStop.classList.remove('hide')
    buttonPressAudio.play()

    newMinutes = prompt("Adicione o tempo ao seu timer")

    if (!newMinutes){
        resetControls()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes,0)
})

buttonStop.addEventListener('click', function (){
    buttonCount.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonPressAudio.play()
    resetTimer()
    resetControls()
})

cardFloresta.addEventListener('click', function (){
    cardFloresta.classList.add('hide')
    cardFloresta2.classList.remove('hide')
    buttonPressAudio.play()
    florestaSound.loop = true
    florestaSound.play()
})

cardFloresta2.addEventListener('click', function (){
    cardFloresta2.classList.add('hide')
    cardFloresta.classList.remove('hide')
    buttonPressAudio.play()
    florestaSound.pause()
})

cardChuva.addEventListener('click', function (){
    cardChuva.classList.add('hide')
    cardChuva2.classList.remove('hide')
    buttonPressAudio.play()
    chuvaSound.loop = true
    chuvaSound.play()
})

cardChuva2.addEventListener('click', function (){
    cardChuva2.classList.add('hide')
    cardChuva.classList.remove('hide')
    buttonPressAudio.play()
    chuvaSound.pause()
})

cardCafeteria.addEventListener('click', function (){
    cardCafeteria.classList.add('hide')
    cardCafeteria2.classList.remove('hide')
    buttonPressAudio.play()
    cafeteriaSound.loop = true
    cafeteriaSound.play()
})

cardCafeteria2.addEventListener('click', function (){
    cardCafeteria2.classList.add('hide')
    cardCafeteria.classList.remove('hide')
    buttonPressAudio.play()
    cafeteriaSound.pause()
})

cardLareira.addEventListener('click', function (){
    cardLareira.classList.add('hide')
    cardLareira2.classList.remove('hide')
    buttonPressAudio.play()
    lareiraSound.loop = true
    lareiraSound.play()
})

cardLareira2.addEventListener('click', function (){
    cardLareira2.classList.add('hide')
    cardLareira.classList.remove('hide')
    buttonPressAudio.play()
    lareiraSound.pause()
})

buttonPlus.addEventListener('click', function (){
    updateTimerDisplay(++minutes,0)
    buttonPressAudio.play()
})

buttonMinus.addEventListener('click', function (){
    updateTimerDisplay(--minutes,0)
    buttonPressAudio.play()
})


// Função de Timer
function countdown () {
    pauseCountDown = setTimeout(function () {

        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes <= 0 && seconds <= 0){
            resetControls()
            kitchenTimer.play()
            return
        }

        if (seconds <= 0) {
            seconds = 5
           --minutes
        }

        updateTimerDisplay(minutes,--seconds)
        countdown()
    },1000)
}


/* 
O que acontece ao clicar no botão de DarkMode:
    1. Tela de Fundo fica preta
    2. Texto fica Branco
    3. Ativa outros botões do controle, onde eles são brancos
    4. Ativa outros cards, onde eles são brancos com fundo meio cinza
    5. Em pararelo, quando clicar nos botões e card. Ativará a versão azul que já está implementada

*/

/* 
Sobre a mudança de Volume:
    1. Preciso vê como fazer para implementar mudança de volume nos arquivos de áudio
    2. Implementar o Slider em cada um dos cards (Provavelmente teremos uma div com imagem e slider e depois fazer um posicionamento relativo/absoluto para colocar por cima)
    3. Referência cada slider com classes para conseguirmos implementar no JS a mudança de volume de cada som para cada slider específico
*/
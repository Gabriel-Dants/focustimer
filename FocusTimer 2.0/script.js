

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
let buttonLight = document.querySelector('.sun')
let buttonDark = document.querySelector('.moon')



//Variáveis de Efeitos Sonoros
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const florestaSound = new Audio("sounds/Floresta.wav")
const chuvaSound = new Audio("sounds/Chuva.wav")
const cafeteriaSound = new Audio("sounds/Cafeteria.wav")
const lareiraSound = new Audio("sounds/Lareira.wav")

let sliderFloresta = document.querySelector('.floresta2 > input[type="range"]')
let sliderChuva = document.querySelector('.chuva2 > input[type="range"]')
let sliderCafeteria = document.querySelector('.cafeteria2 > input[type="range"]')
let sliderLareira = document.querySelector('.lareira2 > input[type="range"]')


//variáveis para o dark theme
const backgroundContainer = document.querySelector('.container')

let cardFlorestaDark = document.querySelector('.floresta_dark01')
let cardFlorestaDark2 = document.querySelector('.floresta_dark02')
let cardChuvaDark = document.querySelector('.chuva_dark01')
let cardChuvaDark2 = document.querySelector('.chuva_dark02')
let cardCafeteriaDark = document.querySelector('.cafeteria_dark01')
let cardCafeteriaDark2 = document.querySelector('.cafeteria_dark02')
let cardLareiraDark = document.querySelector('.lareira_dark01')
let cardLareiraDark2 = document.querySelector('.lareira_dark02')

let buttonPlayDark = document.querySelector('.play_dark01')
let buttonPauseDark = document.querySelector('.pause_dark02')
let buttonStopDark = document.querySelector('.stop_dark02')
let buttonCountDark = document.querySelector('.count_dark01')

let buttonPlusDark = document.querySelector('.add5_dark01')
let buttonMinusDark = document.querySelector('.sub5_dark01')

let sliderFlorestaDark = document.querySelector('.floresta_dark02 > input[type="range"]')
let sliderChuvaDark = document.querySelector('.chuva_dark02 > input[type="range"]')
let sliderCafeteriaDark = document.querySelector('.cafeteria_dark02 > input[type="range"]')
let sliderLareiraDark = document.querySelector('.lareira_dark02 > input[type="range"]')

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

// Eventos de Clique nos botões de aumentar ou diminuir o contador

buttonPlus.addEventListener('click', function (){
    updateTimerDisplay(++minutes,0)
    buttonPressAudio.play()
})

buttonMinus.addEventListener('click', function (){
    if (seconds == 0 && minutes == 0) {
        return
    }
    updateTimerDisplay(--minutes,0)
    buttonPressAudio.play()
})

// Eventos de Clique nos botões de Light e Dark Theme

buttonLight.addEventListener('click', function (){
    buttonLight.classList.add('hide')
    buttonDark.classList.remove('hide')
    AddDarkMode()
    buttonPressAudio.play()
})

buttonDark.addEventListener('click', function (){
    buttonDark.classList.add('hide')
    buttonLight.classList.remove('hide')
    addLightMode()
    buttonPressAudio.play()
})

// Eventos de Clique nos Sliders

sliderFloresta.addEventListener("input", function(){
    florestaSound.volume = sliderFloresta.value
});

sliderChuva.addEventListener("input", function(){
    chuvaSound.volume = sliderChuva.value
});

sliderCafeteria.addEventListener("input", function(){
    cafeteriaSound.volume = sliderCafeteria.value
});

sliderLareira.addEventListener("input", function(){
    lareiraSound.volume = sliderLareira.value
});


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
            seconds = 60
           --minutes
        }

        updateTimerDisplay(minutes,--seconds)
        countdown()
    },1000)
}


// Função do LightTheme

function addLightMode () {
    backgroundContainer.classList.remove('dark')
    cardFloresta.classList.remove('hide')
    cardChuva.classList.remove('hide')
    cardCafeteria.classList.remove('hide')
    cardLareira.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonCount.classList.remove('hide')
    buttonPlus.classList.remove('hide')
    buttonMinus.classList.remove('hide')


    cardFlorestaDark.classList.add('hide')
    cardFlorestaDark2.classList.add('hide')
    cardChuvaDark.classList.add('hide')
    cardChuvaDark2.classList.add('hide')
    cardCafeteriaDark.classList.add('hide')
    cardCafeteriaDark2.classList.add('hide')
    cardLareiraDark.classList.add('hide')
    cardLareiraDark2.classList.add('hide')
    buttonPlayDark.classList.add('hide')
    buttonPauseDark.classList.add('hide')
    buttonCountDark.classList.add('hide')
    buttonStopDark.classList.add('hide')
    buttonPlusDark.classList.add('hide')
    buttonMinusDark.classList.add('hide')

    florestaSound.pause()
    chuvaSound.pause()
    cafeteriaSound.pause()
    lareiraSound.pause()
    resetTimer()
}


// Funções do DarkTheme


function countdownDark () {
    pauseCountDown = setTimeout(function () {

        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        if (minutes <= 0 && seconds <= 0){
            resetControlsDark()
            kitchenTimer.play()
            return
        }

        if (seconds <= 0) {
            seconds = 60
           --minutes
        }

        updateTimerDisplay(minutes,--seconds)
        countdownDark()
    },1000)
}


function AddDarkMode () {
    backgroundContainer.classList.add('dark')
    cardFloresta.classList.add('hide')
    cardFloresta2.classList.add('hide')
    cardChuva.classList.add('hide')
    cardChuva2.classList.add('hide')
    cardCafeteria.classList.add('hide')
    cardCafeteria2.classList.add('hide')
    cardLareira.classList.add('hide')
    cardLareira2.classList.add('hide')
    buttonPlay.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonCount.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonPlus.classList.add('hide')
    buttonMinus.classList.add('hide')


    cardFlorestaDark.classList.remove('hide')
    cardChuvaDark.classList.remove('hide')
    cardCafeteriaDark.classList.remove('hide')
    cardLareiraDark.classList.remove('hide')
    buttonPlayDark.classList.remove('hide')
    buttonCountDark.classList.remove('hide')
    buttonPlusDark.classList.remove('hide')
    buttonMinusDark.classList.remove('hide')

    florestaSound.pause()
    chuvaSound.pause()
    cafeteriaSound.pause()
    lareiraSound.pause()
    resetTimer()

    

}



// Funções de Clique e Cards do Dark Theme

cardFlorestaDark.addEventListener('click', function() {
    cardFlorestaDark.classList.add('hide')
    cardFlorestaDark2.classList.remove('hide')
    buttonPressAudio.play()
    florestaSound.loop = true
    florestaSound.play()
})

cardFlorestaDark2.addEventListener('click', function (){
    cardFlorestaDark2.classList.add('hide')
    cardFlorestaDark.classList.remove('hide')
    buttonPressAudio.play()
    florestaSound.pause()
})


cardChuvaDark.addEventListener('click', function (){
    cardChuvaDark.classList.add('hide')
    cardChuvaDark2.classList.remove('hide')
    buttonPressAudio.play()
    chuvaSound.loop = true
    chuvaSound.play()
})

cardChuvaDark2.addEventListener('click', function (){
    cardChuvaDark2.classList.add('hide')
    cardChuvaDark.classList.remove('hide')
    buttonPressAudio.play()
    chuvaSound.pause()
})

cardCafeteriaDark.addEventListener('click', function (){
    cardCafeteriaDark.classList.add('hide')
    cardCafeteriaDark2.classList.remove('hide')
    buttonPressAudio.play()
    cafeteriaSound.loop = true
    cafeteriaSound.play()
})

cardCafeteriaDark2.addEventListener('click', function (){
    cardCafeteriaDark2.classList.add('hide')
    cardCafeteriaDark.classList.remove('hide')
    buttonPressAudio.play()
    cafeteriaSound.pause()
})

cardLareiraDark.addEventListener('click', function (){
    cardLareiraDark.classList.add('hide')
    cardLareiraDark2.classList.remove('hide')
    buttonPressAudio.play()
    lareiraSound.loop = true
    lareiraSound.play()
})

cardLareiraDark2.addEventListener('click', function (){
    cardLareiraDark2.classList.add('hide')
    cardLareiraDark.classList.remove('hide')
    buttonPressAudio.play()
    lareiraSound.pause()
})

sliderFlorestaDark.addEventListener("input", function(){
    florestaSound.volume = sliderFlorestaDark.value
});

sliderChuvaDark.addEventListener("input", function(){
    chuvaSound.volume = sliderChuvaDark.value
});

sliderCafeteriaDark.addEventListener("input", function(){
    cafeteriaSound.volume = sliderCafeteriaDark.value
});

sliderLareiraDark.addEventListener("input", function(){
    lareiraSound.volume = sliderLareiraDark.value
});

buttonPlayDark.addEventListener('click', function (){
    buttonPlayDark.classList.add('hide')
    buttonPauseDark.classList.remove('hide')
    buttonCountDark.classList.add('hide')
    buttonStopDark.classList.remove('hide')
    buttonPressAudio.play()
    countdownDark()
})

buttonPauseDark.addEventListener('click', function (){
    buttonPlayDark.classList.remove('hide')
    buttonPauseDark.classList.add('hide')
    buttonPressAudio.play()
    clearTimeout(pauseCountDown)
})

buttonCountDark.addEventListener('click', function (){
    buttonCountDark.classList.add('hide')
    buttonStopDark.classList.remove('hide')

    newMinutes = prompt("Adicione o tempo ao seu timer")

    if (!newMinutes){
        resetControlsDark()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes,0)
    buttonPressAudio.play()
})

buttonStopDark.addEventListener('click', function (){
    buttonStopDark.classList.add('hide')
    buttonCountDark.classList.remove('hide')
    buttonPlayDark.classList.remove('hide')
    buttonPauseDark.classList.add('hide')
    resetTimer()
    resetControlsDark()
    buttonPressAudio.play()
})

buttonPlusDark.addEventListener('click', function (){
    updateTimerDisplay(++minutes,0)
    buttonPressAudio.play()
})

buttonMinusDark.addEventListener('click', function (){
    if (seconds == 0 && minutes == 0) {
        return
    }
    updateTimerDisplay(--minutes,0)
    buttonPressAudio.play()
})


function resetControlsDark () {
    updateTimerDisplay(minutes,0)
    buttonPlayDark.classList.remove('hide')
    buttonPauseDark.classList.add('hide')
    buttonCountDark.classList.remove('hide')
    buttonStopDark.classList.add('hide')
}


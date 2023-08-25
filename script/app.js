let altura,
    largura = 0
let vidas = 3

function ajustaTamanhoPalcoJogo() {
    altura = innerHeight
    largura = innerWidth
}

function atualizaCronometro(tempoRestante) {
    const cronometro = document.querySelector('.cronometro')
    cronometro.textContent = `TEMPO RESTANTE: ${tempoRestante}`
}

function iniciarJogo() {
    let tempoRestante = 15
    atualizaCronometro(tempoRestante)

    const cronometroInterval = setInterval(function() {
        tempoRestante--
        atualizaCronometro(tempoRestante)

        if (tempoRestante === 0) {
            clearInterval(cronometroInterval)

            if (vidas > 0) {
                window.location.href = 'win.html'
            } else {
                window.location.href = 'over.html'
            }
        }
    }, 1000)

    setInterval(function() {
        posicaoRandomica()
    }, 2000)
}

window.onload = function() {
    ajustaTamanhoPalcoJogo()
    iniciarJogo()
}

function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        atualizaVidas()
    }

    let posiçãoX = Math.floor(Math.random() * (largura - 100))
    let posiçãoY = Math.floor(Math.random() * (altura - 100))

    posiçãoX = posiçãoX < 0 ? 0 : posiçãoX
    posiçãoY = posiçãoY < 0 ? 0 : posiçãoY

    let mosquito = document.createElement('img')
        mosquito.src = 'src/mosca.png'
        mosquito.className = 'mosquito1 ' + ladoAleatorio()
        mosquito.style.position = 'absolute'
        mosquito.style.left = posiçãoX + 'px'
        mosquito.style.top = posiçãoY + 'px'
        mosquito.id = 'mosquito'
        mosquito.onclick = function() {
            this.remove()
        };
        document.body.appendChild(mosquito)
    }

function atualizaVidas() {
    if (vidas <= 0) {
        window.location.href = 'over.html'
    } else {
        document.getElementById('v' + vidas).src = 'src/coracao_vazio.png'
        vidas--
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random()*2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        default:
            break
    }
}

ajustaTamanhoPalcoJogo()
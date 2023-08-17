let altura,
    largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = innerHeight
    largura = innerWidth
}

function posicaoRandomica() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
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
    document.body.appendChild(mosquito)
}

setInterval(function(){
    posicaoRandomica()
}, 1000)

function ladoAleatorio() {
    let classe = Math.floor(Math.random()*2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        default:
            break;
    }
}

ajustaTamanhoPalcoJogo()
posicaoRandomica()
let numUsuario = document.querySelector('#num-chute'),
    tentarBtn = document.querySelector('#tentar-btn'),
    msg = document.querySelector('#mensagem')
    chancesTxt = document.querySelector('#chances')
    fundo = document.body
let numChances = 5,
    numSorteado = Math.floor((Math.random() * 10) + 1)

tentarBtn.addEventListener('click', function(e){
    if (isNaN(numUsuario.value) || numUsuario.value > 10 || numUsuario.value < 1) {        
        alert('Número inválido.')
        numUsuario.value = ''
    }
    if(parseInt(numUsuario.value) === numSorteado) {
        alert('Você acertou o número, jogar novamente?')
        window.location.reload()
    } else if (Math.abs(numSorteado - numUsuario.value) == 1) {
        numChances <= 1 ? gameOver() : numChances -= 1
        msg.textContent = `Número ${numUsuario.value} está quente.`
        fundo.style.backgroundColor = 'rgb(255, 51, 0)'
        chancesTxt.textContent = `Chances: ${numChances}`
    } else if (Math.abs(numSorteado - numUsuario.value) <= 3) {
        numChances <= 1 ? gameOver() : numChances -= 1
        msg.textContent = `Número ${numUsuario.value} está morno.`
        fundo.style.backgroundColor = '#e6e600'
        chancesTxt.textContent = `Chances: ${numChances}`
    } else {
        numChances <= 1 ? gameOver() : numChances -= 1
        msg.textContent = `Número ${numUsuario.value} está frio.`
        chancesTxt.textContent = `Chances: ${numChances}`
        fundo.style.backgroundColor = 'rgb(51, 204, 255)'
    }
    numUsuario.value = ''
})

function gameOver() {
    alert('Você perdeu, jogar novamente?')
    window.location.reload()
}

console.log(numSorteado)
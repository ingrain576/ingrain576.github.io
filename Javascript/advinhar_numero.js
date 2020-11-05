let numUsuario = document.querySelector('#num-chute'),
    tentarBtn = document.querySelector('#tentar-btn'),
    msg = document.querySelector('#mensagem')

let numChances = 3,
    numSorteado = Math.floor((Math.random() * 10) + 1)

tentarBtn.addEventListener('click', function(e){
    if (isNaN(numUsuario.value) || numUsuario.value > 10 || numUsuario.value < 1) {        
        alert('Número inválido.')
        window.location.reload() 
    }
    if(parseInt(numUsuario.value) === numSorteado) {
        alert('Você acertou o número, jogar novamente?')
        window.location.reload()
    } else {
        numChances <= 1 ? gameOver() : numChances -= 1
        msg.textContent = `Você errou! Chances restantes: ${numChances}`
    }
    numUsuario.value = ''
})

function gameOver() {
    alert('Você perdeu, jogar novamente?')
    window.location.reload()
}

console.log(numSorteado)
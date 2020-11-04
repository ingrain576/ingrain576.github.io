let resto = 0
let nota100 = 0
let nota50 = 0
let nota10 = 0
let nota5 = 0
let nota1 = 0

function calculaNotas(valor) {  

    if (valor > 100) {
        resto = valor % 100
        nota100 = Math.floor(valor / 100)
        console.log(`Resto: ${resto} Qtd nota de $100: ${nota100}`)
        calculaNotas(resto)
    } else if (valor > 50) {
        nota50 = Math.floor(resto / 50)
        resto = resto % 50
        console.log(`Resto: ${resto} Qtd nota de $50: ${nota50}`)
        calculaNotas(resto)
    } else if (valor > 10) {
        nota10 = Math.floor(resto / 10)
        resto = resto % 10
        console.log(`Resto: ${resto} Qtd nota de $10: ${nota10}`)
        calculaNotas(resto)
    } else if (valor > 5) {
        nota5 = Math.floor(resto / 5)
        resto = resto % 5
        console.log(`Resto: ${resto} Qtd nota de $5: ${nota5}`)
        calculaNotas(resto)
    } else {
        nota1 = Math.floor(resto / 1)
        resto = resto % 1
        console.log(`Resto: ${resto} Qtd nota de $1: ${nota1}`)
    }     
}

calculaNotas(87)



let calculaBtn = document.querySelector('#calcular')
let pesoForm = document.querySelector('#peso')
let alturaForm = document.querySelector('#altura')
let output = document.querySelector('#resultado')

function calcularImc(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc <= 16.9) {
        return "IMC:"+ imc + " Muito abaixo do peso";
    } else if (imc <= 18.4) {
        return "IMC:"+ imc + " Abaixo do peso";
    } else if (imc <= 24.9) {
        return "IMC:"+ imc + " Peso normal";
    } else if (imc <= 29.9) {
        return "IMC:"+ imc + " Acima do peso";
    } else if (imc <= 34.9) {
        return "IMC:"+ imc + " Obesidade grau I";
    } else if (imc <= 40) {
        return "IMC:"+ imc + " Obesidade grau II";
    } else {
        return "IMC:"+ imc + " Obesidade grau III";
    }
}

loadEventListeners()

function res(e) {
    output.innerText = calcularImc(pesoForm.value, alturaForm.value)    
}

function loadEventListeners() {
    calculaBtn.addEventListener('click', res)
}
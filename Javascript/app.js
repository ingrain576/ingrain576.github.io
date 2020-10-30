function mostrarTabuada() {
    let num = document.getElementById("num").value;
    const resultado = document.getElementById("resultado");
    for (let index = 0; index <= 100; index++) {
        resultado.innerHTML += `${Number(num)} x ${index} = ${num * index} <br>`;
    }
}

function limparTabuada() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML ="";
    document.getElementById("num").value = "";
}
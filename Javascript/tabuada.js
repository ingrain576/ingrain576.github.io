function mostrarTabuada() {
    let num = document.getElementById("num").value;
    var msg = "";
    for (let index = 0; index <= 100; index++) {
        msg += `${Number(num)} x ${index} = ${num * index} <br>`;
    }
    document.getElementById("resultado").innerHTML = msg;
}

function limparTabuada() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML ="";
    document.getElementById("num").value = "";
}
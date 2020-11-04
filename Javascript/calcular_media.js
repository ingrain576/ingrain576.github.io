function calcularMedia() {
    if (arguments.length == 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != "number") {
            return "Erro"
        } 
        total += arguments[i];        
    }
    return total/arguments.length;
}

console.log(calcularMedia(5, 5, 5, 5));
console.log(calcularMedia());
console.log(calcularMedia(1, "5"));
console.log(calcularMedia(8, 8, 8, 8));

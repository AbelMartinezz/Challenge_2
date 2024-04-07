function generateRange(min, max, step){
    var resultado = [];
    var contador = 0;

    for (let index = min; index <= max; index += step) {
        resultado[contador++] = index 
    }
    return resultado;
}
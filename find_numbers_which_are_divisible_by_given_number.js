function divisibleBy(numbers, divisor){
    var resultado = [];
    var contador = 0;
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % divisor == 0) {
            resultado[contador] = numbers[index];
            contador++;
        }
    }
    return resultado;
}
function flickSwitch(arr){
    var resultado = [];
    var booleano = true;

    for (let index = 0; index < arr.length; index++) {
        if ((arr[index] === "flick")) {
            booleano = !booleano
        }
        resultado[index] = booleano
    }
    return resultado;
}
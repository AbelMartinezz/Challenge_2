function deleteNth(arr, n) {
    var resultado = [];
    var contador = {};
    
    for (var i = 0; i < arr.length; i++) {
        var numero = arr[i];
        if (!contador[numero]) {
            contador[numero] = 0;
        }
        contador[numero]++;
        if (contador[numero] <= n) {
            resultado[resultado.length] = numero;
        }
    }
    
    return resultado;
}
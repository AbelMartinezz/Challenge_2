function power(x,y) {
    if (y == 0) {
        return 1;
    } else {
        var resultado = x;
        for (let index = 1; index < y; index++) {
            resultado = resultado * x;
            
        }
        return resultado
    }
}
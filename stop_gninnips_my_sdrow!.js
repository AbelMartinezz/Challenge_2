function spinWords(string){
    var resultado = "";
    var palabra = "";

    for (let index = 0; index <= string.length; index++) {
        if (string[index] == " " || index == string.length) {
            if (palabra.length >= 5) {
                for (let j = palabra.length - 1; j >= 0; j--) {
                    resultado += palabra[j];
                }
            } else {
                resultado += palabra;
            }
            if (index !== string.length) {
            resultado += " ";
            palabra = "";
            }
        } else {
            palabra += string[index];
        }
    }
    return resultado;
}
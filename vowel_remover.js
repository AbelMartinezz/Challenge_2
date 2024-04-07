function shortcut (string) {
    var resultado = "";
    
    for (let index = 0; index < string.length; index++) {
        if ((string[index] != "a") && (string[index] != "e") &&
         (string[index] != "i") && (string[index] != "o") &&
         (string[index] != "u")) {
            resultado += string[index]
        }
    }
    return resultado
    }
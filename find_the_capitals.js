var capitals = function (word) {
    var posicionMayusculas = [];
    
    for (var index = 0; index < word.length; index++) {
        if (word[index] == word[index].toUpperCase()) {
            posicionMayusculas[posicionMayusculas.length] = index;
        }
    }
    return posicionMayusculas;
};
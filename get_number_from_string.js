function getNumberFromString(s) {
    var numero = "";
    for (let index = 0; index < s.length; index++) {
        if (!isNaN(parseInt(s[index]))) {
            numero += s[index];
        }
        
    }
    return parseInt(numero);
}
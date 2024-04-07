function toCamelCase(str){
    var camelCase = '';
    var capitalizeNext = false;
    for (let i = 0; i < str.length; i++) {
        var letra = str[i];
        if (i === 0) {
            camelCase += letra.toLowerCase();
        } else {
            if (letra === '-' || letra === '_') {
                capitalizeNext = true;
            } else {
                if (capitalizeNext) {
                    camelCase += letra.toUpperCase();
                } else {
                    camelCase += letra.toLowerCase();
                }
                capitalizeNext = false;
            }
        }
    }

    return camelCase;
}

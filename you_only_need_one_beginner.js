function check(a, x) {
    var contador = 0;
    for (let index = 0; index < a.length; index++) {
        if (x == a[index] ) {
            contador++ 
        }
    }
    if (contador > 0) {
        return true;
    } else {
        return false;
    }
}
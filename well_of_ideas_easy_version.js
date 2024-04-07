function well(x){
    var contador = 0;
    for (let index = 0; index <= x.length; index++) {
        if (x[index] === "good" ) {
            contador++;
        } 
    }
    if (contador === 0) {
        return "Fail!";
    } else if (contador === 1) {
        return "Publish!";
    } else if (contador > 1) {
        return "I smell a series!";
    }
}
function towerBuilder(nFloors) {
    var pisos = [];
    for (let index = 0; index < nFloors; index++) {
        var espacios = "";
        for (let i = 0; i < nFloors - index - 1; i++) {
            espacios += " ";
        }
        
        var flores = "";
        for (let j = 0; j < 2 * index + 1; j++) {
            flores += "*";
        }
        
        pisos[index] = espacios + flores + espacios;
    }
    return pisos;
}

function addLength(str) {
    var array = str.split(' ');
  
    var resultado = [];
  
    for (let index = 0; index < array.length; index++) {
      resultado.push(array[index] + " " + array[index].length)
    }
  
    return resultado;
}
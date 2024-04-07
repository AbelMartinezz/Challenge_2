function highAndLow(numbers){
    var array = numbers.split(' ').map(Number);
    var mayor = array[0];
    var menor = array[0];
    for (let index = 0; index < numbers.length; index++) {
        if (mayor < array[index]) {
            mayor = array[index];
        }
        if (menor > array[index]) {
            menor = array[index];
        }
    }
    return mayor + " " + menor; 
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(numbers) {
    var parentesis = '';
    var antesGuion = '';
    var despuesGuion = '';
    for (let index = 0; index <= 2 ; index++) {
        parentesis += numbers[index];
    }
    for (let index = 3; index <= 5 ; index++) {
        antesGuion += numbers[index];
    }
    for (let index = 6; index < numbers.length ; index++) {
        despuesGuion += numbers[index];
    }
    return "(" + parentesis + ") " + antesGuion + 
    "-" + despuesGuion
}
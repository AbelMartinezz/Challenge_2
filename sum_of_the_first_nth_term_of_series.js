function SeriesSum(n) {
    let suma = 0;
    for (let index = 0; index < n; index++) {
        suma += 1 / (1 + (3 * index));
    }
    return suma.toFixed(2);
}

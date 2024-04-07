const flip = (d, a) => {
  if (d === 'L') {
    for (let index = 0; index < a.length; index++) {
      for (let j = index + 1; j < a.length; j++) {
        if (a[index] < a[j]) {
          var nuevo = a[index];
          a[index] = a[j];
          a[j] = nuevo;
        }
      }
    }
  } else if (d === 'R') {
    for (let index = 0; index < a.length; index++) {
      for (let j = index + 1; j < a.length; j++) {
        if (a[index] > a[j]) {
          var nuevo = a[index];
          a[index] = a[j];
          a[j] = nuevo;
        }
      }
    }
  } 
  return a;
}

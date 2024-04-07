function abbrevName(name) {
    var inicialesMayuscula = '';
    for (let index = 0; index < name.length; index++) {
      if (name[index] !== ' ' && (index == 0 || name[index - 1] == ' ')) {
        inicialesMayuscula += name[index].toUpperCase();
      }
    }
    inicialesMayuscula = inicialesMayuscula[0] + '.' + inicialesMayuscula[1];
    
    return inicialesMayuscula;
  }
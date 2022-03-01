// FUNCIONES
function listado(_array) {
    //Inicializar variables
    let numeroMayor = -Infinity;
    //Proceso
    for (let i = 0; i < _array.length; i++) {
      if (_array[i] > numeroMayor) {
        numeroMayor = _array[i];
      }
    }
    //Return
    return numeroMayor;
  }
  
  // MAIN
  let array = [
    58, -9268, 10000, 65, 560, -1, 1950, 501, -63, 120, 1200, 975, -25,
  ];
  
  console.log("El numero mayor es :", listado(array));
  

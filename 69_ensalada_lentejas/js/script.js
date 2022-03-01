// Ensalada de Lentejas

let vegetales = ["Lenetjas", "Cebolla", "Ajo", "pepino", "jitomate cherry", "mango"]
//1. Seleccionar vegeteales
//2. Cortar los vegetales 
//3. Mezclar los vegetales
//4. Cocinar los vegetales
//5. Aderezarlos

const cortarVegetales = function () {
    console.log("Cortar:", vegetales);
  };
  const mezclarVegetales = function (cortar) {
    cortar();
    console.log("Mezclar:", vegetales);
  };
  const aderezarVegetales = function (mezclar, cortar) {
    mezclar(cortar);
    console.log("Aderezando", vegetales);
  };
  
  function preparacionLentejas() {
    aderezarVegetales(mezclarVegetales, cortarVegetales);
  }
  
  // Main
  
  preparacionLentejas();


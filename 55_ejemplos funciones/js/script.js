// CONSTATNTES

// FUNCIONES

// SUMA
function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

// RESTA 
function resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado
}

// MULTIPLICACIÓN 
function multiplicación(num1, num2) {
    let resultado = num1 * num2;
    return resultado
}

// MODULO
function modulo(num1, num2) {
    let resultado = num1 % num2;
    return resultado 
}

//RAIZ CUADRADA
function raiz_cuadrada(num1) {
    let resultado = num1^2
    return resultado 
}

//AREA DE UN CILINDRO
function area_cilindro(rad, h) {

    let pi = 3.14
    let resultado = 2 * pi * radio * (radio + altura);
    return resultado;
}
      
//AREA DE UN TRAPECIO
function area_trapecio(base_menor, base_mayor, altura) {
    let resultado = 0.5 * altura * (base_mayor + base_menor);
    return resultado;
}
      
//AREA DE UN TRIANGULO CON LADOS
function area_triangulo(lado1, lado2, lado3) {
    let semiperimetro = 0.5 * (lado1 + lado2 + lado3);
    let resultado = Math.sqrt(
        Math.abs(
          semiperimetro *
            ((semiperimetro - lado1) *
              (semiperimetro - lado2) *
              (semiperimetro - lado3))
        )
      );
      return resultado;
}

function area_circulo(radio) { // Algoritmo
    // Entrada : radio de un circulo (radio)
    // Salida : area del circulo (resultado)
    // Inicializar variables
    let resultado = 0;
    let area_circulo = 0;
    // Calculo 
    resultado = area_circulo(radio);
}

//area del cilindro
function area_cilindro(altura, radio) {
    // Inicializar variables
    let resultado = 0;
    let area_circulo = 0;
    // Calculo
    area_circulo  = area_circulo(radio);
    
    resultado = 2 * pi * radio * (radio + altura);
    return resultado;
  }
  
      


// MAIN
console.log("Mi calculadora integrada correctamente");

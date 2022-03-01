// Algoritmo : Área del trapesio
// Entrada : Base inferior (bi),Base superior (bs) y Altura (h)
// Salida : Área del trapecio (area)

// Inicialización de variables
let bi = 0.0;
let bs = 0.0;
let h = 0.0;
let area = 0.0;

// Solicitar informacion al usuario con prompt
// prompt -> Pide info al usuario similar -> LEER (pseInt)
bi = prompt("Ingrese la base inferior");
console.log("bi es una variable del tipo :", typeof bi); // string

bi = parseFloat(bi);
console.log("bi despues de parseFloat es del tipo", typeof bi); // number

bs = prompt("Ingrese la base superior");
bs = parseFloat(bs);

h = prompt("Ingrese la Altura");
h = parseFloat(h);

console.log("Base inferior", bi);
console.log("Base superior", bs);
console.log("Altura", h);

// Cálculo del area del trapecio
area = ((bi + bs) * h) / 2;
console.log("El area de trapecio es: ", area);

//Área de un triangulo rectangulo

//Entrada: altura (a) y base (b)
//Salida: Área del cilindro 

let  a = promt ("Ingresa la altura del triangulo rectangulo");
let b = promt ("Ingresa la base del triangulo rectangulo");

área = ((a * b) /2);

console.log ("El area del del triangulo rectangulo es :" ,área);

//Área de un cilindro 

//Entrada: radio (r) alltura (h) 
//Salida: Área del cilindro 

let h = promt ("Ingresa la altura del cilindro")
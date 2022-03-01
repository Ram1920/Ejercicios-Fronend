// Literales 
const n1 = 4;
const n2 = 15.8;

// Objetos
const n3 = new Number();
const n4 = new Number(15.8);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

// ¿Numero finito?
console.log(Number.isFinite(42));
console.log(Number.isFinite(Infinity));

// ¿Numero Entero?
console.log(Number.isInteger(5)); 
console.log(Number.isInteger(5));

// ¿Numero Seguro?
console.log(Number.isSafeInteger(1e15)); // True 
console.log(Number.isSafeInteger(1e16)); // False, es un valor no seguro

// ¿No es un numero?
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(5) ); // false, es un numero

(1.5).toExponential(2); // 1.50e+0 en exponencial 
(1.5).toFixed(2); //1.50 en punto fijo
(1.5).toPrecision(1); //"2" 

/* Conversiones */

let text_number = "348.42"; // Cadena (String)

console.log(Number.parseInt(text_number)); // 348
console.log(Number.parseFloat(text_number)); // 348.42

// Bases numéricas

let decimal = 124;
let binario = "1111100"; // base 2
let octal = "174"; // base 8
let hexadecimal = "7C"; // base 16

console.log(Number.parseInt(binario, 2));
console.log(Number.parseInt(octal, 8));
console.log(Number.parseInt(hexadecimal, 16));

// Formatos numéricos
let number = 1.5;

console.log(number.toExponential(2)); // Notacion Científica
console.log(number.toFixed(2));
console.log(number.toPrecision(1)); // Math.round()

// Objetos STRING

const texto1 = "Hola a todos";
const texto2 = "pablito clavó un clavito en la calva de un calvito";

const texto3 = new String("Hola a todos");
const texto4 = new String("Otro mensaje de texto");

console.log(texto1);
console.log(texto2);
console.log(texto3);
console.log(texto4);

console.log(`El texto: "${texto2}" tiene ${texto2.length} caracteres`);

"Manz".charAt(0); // `M`
"Manz".charAt(1); // `a`
"Manz".charAt(10); // ``
"Manz"[0]; // `M`
"Manz"[1]; // `a`
"Manz"[10]; // ``

let frase1 = "Camarón que se duerme se lo lleva la corriente";
let frase2 = "En boca cerrada no entran moscas";
let frase3 = "Feliz como una lombriz";
let frase4 = "De tal palo tal astilla";
let frase5 = "Mal de muchos, consuelo de pocos";
let frase6 = "'¡Chinchilete!', '¡Yo machete!'";
let frase7 = "Mas vale tarde que nunca";
let frase8 = "El pato que no conoce el océano en cualquier charco es feliz";
let frase9 = "Ya nos cayo el chahuistle";
let frase10 = "No hay peor ciego que el que no quiere ver";

console.log(frase3);
console.log(frase3.length);
console.log(frase3.charAt(0)); // 0 - 21
console.log(frase3.charAt(6));
console.log(frase3.charAt(11));
console.log(frase3.charAt(15));

// Utilizaondo concatenadores
console.log(frase7);
frase7 = frase7.concat(" que");
frase7 = frase7 + " tonto";
frase7 = `${frase7} que no `;
frase7 += "lo haga";

console.log(frase7);

let direccion = "Calle Santa Rosa " + 1 + 2 + 3; // Calle Santa Rosa 123 
console.log(direccion);
let dirección = "Calle Santa Rosa " + (1 + 2 + 3); // Calle Santa Rosa 6
console.log(dirección);



// Buscar la posición de una palabra o letra

frase7 = new String(frase7);
console.log(frase7);

// Busqueda se realiza de arriba hacia abajo
console.log(frase7.indexOf("g")); // 47 posición donde se encuentra la letra "g"
console.log(frase7.indexOf("tonto")); // 29 => posición donde se encuentra la palabra tonto
console.log(frase7.indexOf("taza")); // -1 => No existe dentro de la frase
console.log(frase7.indexOf("que")); // 15
console.log(frase7.indexOf("que", 18)); // 25
console.log(frase7.indexOf("que", 38)); // -1  => no existe en la frase desde la pos 38


// Busqueda se realiza de abajo hacia arriba
console.log(frase7);

console.log(frase7.lastIndexOf("que")); // 35
console.log(frase7.lastIndexOf(" ")); // 35
console.log(frase7.lastIndexOf("que", 24)); // 15

console.log(frase7.lastIndexOf(" ", 32)); // 28

// Busquedas en los strings (Cademna)

frase10 = new String(frase10);
console.log(frase10);
console.log(frase10.startsWith("No hay peor")); // true
console.log(frase10.startsWith("ciego")); // false => La frase no empieza con esa palabra "Ciego"
console.log(frase10.startsWith("ciego", 12)); //true
console.log(frase10.startsWith("No")); // true
console.log(frase10.startsWith("no")); // false Porque N no es mayuscula

console.log(frase10.endsWith("ver")); // true
console.log(frase10.endsWith("iere ver")); // true
console.log(frase10.endsWith("kiere ver")); // false
console.log(frase10.endsWith("ciego", 17)); // true (No hay peor ciego.)

console.log(frase10.includes("peor")); // true si existe la palabra en la frase 
console.log(frase10.endsWith("chahuistle")); // false no existe la palabra en la frase

frase1 = new String(frase1);
console.log(frase1);
console.log(frase1.startsWith("Camarón")); // true => Si existe la palabra en la frase
console.log(frase1.search("^Camarón")); // 0
console.log(frase1.endsWith("corriente"));
console.log(frase1.search("corriente$")); // 0

frase9 = new String(frase9);
console.log(frase9.search("^Ya nos cayo el chahuistle$"));

let numero = "163";
console.log(numero.search("^[0-9]*$")); // Valida todos sean numeros
console.log(numero.search("^[0-9][0-5][0-9]$")); // Valida 3 primeros caracteres sean numeros pero el segundo solo hasta el 0-5


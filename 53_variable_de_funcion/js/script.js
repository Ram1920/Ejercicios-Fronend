// var a = 1;
// console.log(a); // Aqui accedemos  a la "a" global, que vale 1 

// function x() {
//     console.log(a); // En esta linea el valor de "a" es undefined 
//     a = 5; // Aqui creamos una variable "a" a nivel de funcion

//     console.log(a); // Aqui el valor de "a" es 5 (a nivel de funcion)
//     console.log(window.a); // Aqui el valor de "a" es 1 (ambito global)
// }

// x(); // Aqui se ejecuta el codigo de la funcion x()
// console.log(a); // En esta linea el valor de "a" es 5

/**Opcion 1: Bucle con let **/

console.log ("Antes :" ,p); // Antes undefined 
// Para (Iniciar interador ; iterador < total ; iterador++)
for (let p = 0; p < 3; p++) {
    console.log ("-" ,p); // Durante: 0, 1, 2
}
console.log("Después :" ,p); // Después: undefined
/** Opcion 2: Bucle con var **/

console.log ("Antes :" ,p); // Antes undefined 
for (var p = 0; p < 3; p++) {
    console.log (`-` ,p); // Durante: 0, 1, 2
}
console.log("Después :" ,p); // Después: 3(WTF!)
    
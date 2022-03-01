import { saludo2, sayHello, magicNumber } from "./modules/grettings.js";
import saludo from "./modules/grettings.js";
import * as grettings from "/js/modules/grettings.js";

// Main

console.log(saludo2("Orville46")); // export {sayHi...}
//console.log(sayHi("Orville46")); // ERROR xq le cambiamos el nombre
console.log(saludo("Orville46")); // export default sayHi
console.log(sayHello("Orville46"));
console.log(grettings.decirHola("Orville46"));
console.log(magicNumber);

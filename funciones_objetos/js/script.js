//Ejecutar código en tiempo real;


let code = prompt("Ingrese una instrucción"); // alert("HOLA")

const fx = new Function(code);

fx();


// Funciones autoejecutables



// 1. Declarar y 2. Ejecutar
const saludo = function () {
  console.log("Hola!!");
};
saludo();
// Se ejecuta al mismo tiempo que la estoy declarando
(function () {
  console.log("Hola!!");
})();

// 1. Declarar y 2. Ejecutar
const saludoCompleto = function (name) {
  console.log(`Hola ${name}`);
};
saludoCompleto("Orville");

// Se ejecuta al mismo tiempo que la estoy declarando
(function (name) {
  console.log(`Hola ${name}`);
})("Orville");

// Se ejecuta al mismo tiempo que la estoy declarando y
// el resultado (return) se asgina a la variable (fullname)
const fullname = (function (name, lastname) {
  return `Hola ${name} ${lastname}`;
})("Orville", "Rechoncho");

console.log(fullname);



// FUNCIONES DE FLECHA

// MANERA TRADICIONAL
function queDiaEs() {
  return "Martes 21 de Diciembre";
}
console.log(queDiaEs());
// ARROW FUNCTION MANERA EXTENDIDA
// const today = () => {
//   return "Martes 21 de Diciembre";
// };

// ARROW FUNCTION MANERA RESUMIDA
const today = () => "Martes 21 de Diciembre";

const todayAndGrettings = () => {
  console.log("Buen Dia");
  console.log("Martes 21 de Diciembre");
};

console.log(today());

//const haveANiceDay = day => {
//  console.log("Ten un lindo", day);
//  };

const haveANiceDay = (day) => {
  console.log("Ten un lindo", day);
};
haveANiceDay("Martes");

// Para devolver un objeto usamos ({ prop: value,..})
const auto = (_marca, _color) => ({
  name: "auto",
  marca: _marca,
  color: _color,
});

console.log(auto);

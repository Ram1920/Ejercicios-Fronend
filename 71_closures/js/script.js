// Clausura: Funcion incr()
const incr = (function() {
    let num = 0;
    return function () {
        num++;
        return num;
    };
})();

console.log(typeof incr); // `function`
console.log(incr());//1
console.log(incr());//2
console.log(incr());//3



function creaSumador(x) {
    return function (y) {
        return x + y;
    };
}

let suma5 = creaSumador(5);
let suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
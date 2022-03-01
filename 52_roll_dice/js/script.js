let random = Math.random();
let suerte = random * 6;
let dado1 = parseInt(suerte) + 1;

let dado = Math.round(Math.random() * 6);

console.log("dado:", dado);

let obj1 = document.getElementById("salida");

if (dado == 1) {
  obj1.innerHTML = `<img src='images/cara1.jpg' /> `;
}

if (dado == 2) {
  obj1.innerHTML = `<img src='images/cara2.jpg' /> `;
}

if (dado == 3) {
  obj1.innerHTML = `<img src='images/cara3.jpg' /> `;
}

if (dado == 4) {
  obj1.innerHTML = `<img src='images/cara4.jpg' /> `;
}

if (dado == 5) {
  obj1.innerHTML = `<img src='images/cara5.jpg' /> `;
}

if (dado == 6) {
  obj1.innerHTML = `<img src='images/cara6.jpg' /> `;
}
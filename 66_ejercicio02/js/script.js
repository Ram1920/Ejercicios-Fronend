//Funciones

 function getLargestWord(_texto) {
    let words = _texto.split(" "); // arreglo de palabras
    let max_length = 0; // tamaño maximo
    let max_word = ""; // palabra larga

    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      if (max_length < palabra.length) {
        max_word = palabra;
        max_length = palabra.length;
      }
    }
    return max_word;
  }


let texto =
  "Tratemos con una palabra grande para ver su longitud otorrinolaringología";

let largest_word = getLargestWord(texto);
console.log(largest_word);

console.log(largest_word.length);




// Intenteo hacerlo por mi cuenta pero no me salio bien el resultado, me rindo :(

function obtTamaño(strings) {
  let largo = strings.split("");
  let tamaño = 0;
  let palabraLarga = "";

  for (let i = 0; i < largo.length; i++) {
    const word = largo[i];

    if (tamaño < word.length) {
      palabraLarga = word;
      tamaño = word.length;
    }
  }

  return palabraLarga;
}


let text =
  "Tratemos con una palabra grande para ver su longitud otorrinolaringología";

let long = obtTamaño(text);
console.log(long);

console.log(long.length);

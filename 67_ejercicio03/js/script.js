// Funciones

function isPalindromo(_frase) {
    let frase_sin_espacios = _frase.replaceAll(" ", "");
  
    let array_chars = frase_sin_espacios.split("");
  
    let reverse_array = array_chars.reverse();
  
    let frase_invertida = reverse_array.join(""); // Juntar los caracteres en un String
  
    return frase_sin_espacios == frase_invertida; // TRUE or FALSE
  }
  // Main
  
  let frase1 = "anita lava la tina";
  
  let resultado = isPalindromo(frase1);
  
  console.log(
    `La frase ${frase1}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );

  let frase2 = "amor a ramo";
  
  let oracion = isPalindromo(frase2);
  
  console.log(
    `La frase ${frase2}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );

  let frase3 = "ligar es ser ágil";
  
  let frase = isPalindromo(frase3);
  
  console.log(
    `La frase ${frase3}`,
    resultado ? "ES" : "NO ES", // if(resultado== true) "ES" else "No es"
    "un Palindromo"
  );
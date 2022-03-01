function restar(numeros) {

    let nums = -Infinity
    let total = numeros[0];

    if (!nums) {
        return -Infinity;
    }

    for (let i = 1; i < numeros.length; i++) {
        total -= numeros[i];
    }

    return total;
}

 console.log(restar([7, 3, 2, (-1)])); 


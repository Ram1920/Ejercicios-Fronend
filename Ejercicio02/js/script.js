let sentence = 'El lunes es un gran dia para programar';
let WordToReplace = "lunes";
let replacerWord = "viernes";

console.log(sentence);

const regex = /lunes/i;
console.log(sentence.replace(regex, 'viernes'));

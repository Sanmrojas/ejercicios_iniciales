const leer = require("prompt-sync")();
//reciba un numero y nos indique si es positivo o negativo
let num1 = 0;
console.log("Ingresa un número y te digo si es positivo o negativo ");
num1 = leer();
if (num1 > 0) {
    console.log("Es positivo");
} else if (num1 == 0) {
    console.log("Es cero :(");
} else if (num1 < 0) { 
    console.log("Es negativo") };

const leer = require("prompt-sync")();
//recibir 2 números y muestre la suma por consola

let num1 = "Ingresa un numero";
let num2 = "Ingresa otro número que quieras sumar";

console.log("Ingresa un número ");
num1 = Number(leer());
console.log("Ingresa otro número que quieras sumar");
num2 = Number(leer());
resultadoSuma = num1 + num2 ;

console.log("Resultado suma ambos números", resultadoSuma);

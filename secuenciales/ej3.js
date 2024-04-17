const leer = require("prompt-sync")();

//reciba un número y muestre el doble por consola

let numeroIngresado = 0;
let numeroDuplicado = "def duplicado";
console.log("Ingresa un número a duplicar:");
numeroIngresado = Number(leer());//casteo 
/*console.log(numeroIngresado * 2)*/
numeroDuplicado = numeroIngresado * 2;
console.log("Resultado", numeroDuplicado)

const leer = require("prompt-sync")();

//pueda recibir un mensaje y mostrarlo por consola

let nombreIngresado = "Nombre no ingresado :(";//estoy declarando e inicializando la variable
console.log("Ingresa tu nombre:");

nombreIngresado = leer();

console.log("Hola", nombreIngresado);
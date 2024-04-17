const leer = require("prompt-sync")();
//recibir un nombre y color favorito para saludarlo en consola 
let nombreIngresado = "Nombre no ingresado :(";
let colorFavorito = "Color no ingresado";
console.log("Ingresa tu nombre:");
nombreIngresado = leer();
console.log("Ingresa tu color favorito");
colorFavorito = leer();

console.log("Hola", nombreIngresado );
console.log("Tu color favorito es:", colorFavorito);
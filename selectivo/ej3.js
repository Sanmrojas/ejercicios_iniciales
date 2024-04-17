const leer = require("prompt-sync")();

//pueda sumar o restar dos números dependiendo del usuario

let num1 = 0;
let num2 = 0;


console.log("Ingresa un número");
num1 = Number(leer());
console.log("Ingresa otro número");
num2 = Number(leer());

console.log("Quieres sumar (S) o restar (R) los números?");
respuestaUsuario = leer();

if (respuestaUsuario == "S") {
    console.log(" El resultado de la suma es", resultado = num1 + num2);

} if (respuestaUsuario == "R") {
    console.log(" El resultado de la resta es", resultado = num1 - num2);
}
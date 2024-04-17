const leer = require("prompt-sync")();

//pueda multiplicar o dividir dos números dependiendo del usuario

let num1 = 0;
let num2 = 0;


console.log("Ingresa un número");
num1 =  Number(leer());
console.log("Ingresa otro número");
num2 = Number(leer());

console.log("Quieres multiplicar (M) o dividir (D) los números?");
respuestaUsuario = leer();

if (respuestaUsuario == "M") {
    console.log(" El resultado de la multiplicación es", resultado = num1 * num2);

} if (respuestaUsuario == "D") {
    console.log(" El resultado de la división es", resultado = num1 / num2);
}


const leer = require("prompt-sync")();
//reciba una palabra y verifique si adivino la que está en el programa

let palabraAdivinar = "sol";

console.log("Ingresa la palabra a adivinar");

palabraAdivinar = leer();

if (palabraAdivinar == "sol") {
    console.log("Bravo! adivinaste!");

} if (palabraAdivinar != "sol") {
    console.log("Intenta nuevamente. No es la palabra correcta.");

} 

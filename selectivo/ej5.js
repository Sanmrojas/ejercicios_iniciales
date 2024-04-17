const leer = require("prompt-sync")();

//recibir un nombre y saludarlo o despedirlo según el usuario

let nombreIngresadoPorUsuario = ("no definido")

console.log("Ingresa un nombre",);
nombreIngresadoPorUsuario = leer();
console.log("Queres saludar o despedir?");
respuestaAPregunta = leer();
if (respuestaAPregunta == "saludar") {
    console.log("Hola!", nombreIngresadoPorUsuario);
    
} else {
    console.log("Chau!", nombreIngresadoPorUsuario);
    
}
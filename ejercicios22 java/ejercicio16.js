let numero;

do {
    numero = parseInt(prompt("Por favor, ingrese un número positivo:"));
    if (numero <= 0 || isNaN(numero)) {
        console.log("Error: Debe ingresar un número positivo.");
    }
} while (numero <= 0 || isNaN(numero));

console.log("Número positivo ingresado por el usuario:", numero);
let numero;

do {
    numero = parseInt(prompt("Por favor, ingrese un número entre 1 y 5:"));
} while (numero < 1 || numero > 5);

console.log("El número ingresado por el usuario es:", numero);
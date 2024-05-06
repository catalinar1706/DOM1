let numeroAleatorio;
let intentos = 0;

do {
   
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    intentos++;

    console.log("Intento #" + intentos + ": " + numeroAleatorio);
} while (numeroAleatorio !== 7);

console.log("Se obtuvo un 7 después de " + intentos + " intentos.");
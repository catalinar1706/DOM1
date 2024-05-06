function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}


function imprimirPrimerosPrimos(n) {
    let cantidadPrimosEncontrados = 0;
    let numeroActual = 2; 

    while (cantidadPrimosEncontrados < n) {
        if (esPrimo(numeroActual)) {
            console.log(numeroActual);
            cantidadPrimosEncontrados++;
        }
        numeroActual++;
    }
}


console.log("Los primeros 5 números primos son:");
imprimirPrimerosPrimos(5);
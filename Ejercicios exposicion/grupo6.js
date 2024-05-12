// Suma de todos los elementos:
// Escribe una función que tome un arreglo de números como argumento y devuelva la suma de todos los elementos.
// javascript

function sumaTotal(arreglo) {
    let suma = 0;
    for (let num of arreglo) {
        suma += num;
    }
    return suma;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log(sumaTotal(numeros)); // Debería imprimir 15 (1 + 2 + 3 + 4 + 5)


// Encontrar el número más pequeño:
// Escribe una función que tome un arreglo de números como argumento y devuelva el número más pequeño.

function encontrarMinimo(arreglo) {
    let minimo = arreglo[0];
    for (let num of arreglo) {
        if (num < minimo) {
            minimo = num;
        }
    }
    return minimo;
}

// Ejemplo de uso:
const numero = [10, 3, 7, 21, 15];
console.log(encontrarMinimo(numeros)); // Debería imprimir 3


// Duplicar cada elemento:
// Escribe una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo donde cada elemento se duplique.

function duplicarElementos(arreglo) {
    const nuevoArreglo = [];
    for (let num of arreglo) {
        nuevoArreglo.push(num * 2);
    }
    return nuevoArreglo;
}

// Ejemplo de uso:
const num = [1, 2, 3, 4, 5];
console.log(duplicarElementos(numeros)); // Debería imprimir [2, 4, 6, 8, 10]
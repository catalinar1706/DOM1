function calcularPromedio(...numeros) {
    
    if (numeros.length === 0) {
        return 0; 
    }

    
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    
    const promedio = suma / numeros.length;

    return promedio;
}


const numeros = [10, 20, 30, 40, 50];
const promedio = calcularPromedio(...numeros);
console.log("El promedio es:", promedio);
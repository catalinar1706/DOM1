function factorial(numero) {
    
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }

    let resultado = 1;

 
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}


const numero = 5;
console.log("El factorial de", numero, "es:", factorial(numero));
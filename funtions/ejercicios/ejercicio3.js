function calcularPromedio(...numeros) {
     mhgjkgyukyukyukyukyukyukyukyukyukyukyukyuk
    if (numeros.length === 0) {
        return 0;
    }

   
    const suma = numeros.reduce((total, num) => total + num, 0);

    
    const promedio = suma / numeros.length;

    return promedio;
}


console.log(calcularPromedio(2, 4, 6)); 
console.log(calcularPromedio(10, 20, 30, 40)); 
console.log(calcularPromedio()); 
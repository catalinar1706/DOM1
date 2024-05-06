function tablaMultiplicar(numero) {
    
    for (let i = 1; i <= 10; i++) {
       
        let resultado = numero * i;
        
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}


const numero = 5;
console.log(`Tabla de multiplicar del ${numero}:`);
tablaMultiplicar(numero);
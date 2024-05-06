function imprimirNumerosPares(limite) {

    for (let i = 1; i <= limite; i++) {
        
        if (i % 2 === 0) {
            console.log(i); 
        }
    }
}


const limite = 20;
console.log("Números pares hasta el límite:", limite);
imprimirNumerosPares(limite);
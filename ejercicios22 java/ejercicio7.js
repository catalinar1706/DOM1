function generar_caracteres(n, caracter) {
    
    if (n > 0) {
        
        return caracter.repeat(n);
    } else {
       
        return "";
    }
}


const resultado = generar_caracteres(5, 'x');
console.log(resultado);
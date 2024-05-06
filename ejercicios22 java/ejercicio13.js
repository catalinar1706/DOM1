
function fibonacci(n) {
    let fib = [0, 1]; 

    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n); 
}

const primeros10Fibonacci = fibonacci(10);
console.log("Los primeros 10 números de Fibonacci son:", primeros10Fibonacci.join(", "));
function numeroMayor(num1, num2, num3) {
   
    if (num1 === num2 && num2 === num3) {
        return "son iguales";
    } else {
      
        return Math.max(num1, num2, num3);
    }
}

const num1 = 10;
const num2 = 5;
const num3 = 15;
const mayor = numeroMayor(num1, num2, num3);
console.log("El número mayor es:", mayor);
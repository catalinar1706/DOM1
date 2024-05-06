console.log ("hola desde la consola");

function saludar(){
    console.log("hola soy la primer funcion");

};
saludar();
saludar();
saludar();
saludar();

saludar();
saludar();

    
function saludo1(){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)

}
saludo1();

let numero1 =Number(prompt("elige un numero"));
let numero2 =Number(prompt("elige un numero"));
let resultado = numero1 + numero2;
console.log("la suma de los numero es: " + resultado);

function bienvenido(){
    console.log("hola adso");

    return "hola consola";
};
bienvenido();

const bienve = bienvenido();
console.log(bienve);

function suma (numero1,  numero2){
    return numero1 + numero2;
}




suma(3, 5);
const res = suma(3, 5);
console.log(res);
const res1 = suma(10, 25);
const res2 = suma(20, 15);
console.log(res2)

function hello(nombre){
    return "hola como tas"  + nombre

}
const hello1 = hello("maria")
console.log(hello1)



7

const anonimo1 = function(veneca){
    return "bien" + (veneca)
}
console.log(anonimo1( "adios"))


// const suma =(a, b) =>{
//     return a + b
// }

function NumeroPrimo(){
    let num10 = parseFloat(prompt("ingrese su numero"));
    if(num10 % 2 === 0)
    console.log("el numero" + num10 + "es primo");
else{
    console.log("el numero" + num10 + "no es primo")
}
}
NumeroPrimo();

function Multiplicar(numero) {
    let por = [];
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      por.push(resultado);
    }
    return por;
  }
  
  let numero = parseInt(prompt("Ingresa un numero"));
  let tabla = Multiplicar(numero);
  tabla.forEach(function(resultado) {
    console.log(resultado);
  });



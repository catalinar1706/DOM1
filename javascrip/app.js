let texto = document.getElementById("titulo");
console.log("texto");    //moatrAR EL NODO H1 POR CONSO

//capturar el nodo p mediante su clase
let parrafo = document.getElementById("parrafo");
console.log(parrafo);

let item = document.getElementsByTagName("li");
console.log(item);

let nombre = document.querySelector("#titulo");
console.log(nombre);

let items = document.querySelectorAll("li");
console.log(items);

// crear nodo h2
let texto2 = document.createElement("h2");
console.log(texto2);

let header = document.querySelector("header");
console.log(header);

header.appendChild(texto2);

let texto1 = document.createTextNode("hola");
console.log(texto1);

texto2.appendChild(texto1);

let main = document.querySelector("main");
console.log(main);

console.log ("crear nodos");
let div = document.createElement("div");
console.log(div);

main.appendChild(div);

let h3 = document.createElement("h3");
console.log (h3);

div.appendChild(h3);

let text = document.createTextNode("la vcaca coloca leche en la mañana");
console.log(text);

h3.appendChild(text);

let p = document.createElement("p");
console.log (p);

div.appendChild(p);

let text2 = document.createTextNode("la gallina coloca huevos en la noche");
console.log(text2);

p.appendChild(text2)
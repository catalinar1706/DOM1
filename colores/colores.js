console.log("seleccione su color fav");


let botonamarillo = document.querySelector("#amarillo");

let botonrojo = document.querySelector("#rojo");
let botonazul = document.querySelector("#azul");
let botongris = document.querySelector("#gris");
let botonsincolor = document.querySelector("#sincolor");

let body = document.querySelector("body");
let cuadrote = document.querySelector("#cuadrote");


//creamos la eqtiqueta section
// let section = document.createElement("section");
// let body = document.querySelector("body")
let cuadroamarillo = document.querySelector("#cuadroamarillo");
let cuadrorojo = document.querySelector("#cuadrorojo");
let cuadroazul = document.querySelector("#cuadroazul");
let cuadrogris = document.querySelector("#cuadrogris");
let cuadrosincolor = document.querySelector("#cuadrosincolor");


cuadroamarillo.addEventListener("click",
    function mensaje(){
        console.log("buscando el color amarillo");
        cuadrote.style.backgroundColor ="yellow"
    }
)
// //agregar al section al body
// body.append(section);
cuadrorojo.addEventListener("click",
    function mensaje(){
        console.log("buscando el color rojo");
        cuadrote.style.backgroundColor ="red"
    }
)
cuadroazul.addEventListener("click",
    function mensaje(){
        console.log("buscando el color azul");
        cuadrote.style.backgroundColor ="blue"
    }
)

cuadrogris.addEventListener("click",
    function mensaje(){
        console.log("buscando el color gris");
        cuadrote.style.backgroundColor ="gray"
    }
)
cuadrosincolor.addEventListener("click",
    function mensaje(){
        console.log("sin color");
        cuadrote.style.backgroundColor ="white"
    }
)






















botonamarillo.addEventListener("click",
    function mensaje(){
        console.log("buscando el color amarillo");
        document.body.style.backgroundColor ="yellow"
    }
)

botonrojo.addEventListener("click",
    function mensaje(){
        console.log("buscando el color rojo");
        document.body.style.backgroundColor ="red";
    }
)

botonazul.addEventListener("click",
    function mensaje(){
        console.log("buscando el color azul");
        document.body.style.backgroundColor ="blue";
    }
)

botongris.addEventListener("click",
    function mensaje(){
        console.log("buscando el color gris");
        document.body.style.backgroundColor ="gray";
    }
)

botonsincolor.addEventListener("click",
    function mensaje(){
        console.log("sin color");
        document.body.style.backgroundColor ="white";
    }
)





console.log("eventos del dom");
let parrafo = document.querySelector("p")
console.log(parrafo)

parrafo.addEventListener("click", () =>{ console.log ("me hiciste click")});


parrafo.addEventListener("click",
 function click () {
    console.log(" me hiciste click2");
 }

)
let botonclick = document.querySelector('#btn-click');
    console.log(botonclick);
    let input = document.querySelector('#btn-click');
    console.log(botonclick);

botonclick.addEventListener('click',
    function alerta (){
        console.log('Hiciste Click en el botón');
    }
);
botonclick.addEventListener('dblclick',
    function alerta (){
        console.log('Hiciste doble Click en el botón');
    }
);

botonclick.addEventListener("mouseenter",
function alerta(){
    console.log("entraste a la zona input");
}


);
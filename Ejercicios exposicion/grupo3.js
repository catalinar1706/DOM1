//1///

window.localStorage.setItem('usuario','juan');
const usuario = window.localStorage.getItem ('usuario');
console.log(usuario);

//2//
window.addEventListener('DOMcontenLoaded', (event)=>{
    console.log ('DOM completamente cargado y analizado');
}) ;

//3//

window.open('https://www.ejemplo.com');


//4//

var section = document.getElementById('section');
var texto = section.innerText;
console.log(texto); 

//5//

var article = document.getElementById('article');


article.innerText = "Este es un texto.";

//6//


function modificarTexto() {
    var parrafo = document.getElementById('miParrafo');
    parrafo.innerText = "¡Este es un nuevo texto!";
  }
//7//
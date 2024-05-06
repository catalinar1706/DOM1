const botonesCarrito = document.querySelectorAll('.carro');
const vacion = document.querySelector('#vaciar');
const carta1 = document.getElementById('carta1');
const carta2 = document.getElementById('carta2');
const carta3 = document.getElementById('carta3');
const carta4 = document.getElementById('carta4');
const carta5 = document.getElementById('carta5');
const carta6 = document.getElementById('carta6');
const carta7 = document.getElementById('carta7');
const carta8 = document.getElementById('carta8');
const carroPago = document.getElementById('carroPago');
const modal = document.getElementById('myModal');
const modal2 = document.getElementById('myModal2');
const modal3 = document.getElementById('myModal3');
const modal4 = document.getElementById('myModal4');
const modal5 = document.getElementById('myModal5');
const modal6 = document.getElementById('myModal6');
const modal7 = document.getElementById('myModal7');
const modal8 = document.getElementById('myModal8');
const modal9 = document.getElementById('myModal9');
const btn = document.getElementById('myBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const closeBtn2 = document.getElementsByClassName('close2')[0];
const closeBtn3 = document.getElementsByClassName('close3')[0];
const closeBtn4 = document.getElementsByClassName('close4')[0];
const closeBtn5 = document.getElementsByClassName('close5')[0];
const closeBtn6 = document.getElementsByClassName('close6')[0];
const closeBtn7 = document.getElementsByClassName('close7')[0];
const closeBtn8 = document.getElementsByClassName('close8')[0];
const closeBtn9 = document.getElementsByClassName('close9')[0];
const contadorElemento = document.getElementById('contador')
let contador = 0;
contadorElemento.textContent = contador;

document.querySelectorAll('.carritoMas').forEach(boton => {
    boton.addEventListener('click', function() {
        contador++;
        contadorElemento.textContent = contador;
    });
});
carta1.addEventListener('click', function(){
    modal.style.display = 'block';
})
carta2.addEventListener('click', function(){
    modal2.style.display = 'block';
})
carta3.addEventListener('click', function(){
    modal3.style.display = 'block';
})
carta4.addEventListener('click', function(){
    modal4.style.display = 'block';
})
carta5.addEventListener('click', function(){
    modal5.style.display = 'block';
})
carta6.addEventListener('click', function(){
    modal6.style.display = 'block';
})
carta7.addEventListener('click', function(){
    modal7.style.display = 'block';
})
carta8.addEventListener('click', function(){
    modal8.style.display = 'block';
})

// carroPago.addEventListener('click', function(){
//     modal9.style.display = 'block';
// })

//modal1
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
//Modal2
closeBtn2.addEventListener('click', function() {
    modal2.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});
//Modal3
closeBtn3.addEventListener('click', function() {
    modal3.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal3) {
        modal3.style.display = 'none';
    }
});
//Modal4
closeBtn4.addEventListener('click', function() {
    modal4.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal4) {
        modal4.style.display = 'none';
    }
});
//Modal5
closeBtn5.addEventListener('click', function() {
    modal5.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal5) {
        modal5.style.display = 'none';
    }
});
//Modal6
closeBtn6.addEventListener('click', function() {
    modal6.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal6) {
        modal6.style.display = 'none';
    }
});
//Modal7
closeBtn7.addEventListener('click', function() {
    modal7.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal7) {
        modal7.style.display = 'none';
    }
});
//Modal8
closeBtn8.addEventListener('click', function() {
    modal8.style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === modal8) {
        modal8.style.display = 'none';
    }
});
//Modal9
// closeBtn9.addEventListener('click', function() {
//     modal9.style.display = 'none';
// });


// Función para agregar el contenido de la carta al modal9
const contenido = document.querySelector('#contenidoCartas')
const cartasSeleccionadas = [];

document.querySelectorAll('.carritoMas').forEach(boton => {
    boton.addEventListener('click', function() {
        const cartaId = this.dataset.cartaId;
        const cartaElemento = document.getElementById(cartaId);
        if (!cartasSeleccionadas.includes(cartaElemento)) {
            cartasSeleccionadas.push(cartaElemento);
        }
    });
});

carroPago.addEventListener('click', function() {
    cartasSeleccionadas.forEach(carta => {
        const clonCarta = carta.cloneNode(true);
        clonCarta.classList.add('mi-clase'); // Agregar la clase deseada al clon
        contenido.appendChild(clonCarta);
    });
    modal9.style.display = 'block'; // Mostrar el modal
    // Vaciar el array de cartas seleccionadas para que no se repitan al abrir nuevamente
    cartasSeleccionadas.length = 0;
});

carroPago.addEventListener('click', function() {
    let suma = 0;
    let valorTotal = document.getElementById('valor-total');
    document.querySelectorAll('#myModal9 span').forEach(span => {
        let numero = parseFloat(span.textContent);
        if (!isNaN(numero)) {
            suma += numero;
        }
    });
    // Restablecer contador y mostrar la suma en algún lugar de tu aplicación

    valorTotal.innerHTML = `Total ${suma}`; // Muestra la suma en la consola, puedes mostrarla en otro lugar de tu aplicación
});





closeBtn9.addEventListener('click', function() {
    modal9.style.display = 'none'; // Cerrar el modal al hacer clic en el botón de cerrar
    // Vaciar el array de cartas seleccionadas al cerrar el modal
    cartasSeleccionadas.length = 0;
    contador = 0;
});

vacion.addEventListener('click',
    function(){   
        while (contenido.firstChild) {
            contenido.removeChild(contenido.firstChild);
        }
        // Vaciar el array de cartas seleccionadas al vaciar el contenido
        cartasSeleccionadas.length = 0;
        contador = 0; // Resetear el contador a 0
        contadorElemento.textContent = contador; // Actualizar el valor mostrado en el contador
        modal9.style.display = 'none'; // Cerrar el modal al vaciar
    }
)

window.addEventListener('click', function(event) {
    if (event.target === modal9) {
        modal9.style.display = 'none';
    }
});

/* // Obtener todos los elementos Numericos dentro de Las  Cartas
// Seleccionar el elemento p que contiene el precio
const precioElemento = document.querySelector('#myModal9 p');

// Obtener el texto dentro del elemento p
const precioTexto = precioElemento.textContent;

// Parsear el texto a un número entero
const precioNumerico = parseInt(precioTexto);

// Comprobar el valor obtenido
console.log(precioNumerico);


// Inicializar la variable suma
let suma = 0;

// Iterar sobre los elementos y sumar sus valores
elementosP.forEach(elemento => {
    // Convertir el contenido del elemento a un número y sumarlo
    suma += parseFloat(elemento.textContent.trim());
});

// Mostrar la suma en la consola
console.log('La suma de los valores es:', suma);

 */





// // JavaScript
// // Obtén el contenedor donde se mostrará el contenido de las cartas
// const contenidoCartas = document.getElementById('contenidoCartas');

// // Agrega un evento 'click' a los botones 'carritoMas'
// document.querySelectorAll('.carritoMas').forEach(boton => {
//     boton.addEventListener('click', function() {
//         // Obtén el contenido de la carta correspondiente
//         const cartaId = this.dataset.cartaId;
//         const cartaContenido = document.getElementById(cartaId).innerHTML;

//         // Agrega el contenido al contenedor en modal9
//         contenidoCartas.innerHTML = cartaContenido;
//     });
// });

// // Cierra modal9 al hacer clic en el botón de cerrar
// closeBtn9.addEventListener('click', function() {
//     modal9.style.display = 'none';
// });

// let cartasSeleccionadas = [];

// document.querySelectorAll('.carritoMas').forEach(boton => {
//     boton.addEventListener('click', function() {
//         const cartaId = boton.getAttribute('data-carta-id');
//         cartasSeleccionadas.push(cartaId);
//     });
// });

// carroPago.addEventListener('click', function() {
//     // Agregar solo las cartas seleccionadas al modal
//     cartasSeleccionadas.forEach(cartaId => {
//         const cartaElemento = document.getElementById(cartaId);
//         if (cartaElemento) {
//             const copiaCarta = cartaElemento.cloneNode(true);
//             modal9.appendChild(copiaCarta);
//         }
//     });

//     // Mostrar el modal
//     modal9.style.display = 'block';
// });

// // Cerrar el modal al hacer clic en el botón de cerrar
// closeBtn9.addEventListener('click', function() {
//     modal9.style.display = 'none';
// });
// window.addEventListener('click', function(event) {
//     if (event.target === modal9) {
//         modal9.style.display = 'none';
//     }
// });

// // Función para limpiar el contenido del modal9
// function limpiarModal9() {
//     const modal9 = document.getElementById('myModal9');
//     modal9.innerHTML = '';
// }

// document.querySelectorAll('.carritoMas').forEach(boton => {
//     boton.addEventListener('click', function() {
//         contador++;
//         contadorElemento.textContent = contador;
//         const numeroCarta = boton.dataset.cartaId;
//         agregarContenidoCartaAlModal(numeroCarta);
//     });
// });

// carroPago.addEventListener('click', function(){
//     limpiarModal9();
//     abrirModal(9);
// });




// Obtener todos los elementos con la clase 'carritoMas'
// const carritoMasElementos = document.querySelectorAll('.carritoMas');

// // Agregar un event listener a cada elemento
// carritoMasElementos.forEach((elemento) => {
//     elemento.addEventListener('click', function() {
//         // Obtener los detalles del producto asociado al elemento clickeado
//         const cartaId = this.closest('.card').id;
//         const cartaElemento = document.getElementById(cartaId);
//         const nombre = cartaElemento.querySelector('h5').innerText;
//         const precio = cartaElemento.querySelector('span').innerText;

//         // Crear un nuevo elemento div para mostrar los detalles del producto
//         const productoDiv = document.createElement('div');
//         productoDiv.classList.add('producto');
//         productoDiv.innerHTML = `
//             <h3>${nombre}</h3>
//             <p>Precio: ${precio}</p>
//         `;

//         // Agregar el nuevo elemento al modal
//         const modal9 = document.getElementById('myModal9');
//         modal9.appendChild(productoDiv);
//     });
// });




// vacion.addEventListener('click',
//     function(){
//         let lista = document.getElementById('ule');
//         while (lista.firstChild) {
//             lista.removeChild(lista.firstChild);
//         }
//     }
// )

// botonesCarrito.forEach(boton => {
//     boton.addEventListener('click', () => {
//         const articulo = boton.previousElementSibling.textContent;
//         agregarAlCarrito(articulo);
//     });
// });

// function agregarAlCarrito(articulo) {
//     const carrito = document.getElementById('ule');
//     const nuevoItem = document.createElement('li');
//     const icono = document.createElement("i");
//     icono.classList.add("fas", "fa-times", "icono");
//     icono.addEventListener("click",
//         function(){
//             carrito.removeChild(nuevoItem);
//         }
//     )
//     nuevoItem.appendChild(document.createTextNode(articulo)); 
//     nuevoItem.appendChild(icono);
//     carrito.appendChild(nuevoItem); 
// }






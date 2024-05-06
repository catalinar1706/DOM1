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


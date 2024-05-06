// const  = document.getElementById("carrito");
const closeBoton = document.getElementById('close-btn')
const carritoDetalle = document.getElementById("carrito-detalle");
const contenido = document.getElementById('contenido-cartas')
const carroPago = document.getElementById('carroPago')

console.log(carroPago);

carroPago.addEventListener("click", function() {
    carritoDetalle.style.display = 'block';
});

closeBoton.addEventListener('click',function(){
    carritoDetalle.style.display = 'none'
})
// window.addEventListener('click', function(event){
//     if(event.target === carritoDetalle){
//         carritoDetalle.style.display = 'none'
//     }
// })


const cartasSeleccionadas = [];

document.querySelectorAll('.producto').forEach(boton =>{
    boton.addEventListener('click', function(){
        const cartaId = this.dataset.cartaId;
        const cartaElemento = document.getElementById(cartaId);
        if(!cartasSeleccionadas.includes(cartaElemento)){
            cartasSeleccionadas.push(cartaElemento);
        }
    })
})

carroPago.addEventListener('click', function(){
    cartasSeleccionadas.forEach(carta => {
        const clonCarta = carta.clone(true);
        clonCarta.classList.add('mi-clase');
        contenido.appendChild(clonCarta)
    });
    carritoDetalle.style.display = 'block';
    cartasSeleccionadas.length = 0;
})
//     // Manejar clic en el icono del carrito
//     // carritoIcon.addEventListener("click", function() {
//     //     alert("Abre el carrito de compras o implementa tu lógica aquí.");
//     // });

//     // Manejar clic en botones "Agregar al carrito"
//     productos.forEach(producto => {
//         producto.addEventListener("click", function() {
//             const nombre = producto.getAttribute("data-nombre");
//             const precio = parseFloat(producto.getAttribute("data-precio"));

//             const productoHTML = `
//                 <div class="producto">
//                     <p>${nombre} - Precio: $${precio}</p>
//                 </div>
//             `;
//             carritoDetalle.innerHTML += productoHTML;

//             // Mostrar los detalles de la compra en el footer
//             productoSeleccionadoFooter.innerHTML = `
//                 <div class="producto">
//                     <p>${nombre} - Precio: $${precio}</p>
//                 </div>
//                 <p>Total: $${precio.toFixed(2)}</p>
//             `;
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const carritoIcon = document.getElementById("carrito");
    // const productos = document.querySelectorAll(".agregar-carrito");
    const carritoDetalle = document.getElementById("carrito-detalle");

    // Manejar clic en el icono del carrito
    carritoIcon.addEventListener("click", function() {
        carritoDetalle.style.display = 'block';
    });

    window.addEventListener('click', function(event){
        if(event.target === carritoDetalle){
            carritoDetalle.style.display = 'none'
        }
    })
}
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
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const carritoIcon = document.getElementById("carrito");
//     const productos = document.querySelectorAll(".agregar-carrito");
//     const carritoDetalle = document.getElementById("carrito-detalle");
//     const detalleCompraFooter = document.getElementById("detalle-compra-footer");
//     const productoSeleccionadoFooter = document.getElementById("producto-seleccionado-footer");

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


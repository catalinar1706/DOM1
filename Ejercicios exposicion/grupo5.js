 document.getElementById('inicio').addEventListener('submit', function() {
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let contraseña = document.getElementById('contraseña').value;

    // Almacenar las credenciales en localStorage
    localStorage.setItem('Nombre de usuario', nombreUsuario);
    localStorage.setItem('Contraseña', contraseña);

    alert('Credenciales almacenadas en localStorage. Puedes verificarlas en la consola.');
});
 // Guardar un valor en localStorage:
localStorage.setItem('clave', 'valor');
// Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.


// Recuperar un valor de localStorage:
var valor = localStorage.getItem('clave');
// Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable 


// Eliminar un valor de localStorage:
// localStorage.removeItem('clave');


localStorage.setItem('Nombre', 'Maja');

let Nombre = localStorage.getItem('Maja')







localStorage.setItem('Apellido', 'Sanchez');

let Apellido = localStorage.getItem('Daniel')

// Guardar un valor en localStorage:
localStorage.setItem('clave', 'valor');
// Esto guarda el valor 'valor' con la clave 'clave' en el localStorage.


// Recuperar un valor de localStorage:
var valor = localStorage.getItem('clave');
// Esto recupera el valor almacenado con la clave 'clave' y lo asigna a la variable 


// Eliminar un valor de localStorage:
// localStorage.removeItem('clave');
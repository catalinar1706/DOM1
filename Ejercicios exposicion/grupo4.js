//8//

function modificarHTML() {
    var main = document.getElementById('main');
    main.innerHTML = "<p>¡Este es un nuevo párrafo!</p>";
  }


  //9//

  function crearElemento() {
    var nuevoElemento = document.createElement('p');
    nuevoElemento.innerHTML = "<strong>¡Este es un nuevo elemento con contenido HTML!</strong>";
    document.getElementById('contenedor').appendChild(nuevoElemento);
  }
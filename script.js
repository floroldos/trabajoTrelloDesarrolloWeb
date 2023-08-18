const buttonA = document.querySelector("#button_A");
const botonColumna = document.querySelector("#botonColumna");

hacerColumna : botonColumna.onclick = () => {
  const nombre = prompt("Ingrese el nombre de la columna")
  if(nombre !== null && nombre.trim() !== ""){
    alert(`Columna ${nombre} creada satisfactoriamente.`);
    crearColumna(nombre);
  }
}

function crearColumna (nombreColumna){
  let columna = `
    <div class="col-4 contenedor" id="card">
      <div class="titulo">
        <p>
          ${nombreColumna}
        </p>
      </div>
      <div class="botones">
        <button  onclick = "alertaBorrarC(this)" type="button" id="delete" margin-left=5px class="botonColumn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>
        </button>
        <button  onclick = "botonCrearTarjeta(this)" type="button" id="button_A" margin-left=5px class="botonColumn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
        </button>
        <button onclick = "contraerDescontraer(this)" type="button" margin-left=5px class="icono_svg botonColumn boton">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </button>
      </div>
      <div class="linea">
        <hr/>
      </div>
      <div class = "contenido" style="display: block;">
      </div>
    </div>
  `;
  const nuevaColumna = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaColumna.className = "col-4 columna";
  nuevaColumna.innerHTML = columna; // Asignar el contenido HTML de la tarjeta al nuevo div

  const contenedor = document.getElementById("panel");
  contenedor.appendChild(nuevaColumna); // Agregar la nueva tarjeta al panel
}

function borrarTarjeta(botonB) {
  botonB.parentNode.parentNode.remove();
}

function borrarColumna(botonBorrar){
  botonBorrar.parentNode.parentNode.parentNode.remove();
}

function alertaBorrarC(boton){
  let texto;
  if(confirm("¿Estas seguro que quieres eliminar el elemento?")){
    texto = "Se eliminó el elemento."; 
    borrarColumna(boton);
  } else {
    texto = "No se eliminó ningun elemento.";
  }
}

function alertaBorrarT(boton){
  let texto;
  if(confirm("¿Estas seguro que quieres eliminar el elemento?")){
    texto = "Se eliminó el elemento."; 
    borrarTarjeta(boton);
  } else {
    texto = "No se eliminó ningun elemento.";
  }
}


function botonCrearTarjeta(boton){
  const name = prompt("Ingrese el nombre de la tarjeta");
  if(name !== null && name.trim() !== ""){
    const description = prompt("Ingrese la descripción de la tarjeta");
    if(description !== null && description.trim() !== ""){
      alert(`Tarjeta ${name} creada satisfactoriamente.`)
      crearTarjeta(boton, name, description)
    }
  }
}


function crearTarjeta (boton, name, description){
  let tarjeta = `
    <div class="card">
      <img class="card-img-top" src="img/Imagen1.svg">
      <div class="card-body">
        <h4 class="card-title"> ${name} </h4>
        <hr>
        <p class="card-text">${description}</p>
        <button onclick ="alertaBorrarT(this)" type="button" aria-label="Trash" margin-left=5px class="botonCard">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg>     
        </button>
      </div>
    </div>
`;

  const nuevaTarjeta = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaTarjeta.innerHTML = tarjeta; // Asignar el contenido HTML de la tarjeta al nuevo div

  const contenedor = boton.closest('.contenedor');
  const contenido = contenedor.querySelector('.contenido');

  contenido.appendChild(nuevaTarjeta);
}

function contraerDescontraer(boton){
  const contenedor = boton.closest('.contenedor');
  const columna = contenedor.querySelector('.contenido');

  let boton1 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
  </svg>
  `;

  let boton2 = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
  </svg>
  `;

  boton.onclick = () => {
    if (columna.style.display === 'none') {
      columna.style.display = 'block';
      boton.innerHTML = boton2
    } else {
      columna.style.display = 'none';
      boton.innerHTML = boton1
    }
  }; 
}

function cambiaFondo(){
  const button = document.getElementById('cambiarEstilo');
    let estiloActual = 0;

    button.addEventListener('click', () => {
      estiloActual = (estiloActual + 1) % 2;

      if (estiloActual === 1) {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
        button.style.backgroundColor = '#ff6600';
      } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        button.style.backgroundColor = '#007bff';
      }
    });
}

// main
crearColumna("To-Do");
crearColumna("In progress");
crearColumna("Done");
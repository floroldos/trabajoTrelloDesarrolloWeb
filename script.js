const buttonA = document.querySelector("#button_A");
const botonColumna = document.querySelector("#botonColumna");

hacerColumna : botonColumna.onclick = () => {
  const nombre = prompt("Ingrese el nombre de la columna");
  alert(`Columna ${nombre} creada satisfactoriamente.`);
  crearColumna(nombre);
}

function crearColumna (nombreColumna){
  let columna = `
    <div class="col-4 contenedor" id="card">
    <h3>
      ${nombreColumna} 
      <button  onclick = "alertaBorrarC(this)" type="button" id="delete" margin-left=5px class="transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
      </svg>
      </button>
      <button  onclick = "crearTarjeta(this)" type="button" id="button_A" margin-left=5px class="transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
      </svg>
      </button>
      </h3>
    </div>
`;
const nuevaColumna = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
nuevaColumna.className = "col-4 prueba";
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

/*
function agregarT.onclick = () => {
  const name = prompt("Ingrese el nombre de la tarjeta");
  const description = prompt("Ingrese la descripción de la tarjeta");

  alert(`Tarjeta ${name} creada satisfactoriamente.`);
  crearTarjeta(name, description);
}
*/

function crearTarjeta (boton){
  const name = prompt("Ingrese el nombre de la tarjeta");
  const description = prompt("Ingrese la descripción de la tarjeta");
  
  let tarjeta = `
    <div class="card">
      <img class="card-img-top" src="img/flying-bug-seeklogo.com-2.svg">
      <div class="card-body">
        <h4 class="card-title"> ${name} </h4>
        <hr>
        <p class="card-text">${description}</p>
        <button onclick ="alertaBorrarT(this)" type="button" aria-label="Trash" margin-left=5px><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg></button>
      </div>
    </div>
`;

  const nuevaTarjeta = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaTarjeta.innerHTML = tarjeta; // Asignar el contenido HTML de la tarjeta al nuevo div

  const panel = document.getElementById("card");
  boton.parentNode.parentNode.appendChild(nuevaTarjeta); // Agregar la nueva tarjeta al panel

  alert(`Tarjeta ${name} creada satisfactoriamente.`);

}

// main

crearColumna("To-Do");
crearColumna("En proceso");
crearColumna("Realizadas");


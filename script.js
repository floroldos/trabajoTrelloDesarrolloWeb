const buttonA = document.querySelector("#button_A");
const botonColumna = document.querySelector("#botonColumna");

hacerAlerta : buttonA.onclick = () => {
  const name = prompt("Ingrese el nombre de la tarjeta");
  const description = prompt("Ingrese la descripción de la tarjeta");

  alert(`Tarjeta ${name} creada satisfactoriamente.`);
  crearTarjeta(name, description);
}

function crearTarjeta (nombreTarjeta, descripcionTarjeta){
  const tarjetas = [];
  let tarjeta = `
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="img/flying-bug-seeklogo.com-2.svg">
  <div class="card-body">
    <h4 class="card-title"> ${nombreTarjeta} </h4>
    <hr>
    <p class="card-text">${descripcionTarjeta}</p>
    <a href="#" class="btn btn-primary">Abrir</a>
    <button type="button" aria-label="Trash" margin-left=5px><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"></path></svg></button>
  </div>
</div>
`;
  const nuevaTarjeta = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaTarjeta.innerHTML = tarjeta; // Asignar el contenido HTML de la tarjeta al nuevo div

  const panel = document.getElementById("panel");
  panel.appendChild(nuevaTarjeta); // Agregar la nueva tarjeta al panel
}
/*
hacerColumna : buttonB.onclick = () => {
  const nombre = prompt("Ingrese el nombre de la columna");
  alert(`Columna ${nombre} creada satisfactoriamente.`);
  crearTarjeta(nombre);
}

function crearColumna (nombreColumna){
  let columna = `
  <div> 
    <h3> ${nombreColumna} </h3>
  </div>
`
const fondo = document.getElementById("contenedor");
fondo.innerHTML = columna;
}
*/

// main

crearTarjeta("Nombre 1", "Descripción 1");
crearTarjeta("Nombre 2", "Descripción 2");

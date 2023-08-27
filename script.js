/// Global
var tarjId = 0;

class tarea {
  constructor(nombre, descripcion, listaBullets) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.listaBullets;
  }
}

class bullet {
  constructor(nombre, fecha){
    this.nombre = nombre;
    this.fecha = fecha;
  }
}

/* <=================================== Principal Functions ===================================> */

// Crear Board //
function craerBoard (nombreBoard){
  let board = `
  <li><a class="dropdown-item" href="#">${nombreBoard}</a></li>
  `;
  // Donde esta el href="#" va el link a un nuevo board
  const nuevoBoard = document.createElement("div"); // Crear un nuevo elemento div para el board
  nuevoBoard.innerHTML = board; // Asignar el contenido HTML de la tarjeta al nuevo div
  
  const boards = document.getElementById("boards")
  boards.appendChild(nuevoBoard); // Agregar la nueva columna
}

// Crear Columna //
function crearColumna (nombreColumna){
  let columna = `
    <div class="row justify-content-center col-3 contenedor">
      <div class="tituloColumnas">
        <textarea id="nombreColumna" class="list-header-name mod-list-name js-list-name-input" aria-label=${nombreColumna} spellcheck="false" dir="auto" maxlength="512" data-autosize="true">${nombreColumna}</textarea>
          <button onclick = "botonContraerDecontraer(this)" type="button" margin-left=5px class="botonColumnStyle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
          </button>
      </div>
      <div class="contenidoCompleto">
        <div class="botones">
          <button  onclick = "botonCrearTarjeta(this)" type="button" id="button_A" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
          <button  onclick = "alertaBorrarC(this)" type="button" id="delete" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </div>
        <div class = "contenido" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
      </div>
    </div>
  `;
  const nuevaColumna = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaColumna.className = "col-3 columna";
  nuevaColumna.innerHTML = columna; // Asignar el contenido HTML de la tarjeta al nuevo div

  const contenedor = document.getElementById("panel");
  const boton = document.getElementById("button");
  contenedor.insertBefore(nuevaColumna, boton); // Agregar la nueva columna
}

// Crear Tarjeta //
function crearTarjeta (boton, name){
  let tarjeta = `
    <div class="card" draggable="true" ondragstart="drag(event)" id = "tarjeta">
      <div class="card-body">
        <h4 class="card-title" id = ${tarjId}> ${name} </h4>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
              <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarTarjeta">Editar tarjeta</a></li>
              <li><a class="dropdown-item" href="#" onclick ="alertaBorrarT(this)">Eliminar tarjeta</a></li>
              <li><a class="dropdown-item" href="#"> Duplicar </a></li>
            </ul>
        </div>
      </div>
    </div>
`;

  const nuevaTarjeta = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaTarjeta.innerHTML = tarjeta; // Asignar el contenido HTML de la tarjeta al nuevo div

  const contenedor = boton.closest('.contenedor');
  const contenido = contenedor.querySelector('.contenido');

  contenido.appendChild(nuevaTarjeta);

  const newTask = new tarea(name, description);
  const jstring = JSON.stringify(newTask);
  localStorage.setItem(tarjId, jstring);
  tarjId++;
}

// Para cargar los datos del localstorage //

function cargarJson(){
  const contenedor = document.getElementById("panel");

  for (let i = 0; i <= localStorage.length; i++){
    tarjId = i;
    let obj = JSON.parse(localStorage.getItem(i));
    let tarjeta = `
    <div class="card" draggable="true" ondragstart="drag(event)" id = "tarea">
      <div class="card-body">
        <h4 class="card-title"> ${obj.nombre} </h4>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
              <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarTarjeta">Editar tarjeta</a></li>
              <li><a class="dropdown-item" href="#" onclick ="alertaBorrarT(this)">Eliminar tarjeta</a></li>
              <li><a class="dropdown-item" href="#"> Duplicar </a></li>
            </ul>
        </div>
      </div>
    </div>
  `;

  const nuevaTarjeta = document.createElement("div"); // Crear un nuevo elemento div para la tarjeta
  nuevaTarjeta.innerHTML = tarjeta; // Asignar el contenido HTML de la tarjeta al nuevo div
  const contenido = contenedor.querySelector('.contenido');

  contenido.appendChild(nuevaTarjeta);
  }
}

// Borrar Columna //
function borrarColumna(botonBorrar){
  botonBorrar.parentNode.parentNode.parentNode.remove();
}

// Borrar Tarjeta //
function borrarTarjeta(boton) {
  boton.parentNode.parentNode.remove();
  for(let i = 0; i <= localStorage.length; i++){
    if(localStorage.key(i) == boton.getElementById(id)){
      let clave = localStorage.key(i);
      break;
    }
  }
  console.log(clave);
  localStorage.removeItem(clave);
}


/* <=================================== Other Functions ===================================> */

// Comprimir y Descomprimir //
function contraerDescontraer(boton){
  const contenedor = boton.closest('.contenedor');
  const columna = contenedor.querySelector('.contenidoCompleto');

  let botonDown = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
    </svg>
  `;

  let botonUp = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>
  `;

  if (columna.style.display === 'none') {
    columna.style.display = 'block';
    boton.innerHTML = botonUp
  } else {
    columna.style.display = 'none';
    boton.innerHTML = botonDown
  }
}

// Drag and Drop //
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var cardId = ev.dataTransfer.getData("text");
  var card = document.getElementById(cardId);
  if (card.id === "contenido" && card.id !== "tarjeta"){
    ev.target.querySelector('.contenido').appendChild(card);
  }
}



/* <=================================== Buttons ===================================> */

// Crear Board //
function botonCrearBoard(){
  const nombre = prompt("Ingrese el nombre del tablero")
  if(nombre !== null && nombre.trim() !== ""){
    alert(`Columna ${nombre} creada satisfactoriamente.`);
    craerBoard(nombre);
  }
}

// Crear Columna //
function botonCrearColumna(){
  const nombre = prompt("Ingrese el nombre de la columna")
  if(nombre !== null && nombre.trim() !== ""){
    alert(`Columna ${nombre} creada satisfactoriamente.`);
    crearColumna(nombre);
  }
}

// Crear Tarjeta //
function botonCrearTarjeta(boton){
  const name = prompt("Ingrese el nombre de la tarjeta");
  if(name !== null && name.trim() !== ""){
      alert(`Tarjeta ${name} creada satisfactoriamente.`);
      crearTarjeta(boton, name);
  }
}

// Borrar Columna //
function alertaBorrarC(boton){
  let texto;
  if(confirm("¿Estas seguro que quieres eliminar el elemento?")){
    texto = "Se eliminó el elemento."; 
    borrarColumna(boton);
    alert(texto);
  } else {
    texto = "No se eliminó ningun elemento.";
    alert(texto);
  }
}

// Borrar Tarjeta //
function alertaBorrarT(boton){
  let texto;
  if(confirm("¿Estas seguro que quieres eliminar el elemento?")){
    borrarTarjeta(boton.parentNode.parentNode.parentNode);
  } else {
    texto = "No se eliminó ningun elemento.";
    alert(texto);
  }
}

// Comprimir y Descomprimir //
function botonContraerDecontraer(boton){
  contraerDescontraer(boton)
}

// DRAG AND DROP //

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text", ev.target.id);
  ev.target.appendChild(document.getElementById(data));
}

/* <=================================== Mains ===================================> */

crearColumna("Pendientes");
crearColumna("En proceso");
crearColumna("Terminadas");

cargarJson();
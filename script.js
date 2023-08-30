/// Global
var tarjId = 0;
var colId = 0;

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
  
  const boards = document.getElementById("boards");
  boards.appendChild(nuevoBoard); // Agregar la nueva columna
}

// Crear Columna //
function crearColumna (){
  let inputName = document.getElementById("panel");
  let nameColumn = document.getElementById("inputColumnName").value;

  if (nameColumn){
    let = `column-${colId}`;
    let column = document.createElement("div");
    column.className = "col-3 column";
    column.id = columnId;
    column.innerHTML = `
    <div class="row justify-content-center col-3 contenedor" id = "columna">
      <div class="tituloColumnas">
        <input type="text" maxlenght="10" class="${nameColumn}" style="color: white;" contentEditable="true" data-aut>${nameColumn}</h4>
        <button onclick = "botonContraerDecontraer(this)" type="button" margin-left=5px class="botonColumnStyle">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      </div>
      <div class="contenidoCompleto" id="contenidoCompleto">        
        <div class="input-group w-auto">
          <input type="text" id="inputCardName" class="form-control enter-as-button" placeholder="Add Card" aria-label="Example input" ria-describedby="nameCard"/>
          <button class="btn btn-primary enter-button" type="button" onclick="crearTarjeta(this)" data-mdb-ripple-color="dark">
              +
          </button>
        </div>
        <div class = "contenido" id="contenido" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
        <div class="botones">
          <button  onclick = "setIdDeleteColumn(${columnId})" type="button" id="delete" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  panel.insertBefore(column, button);
  colId ++;
  }
}

function crearTarjeta(button) {
    let inputName = button.parentNode.querySelector("#inputCardName");
    let name = inputName.value;
    if (name) {
        let columna = button.closest(".contenedor");
        let contenido = columna.querySelector(".contenido");
        console.log(contenido);
        let cardId = `card-${tarjId}`;
        let card = document.createElement("div");
        card.className = "card";
        card.id = cardId;
        card.innerHTML = `
            <div class="card-body">
                <div class="tituloCard">
                  <h4 class="${cardId}" style="color: black;" contentEditable="true">${name}</h4>
                  <div class="dropdown">
                    <button class="btn btn-primary" prtype="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      </svg>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
                        <li>
                          <button id = "dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarTarjeta" onclick="editarTarjeta('${cardId}')">
                            Editar
                          </button>
                        </li>
                        <li>
                          <button id = "dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarTarjeta" onclick="setIdToDeleteCard('${cardId}')">
                            Borrar
                          </button>
                        </li>
                        <li>
                          <button id = "dropdownDuplicar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#duplicarTarjeta">
                            Duplicar
                          </button>
                        </li>
                      </ul>
                  </div>
                </div>
                <div class="contenidoCard">
                </div>
            </div>
        `;

      contenido.appendChild(card);
      inputName.value = "";

      let nuevaTarea = new tarea(name);
      let jstring = JSON.stringify(nuevaTarea);
      localStorage.setItem(cardId, jstring);
      tarjId++;
    }
}

// para borrar columna
function borrarColumna() {
  if (columnaParaBorrarId) {
    let column = document.getElementById(columnaParaBorrarId);
    if (column) {
        column.remove();
        localStorage.removeItem(columnaParaBorrarId);
        columnaParaBorrarId = null; // Reset the ID
    }
}
}

// borrar tarjeta
function borrarTarjeta() {
  if (tarjetaParaBorrarId) {
      let card = document.getElementById(tarjetaParaBorrarId);
      if (card) {
          card.remove();
          localStorage.removeItem(tarjetaParaBorrarId);
          tarjetaParaBorrarId = null; // Reset the ID
      }
  }
}

// Para cargar los datos del localstorage //

function cargarJson() {
  let contenedor = document.getElementById("panel");
  for (let i = 0; i < localStorage.length; i++) {
    let cardId = localStorage.key(i);
    let tarjetaExistente = document.getElementById(cardId);

    if (!tarjetaExistente) {
      let taskDataStr = localStorage.getItem(cardId);
      if (taskDataStr) {
        try {
          let taskData = JSON.parse(taskDataStr);

          let card = document.createElement("div");
          card.className = "card";
          card.id = cardId;
          card.innerHTML = `
          <div class="card-body" draggable = "">
          <div class="titulo">
              <h4 class="${cardId}" style="color: black;" contentEditable="true">${taskData.nombre}</h4>
              <div class="dropdown">
                <button class="btn btn-secondary" type="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
                    <li>
                      <button id = "dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarTarjeta" onclick="editarTarjeta('${cardId}')">
                        Editar
                      </button>
                    </li>
                    <li>
                      <button id = "dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarTarjeta" onclick="setIdToDeleteCard('${cardId}')">
                        Borrar
                      </button>
                    </li>
                    <li>
                      <button id = "dropdownDuplicar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#duplicarTarjeta">
                        Duplicar
                      </button>
                    </li>
                  </ul>
              </div>
          </div>
          <div class="contenidoCard">
          </div>
      </div>
        `;

          let contenido = document.getElementById("contenido");
          contenido.appendChild(card);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      }
    }
  }
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
    boton.innerHTML = botonUp;
  } else {
    columna.style.display = 'none';
    boton.innerHTML = botonDown;
  }
}


function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  let bsModal = new bootstrap.Modal(modal);
  bsModal.hide();
}

// id de la tarjeta a borrarse
let tarjetaParaBorrarId;
function setIdToDeleteCard(cardId) {
  tarjetaParaBorrarId = cardId;
}

let columnaParaBorrarId;
function setIdDeleteColumn(columnId){
  columnaParaBorrarId = columnId;
}

let cardToEditId;
function setIdToEditCard(cardId) {
  cardToEditId = cardId;
}

function getIdToEditCard(){
  return cardToEditId;
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

// Comprimir y Descomprimir //
function botonContraerDecontraer(boton){
  contraerDescontraer(boton);
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

/*
const container = document.getElementById('contenedor-principal');
const existingButton = document.querySelector('.enter-button');

// Agregar eventos al contenedor para delegación
container.addEventListener('keydown', function(event) {
    if (event.target.classList.contains('enter-as-button') && event.key === 'Enter') {
        event.preventDefault(); // Evitar el salto de línea en el campo
        event.target.nextElementSibling.click();
    }
});

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('enter-button')) {
        const buttonIndex = Array.from(event.target.parentElement.children).indexOf(event.target);
        alert('Botón ' + (buttonIndex + 1) + ' clickeado');
    }
});

// Agregar evento al botón existente
existingButton.addEventListener('click', function() {
    alert('Botón Existente clickeado');
});*/

cargarJson();
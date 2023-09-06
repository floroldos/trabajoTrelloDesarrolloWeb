// Comentario general //
// Gurisas por favor comenten el codigo //
// Porque los que no hacemos nada y tocamos el codigo cada tanto no sabemos que hacen la funciones // 

/* <=================================== Global Variables ===================================> */

var tarjId = 0;
var colId = 0;
let tarjEdit = 0;  // Variable para saber que tarjeta se va a editar


/* <=================================== Classes ===================================> */

class tarea {
  constructor(nombre, descripcion, listaBullets) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.listaBullets;
  }
}

class bullet {
  constructor(nombre, fecha) {
    this.nombre = nombre;
    this.fecha = fecha;
  }
}

/* <=================================== Principal Functions ===================================> */

// Crear Board //
function craerBoard(nombreBoard) {
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
function crearColumna() {
  let inputName = document.getElementById("panel");
  let nameColumn = document.getElementById("inputColumnName").value;

  if (nameColumn) {
    let columnId = `${colId}`;
    let column = document.createElement("div");
    column.className = "col-3 column";
    column.id = columnId;
    column.innerHTML = `
    <div class="row justify-content-center col-3 contenedor" id="${colId}">
      <div class="tituloColumnas">
        <h4 type="text" maxlenght="10" class="${nameColumn}" style="color: white;" contentEditable="true" data-aut>${nameColumn}</h4>
        <div class="dropdown">
          <button class="btn btn-primary" prtype="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
            <li>
              <button id="dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarColumna">
                Editar
              </button>
            </li>
            <li>
              <button id="dropdownComprimirDescomprimir" class="btn btn-secondary" type="button" onclick="contraerDescontraer(this)">
                Comprimir
              </button>
            </li>
            <li>
              <button id="dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarColumna" onclick="setIdDeleteColumn('${column.id}')">
                Borrar
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="contenidoCompleto" id="contenidoCompleto">
        <div class="input-group w-auto input">
          <input type="text" id="inputCardName" class="form-control enter-as-button" placeholder="Add Card" aria-label="Example input" ria-describedby="nameCard"/>
          <button class="btn btn-primary enter-button" type="button" onclick="crearTarjeta(this)" data-mdb-ripple-color="dark">
            +
          </button>
        </div>
        <div class = "contenido" id="contenido" ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
      </div>
    </div>
  `;


    let colList = [];

    localStorage.setItem(colId,colList);  

    panel.insertBefore(column, button);
    colId++;
  }
}

// Crear Tarjeta //
function crearTarjeta(button) {
  let inputName = button.parentNode.querySelector("#inputCardName");
  let name = inputName.value;
  if (name) {
    let columna = button.closest(".contenedor");
    let contenido = columna.querySelector(".contenido");
    let cardId = `card-${tarjId}`;
    let card = document.createElement("div");
    card.className = "card";
    card.id = cardId;
    card.draggable = "true";
    card.setAttribute('ondrag', 'drag(event)');
    //card.ondragstart = "drag(event)"
    card.innerHTML = `
          <div class="card-body">
            <div class="titulo">
            <textarea class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="80" data-autosize="true">${name}</textarea>
              <div class="dropdown">
                <button class="btn btn-primary" prtype="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
                  <li>
                    <button id = "dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarTarjeta" onclick="setTarjEdit(this)">
                      Editar
                    </button>
                  </li>
                  <li>
                    <button id = "dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarTarjeta" onclick="setIdToDeleteCard('${cardId}')">
                      Borrar
                    </button>
                  </li>
                  <li>
                    <button id = "dropdownDuplicar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#duplicarTarjeta" onclick="duplicarTarjeta(this)">
                      Duplicar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="contenidoCard"></div>
          </div>
        `;
    contenido.appendChild(card);
    inputName.value = "";
    let nuevaTarea = new tarea(name);

    console.log(columna);
    let jstring = JSON.stringify(nuevaTarea);

    for(let i = 0; i < localStorage.length; i++){
      if(localStorage.key(i) === columna.id){
        let arrId = localStorage.key(i);
        let arrCard = localStorage.getItem(i);
        
        if(arrCard === null){
          arrCard = [];
        }
        
        localStorage.setItem(arrId, arrCard);
      }
    tarjId++;
    }
  }
}

// Borrar Columna //
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

// Borrar Tarjeta //
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

// Cargar Tarjetas en LocalStorage //
function cargarJson() {
  let contenedor = document.getElementById("panel");
  for (let i = 0; i < localStorage.length; i++) {
    for(let j = 0; i < i.length; j++){
      let cardId = localStorage[i].key(j);
      let tarjetaExistente = document.getElementById(cardId);

      if (!tarjetaExistente) {
        let taskDataStr = localStorage[i].getItem(cardId);
        if (taskDataStr) {
          try {
            let taskData = JSON.parse(taskDataStr);

            let card = document.createElement("div");
            card.className = "card";
            card.id = cardId;
            card.innerHTML = `
            <div class="card-body">
              <div class="titulo">
              <textarea id="tituloCard" class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="80" data-autosize="true">${taskData.nombre}</textarea>
                <div class="dropdown">
                  <button class="btn btn-primary" type="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
                    <li>
                      <button id = "dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarTarjeta" onclick="setTarjEdit(this)">
                        Editar
                      </button>
                    </li>
                    <li>
                      <button id = "dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarTarjeta" onclick="setIdToDeleteCard('${cardId}')">
                        Borrar
                      </button>
                    </li>
                    <li>
                      <button id = "dropdownDuplicar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#duplicarTarjeta" onclick="duplicarTarjeta(this)">
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
}

/* <=================================== Modal Functions ===================================> */

// Función del modal para duplicar una tarjeta //
function duplicarTarjeta(button){
  let tarjetaADuplicar = button.closest(".titulo"); // Obtener el título de la tarjeta más cercana al botón duplicar

  let tituloADuplicar = tarjetaADuplicar.querySelector("h4").innerHTML; // Obtener el título de la tarjeta a duplicar
  let cardId = `card-${tarjId}`;

  let duplicada = document.createElement("div");
  duplicada.className = "card";
  duplicada.id = cardId;
  duplicada.innerHTML = `
  <div class="card-body">
    <div class="titulo">
      <h4 class="${cardId}" style="color: black;" contentEditable="true">${tituloADuplicar}</h4>
      <div class="dropdown">
        <button class="btn btn-primary" type="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownTarjeta">
          <li>
            <button id = "dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarTarjeta" onclick="setTarjEdit(this)">
              Editar
            </button>
          </li>
          <li>
            <button id = "dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarTarjeta" onclick="setIdToDeleteCard('${cardId}')">
              Borrar
            </button>
          </li>
          <li>
            <button id = "dropdownDuplicar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#duplicarTarjeta" onclick="duplicarTarjeta(this)">
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


let contenido = tarjetaADuplicar.closest(".contenido");
contenido.appendChild(duplicada);

let nuevaTarea = new tarea(tituloADuplicar);
let jstring = JSON.stringify(nuevaTarea);
localStorage.setItem(cardId, jstring);

tarjId ++;

}

// Función del modal para editar una tarjeta //
function editarTarjeta(button){

  let nombreEdit = button.closest(".modal-body");
  
}

// Función que settea la tarjeta que se va a editar //
function setTarjEdit(button){
  tarjEdit = button.closest(".card");
}

/* <=================================== Other Functions ===================================> */

// Comprimir y Descomprimir //
function contraerDescontraer(boton) {
  const contenedor = boton.closest('.contenedor');
  const columna = contenedor.querySelector('.contenidoCompleto');

  let botonDown = `
    Descomprimir
  `;

  let botonUp = `
    Comprimir
  `;

  if (columna.style.display === 'none') {
    columna.style.display = 'block';
    boton.innerHTML = botonUp;
  } else {
    columna.style.display = 'none';
    boton.innerHTML = botonDown;
  }
}


// DRAG AND DROP //
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    var data = ev.dataTransfer.getData("text");
    let container = document.getElementById(ev.target.id);
    container.appendChild(document.getElementById(data));
}

// NO SEE QUE HACE ESTA FUNCION FLORES POR FAVOR PONGANLE COMENTARIOS A LAS FUNCIONES //
// CREO QUE CIERRA EL MODAL //
function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  let bsModal = new bootstrap.Modal(modal);
  bsModal.hide();
}

// Id de la columna a borrarse //
let columnaParaBorrarId;
function setIdDeleteColumn(columnId) {
  columnaParaBorrarId = columnId;
}

// Id de la tarjeta a borrarse //
let tarjetaParaBorrarId;
function setIdToDeleteCard(cardId) {
  tarjetaParaBorrarId = cardId;
}

// Id de la tarjeta para editarse //
let cardToEditId;
function setIdToEditCard(cardId) {
  cardToEditId = cardId;
}

// Get de la tarjerra para editarse // 
function getIdToEditCard() {
  return cardToEditId;
}

// // Cabiar de color //
// function actualizarColor(){
//   const tiempoActual = new Date().getTime();
//   let fechalimite = document.getElementById("inputFecha").value;
//   const tiempoRestante = fechalimite - tiempoActual;
//   if(tiempoRestante > 0){}
// }

/* <=================================== Buttons ===================================> */
// Esta seccion se va a ir la mierda cuando terminemos de cambiar la estructura del board //

// Crear Board //
function botonCrearBoard() {
  const nombre = prompt("Ingrese el nombre del tablero")
  if (nombre !== null && nombre.trim() !== "") {
    alert(`Columna ${nombre} creada satisfactoriamente.`);
    craerBoard(nombre);
  }
}

// No usen este tipo de estructura por favor usen func tions o clases no dejen las cosas sueltas //

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

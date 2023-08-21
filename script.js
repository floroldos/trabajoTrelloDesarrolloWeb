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
      <div class="row justify-content-center col-4 contenedor" ondrop="drop(event)" ondragover="allowDrop(event)">
        <div class="tituloColumnas">
          <p>
            ${nombreColumna}
          </p>
        </div>
        <div class="botones">
          <button  onclick = "botonCrearTarjeta(this)" type="button" id="button_A" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
          <button onclick = "contraerDescontraer(this)" type="button" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
          </button>
          <button  onclick = "alertaBorrarC(this)" type="button" id="delete" margin-left=5px class="botonColumnStyle btn btn-outline-light rounded-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
          </button>
        </div>
        <div class="linea">
          <hr/>
        </div>
        <div class = "contenido" style="display: block;"  ondrop="drop(event)" ondragover="allowDrop(event)">
        </div>
      </div>
  `;
  const nuevaColumna = document.createElement("div"); // Crear un nuevo elemento div para la columna
  nuevaColumna.className = "col-4 columna";
  nuevaColumna.innerHTML = columna; // Asignar el contenido HTML al nuevo div

  const contenedor = document.getElementById("panel");
  contenedor.appendChild(nuevaColumna); // Agregar la nueva columna
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
    alert(texto);
  } else {
    texto = "No se eliminó ningun elemento.";
    alert(texto);
  }
}

function alertaBorrarT(boton){
  let texto;
  if(confirm("¿Estas seguro que quieres eliminar el elemento?")){
    texto = "Se eliminó el elemento."; 
    borrarTarjeta(boton);
    alert(texto);
  } else {
    texto = "No se eliminó ningun elemento.";
    alert(texto);
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
    <div class="card" draggable="true">
      <img class="card-img-top" src="img/Imagen1.svg">
      <div class="card-body">
        <h4 class="card-title"> ${name} </h4>
        <hr width="100%">
        <p class="card-text"> ${description} </p>
      </div>
      <div class="botones">
        <button onclick ="alertaBorrarT(this)" type="button" aria-label="Trash" margin-left=5px class="botonCard">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
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

  let botonDown = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>
  `;

  let botonUp = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>
  `;

  boton.onclick = () => {
    if (columna.style.display === 'none') {
      columna.style.display = 'block';
      boton.innerHTML = botonUp
    } else {
      columna.style.display = 'none';
      boton.innerHTML = botonDown
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

//DRAG AND DROP

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


// main
crearColumna("To-Do");
crearColumna("In progress");
crearColumna("Done");
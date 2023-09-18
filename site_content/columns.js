var colId = 0;
var columnIdByDelete;

class Column {
    constructor (nombre, columnId){
        this.nombre = nombre;
        this.columnId = columnId;
    }
}

function crearColumna() {
    let nameColumn = getNombreColumna();
    if(nameColumn) {
        let columnId = `column-${colId}`;
        let column = document.createElement("div");
        column.className = "col-3 column";
        column.id = columnId;
        column.innerHTML = `
        <div class="row justify-content-center col-3 contenedor" id="${colId}">
            <div class="tituloColumnas">
                <textarea id="nombreColumna" class="list-header-name mod-list-name js-list-name-input" aria-label="${nameColumn}" spellcheck="false" dir="auto" maxlength="80" data-autosize="true">${nameColumn}</textarea>
                <div class="dropdown">
                    <button class="btn btn-primary" prtype="button" id="dropdownTarjeta" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownColumn">
                        <li>
                            <button id="dropdownEditar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#editarColumna">
                                Editar
                            </button>
                        </li>
                        <li>
                            <button id="dropdownComprimirDescomrimir" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#comprimirDescomprimirColumna" onclick="contraerDescontraer(this)">
                                Comprimir
                            </button>
                        </li>
                        <li>
                            <button id="dropdownBorrar" class="btn btn-secondary" type="button" data-bs-toggle="modal" data-bs-target="#eliminarColumna" onclick="setIdDeleteColumn('${column.id}')">
                                Eliminar
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
                <div class="contenido" id="contenido" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
            </div>
        </div>
        `;
        setNombreColumna("");
        panel.insertBefore(column, button)
        colId++;
        let nuevaCol = new Column(nameColumn, columnId)
        let jstringCol = JSON.stringify(nuevaCol)
        postColumn(jstringCol)
    }
}

function getNombreColumna() {
    return document.getElementById("inputColumnName").value;
}

function setNombreColumna(valor) {
    document.getElementById("inputColumnName").value = valor;
}

function borrarColumna() {
    if(columnIdByDelete) {
        let column = document.getElementById(columnIdByDelete);
        if(column) {
            column.remove();
            columnIdByDelete = null;
            //falta el metodo delete de la web api
        }
    }
};

function setIdDeleteColumn(columnId){
    columnIdByDelete = columnId;
}

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

function postColumn(objColumn) {
    fetch("http://localhost:8091/columns", {
        method: "POST",
        body: objColumn,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        Access_Control_Allow_Origin: '*'
        })
    .then((resonse) => {
        return resonse.json();
    })
    .then((json) => console.log(json));
}

/*---------------------- Global Variables ----------------------*/
var tarjId = 0;
var tarjetaParaBorrarId;
var tarjEdit;
var cardToEditId;

/*---------------------- Class Card ----------------------*/
class Card {
    constructor(nombre, descripcion, cardId, columnId){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cardId = cardId;
        this.columnId = columnId;
    }
}

/*---------------------- Create Card ----------------------*/
function crearTarjeta(button) {
    let nameCard = getNombreCard(button);
    if(nameCard) {
        let columna = button.closest(".contenedor");
        let columnId = columna.id;
        console.log(columnId);
        let contenido = columna.querySelector(".contenido");
        let cardId = `card-${tarjId}`;
        let card = document.createElement("div");
        card.className = "card";
        card.id = cardId;
        card.innerHTML =`
        <div class="card-body">
            <div class="titulo">
                <textarea class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="20" data-autosize="true">${nameCard}</textarea>
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
            <div class="contenidoCard">
            </div>
        </div>
        `;
        contenido.appendChild(card);
        let descripcion = "";
        let nuevaCard = new Card(nameCard, descripcion, cardId, columnId);
        let jstringCard = JSON.stringify(nuevaCard);
        postCard(jstringCard);
        tarjId++;
        setNombreCard(button, "")
    }
}

/*---------------------- duplica la card ----------------------*/
function duplicarTarjeta(button) {
    let tarjetaADuplicar = button.closest(".titulo"); // Obtener el título de la tarjeta más cercana al botón duplicar
    let tituloADuplicar = tarjetaADuplicar.querySelector("textarea").innerHTML; // Obtener el título de la tarjeta a duplicar
    let cardId = `card-${tarjId}`;
    let duplicada = document.createElement("div");
    duplicada.className = "card";
    duplicada.id = cardId;
    duplicada.innerHTML =`
    <div class="card-body">
        <div class="titulo">
            <textarea class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="20" data-autosize="true">${tituloADuplicar}</textarea>
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
        <div class="contenidoCard">
        </div>
    </div>
    `;
    let contenido = tarjetaADuplicar.closest(".contenido");
    contenido.appendChild(duplicada);
    let descripcion = "";
    let nuevaCard = new Card(tituloADuplicar, descripcion, cardId);
    let jstringCrad = JSON.stringify(nuevaCard);
    postCard(jstringCrad);
    tarjId++;
}

/*---------------------- obtiene el nombre de la card ----------------------*/
function getNombreCard(button) {
    let inputName = button.parentNode.querySelector("#inputCardName");
    let name = inputName.value;
    return name;
}

/*---------------------- setea el valor del input del nombre de la card ----------------------*/
function setNombreCard(button, valor) {
    let inputName = button.parentNode.querySelector("#inputCardName");
    inputName.value = valor;
}

/*---------------------- borra la card ----------------------*/
function borrarTarjeta() {
    if (tarjetaParaBorrarId) {
        let card = document.getElementById(tarjetaParaBorrarId);
        if (card) {
            card.remove();
            tarjetaParaBorrarId = null;
            //falta el metodo delete de la web api
        }
    }
}

/*---------------------- setea tarjetaParaBorrar con el id de la card para borrar ----------------------*/
function setIdToDeleteCard(cardId) {
    tarjetaParaBorrarId = cardId;
}

/*---------------------- no se usa falta el arreglar el modal ----------------------*/
function editarTarjeta(button){
    button.closest(".modal-body");
}

/*---------------------- setea el tarjEdit con la card para editarla en el modal ----------------------*/
function setTarjEdit(button){
    tarjEdit = button.closest(".card");
}

/*---------------------- setea el cardToEditId con el id de la card para editar ----------------------*/
function setIdToEditCard(cardId) {
    cardToEditId = cardId;
}

/*---------------------- no se usa, falta arreglar el modal ----------------------*/
function getIdToEditCard() {
    return cardToEditId;
}

/*---------------------- guarda los valores de las card en la web-api  ----------------------*/
function postCard(objCard){
    fetch("http://localhost:8091/card", {
        method: "POST",
        body: objCard,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        Access_Control_Allow_Origin: '*'
        })
    .then((response) => {
        return response.json();
    })
    .then((json) => console.log(json));
}

/*---------------------- trae los valores de las cards desde la web-api ----------------------*/
function getCards() {
    fetch("http://localhost:8091/card")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        for(let i = 0; i < json.length; i++) {
            let column = document.getElementById(`${json[i].columnId}`);
            let cardId = `${json[i].cardId}`;
            let card = document.createElement("div");
            card.className = "card";
            card.id = cardId;
            card.innerHTML =`
            <div class="card-body">
                <div class="titulo">
                    <textarea class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="20" data-autosize="true">${json[i].nombre}</textarea>
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
                <div class="contenidoCard">
                </div>
            </div>
            `;
            column.appendChild(card);
        }
    })
    .catch((error) => {
        console.log(error)
    });
}

/*---------------------- Main ----------------------*/
getCards();
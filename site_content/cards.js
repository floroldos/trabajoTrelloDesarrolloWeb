var tarjId = 0;
var tarjetaParaBorrarId;

class Card {
    constructor(nombre, descripcion, cardId){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cardId = cardId;
    }
}

function crearTarjeta(button) {
    let nameCard = getNombreCard(button);
    if(nameCard) {
        let columna = button.closest(".contenedor");
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
        let nuevaCrad = new Card(nameCard, descripcion, cardId)
        let jstringCard = JSON.stringify(nuevaCrad);
        postCard(jstringCard);
        tarjId++;
        setNombreCard(button, "")
    }
}

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

function getNombreCard(button) {
    let inputName = button.parentNode.querySelector("#inputCardName");
    let name = inputName.value;
    return name;
}

function setNombreCard(button, valor) {
    let inputName = button.parentNode.querySelector("#inputCardName");
    inputName.value = valor;
}

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

function setIdToDeleteCard(cardId) {
    tarjetaParaBorrarId = cardId;
}

function editarTarjeta(button){
    button.closest(".modal-body");
}

function setTarjEdit(button){
    tarjEdit = button.closest(".card");
}

// Id de la tarjeta para editarse //
let cardToEditId;
function setIdToEditCard(cardId) {
    cardToEditId = cardId;
}

// Get de la tarjeta para editarse // 
function getIdToEditCard() {
    return cardToEditId;
}

function editarTarjeta(button){
    button.closest(".modal-body");
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    let bsModal = new bootstrap.Modal(modal);
    bsModal.hide();
}

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

//es lo mismo que el board hay que cambiarlo
function getCards() {
    fetch("http://localhost:8091/card")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        for(let i = 0; i < json.length; i++) {
            const boards = document.getElementById("boards");
            let boardId = `board-${tablerodId}`;
            let board = document.createElement("div");
            board.className = "board";
            board.id = boardId;
            board.innerHTML = `
            <li><a class="dropdown-item" href="#">${nameBoard}</a></li>
            `;
            setNombreBoard("");
            boards.appendChild(board);
            tablerodId++;
            let nuevoBoard = new Board(nameBoard, boardId);
            let jstringBoard = JSON.stringify(nuevoBoard);
            postBoard(jstringBoard);
        }
    });
}
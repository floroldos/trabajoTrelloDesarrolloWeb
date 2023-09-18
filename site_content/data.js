/* ------------------------- Get Boards ------------------------- */

function getBoardDatos() {}


/* ------------------------- Get Columns ------------------------- */

function getColumnDatos() {}


/* ------------------------- Get Cards ------------------------- */

function getCardDatos() {
  fetch("http://localhost:8091/card", { 
    method: "GET",
    headers: {
      'Content-Type': 'application/json', // Ajusta el tipo de contenido según tu API
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      data.forEach((tarjeta) => {
        const columnaId = tarjeta.columnId; 
        const columna = document.getElementById(columnaId);
        if (columna) {
          let columna = button.closest(".contenedor");
          let contenido = columna.querySelector(".contenido");
          let cardId = `${tarjeta.cardId}`;
          let card = document.createElement("div");
          card.className = "card";
          card.id = cardId;
          card.innerHTML = `
            <div class="card-body">
              <div class="titulo">
                <textarea class="${cardId}" aria-label="${cardId}" spellcheck="false" dir="auto" maxlength="20" data-autosize="true">${tarjeta.nombre}</textarea>
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
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}


/* ------------------------- Main ------------------------- */

getCardDatos();
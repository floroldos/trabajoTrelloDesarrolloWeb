var tablerodId = 0;

class Board {
    constructor(nombre, boardId){
        this.nombre = nombre;
        this.boardId = boardId;
    }
}

function crearBoard() {
    let nameBoard = getNombreBoard();
    if(nameBoard) {
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
}

function getNombreBoard() {
    return document.getElementById("inputBoardName").value;
}

function setNombreBoard(valor) {
    document.getElementById("inputBoardName").value = valor;
}

function postBoard(objBoard) {
    fetch("http://localhost:8091/boards", {
        method: "POST",
        body: objBoard,
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

function getBoards() {
    fetch("http://localhost:8091/boards")
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
            <li><a class="dropdown-item" href="#">${json[i].nombre}</a></li>
            `;
            boards.appendChild(board);
            tablerodId++;
        }
    });
}
'use strict';

const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
// Constants
const PORT = 8091;
const HOST = '0.0.0.0';



// App
const app = express();
var corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200, 
    methods: "GET, PUT"
}
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with specific origins as needed
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use(express.json());
app.use(cors(corsOptions));
let cards = [];
let columns = [];
let boards = [];

app.get('/', (req, res) => {
  const json = '{"result":true, "count":42}';
  const obj = JSON.parse(json);
  res.send(obj);
});

app.get('/card', (req, res) => {
    res.send(cards);
  });

app.get('/column', (req, res) => {
  res.send(columns);
});

app.get('/board', (req, res) => {
  res.send(columns);
});

app.post('/card', (req, res) => {   
  let card = {
    id: uuidv4().toString(),
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cardId: req.body.cardId
  }
  cards.push(card) 
  res.send(card);
});

app.post('/column', (req, res) => {
  let column = {
    id: uuidv4().toString(),
    nombre: req.body.nombre,
    columnId: req.body.columnId
  }
  columns.push(column)
  res.send(column);
});

app.post('/board', (req, res) => {
  let board = {
    id: uuidv4().toString(),
    nombre: req.body.nombre,
    boardId: req.body.boardId
  }
  boards.push(board)
  res.send(board);
});

app.put('/card/:id', (req, res) => {    
  let card = {
    id: req.params['id'],
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    cardId: req.body.cardId
  }
  _.remove(cards, (elem)=>{
    return elem.id == req.params['id']    
  });
  cards.push(card);
  res.send(card);
});

app.delete('/card/:id', (req, res) => {    
  _.remove(cards, (elem)=> {
    return elem.id == req.params['id']    
  });
  res.send(cards);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
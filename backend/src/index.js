const express = require('express'); // quando é um pacote não precisa ./
const cors = require('cors'); 
const routes = require('./routes'); // quando é um arquivo colocar ./

const app = express();

app.use(cors()); // em desenvolvimento vamos deixar assim por enquanto
app.use(express.json()); // informando que o corpo da requisição será em jso
app.use(routes);
app.listen(3333);
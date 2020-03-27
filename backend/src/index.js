const express = require('express'); // quando é um pacote não precisa ./
const routes = require('./routes'); // quando é um arquivo colocar ./

const app = express();

app.use(express.json()); // informando que o corpo da requisição será em json

app.use(routes);

/**
 * Rota /recurso
 * 
 * GET - buscar uma informação do back-end
 * POST - Criar uma informação no back-end
 * PUT - alterar uma informação no back-end
 * DELETE - excluir informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após o simbolo de interrogação "?" (filtros, paginação) 
  * -> para obter o que foi enviado request.query
  * 
  * Route Params : Parâmetros não nomeados utilizados para identificar recursos exemplo "/users/:id" indica 
  * -> para obter o que foi enviado request.params
  * que o número que vier após a / será o id
  * 
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * -> request.body
  */

app.listen(3333);
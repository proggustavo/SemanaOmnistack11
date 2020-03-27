const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


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
const routerPublicador       = require('express').Router();
const controllerPublicador   = require('../../controllers/publicador');

routerPublicador.get('/publicadores/all', controllerPublicador.getAllPublicadores);
routerPublicador.get('/publicadores/publicador/:id', controllerPublicador.getPublicadorById);
routerPublicador.get('/publicadores/grupo/:grupo', controllerPublicador.getPublicadorByGrupo);
routerPublicador.post('/publicadores/publicador/new', controllerPublicador.addPublicador);
routerPublicador.put('/publicadores/publicador/update', controllerPublicador.updatePublicador);
routerPublicador.delete('/publicadores/remove/:id', controllerPublicador.removePublicador);


module.exports = routerPublicador;
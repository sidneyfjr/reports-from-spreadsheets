const routerPioneiro       = require('express').Router();
const controllerPioneiro   = require('../../controllers/pioneiro');


routerPioneiro.get('/pioneiros/regulares/all', controllerPioneiro.findPioneirosRegulares);
routerPioneiro.get('/pioneiros/regulares/grupo/:grupo', controllerPioneiro.findPioneirosRegularesGrupo);
routerPioneiro.get('/pioneiros/auxiliares/mes/:mes', controllerPioneiro.findPioneirosAuxiliaresMes);
routerPioneiro.get('/pioneiros/auxiliares/mes/:mes/grupo/:grupo', controllerPioneiro.findPioneirosAuxiliaresMesGrupo);


module.exports = routerPioneiro; 
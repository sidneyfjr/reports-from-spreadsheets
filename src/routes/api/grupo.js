const routerGrupo       = require('express').Router();
const controllerGrupo   = require('../../controllers/grupo');

routerGrupo.get('/grupos/all', controllerGrupo.getAllGrupos);
routerGrupo.get('/grupos/grupo/:id', controllerGrupo.getGrupoById);
routerGrupo.post('/grupos/grupo/new', controllerGrupo.addGrupo);
routerGrupo.put('/grupos/grupo/update', controllerGrupo.updateGrupo);
routerGrupo.delete('/grupos/remove/:id', controllerGrupo.removeGrupo);


module.exports = routerGrupo;
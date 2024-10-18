const routerRelatorio       = require('express').Router();
const controllerRelatorio   = require('../../controllers/relatorio');


routerRelatorio.get('/relatorios/all', controllerRelatorio.getAllRelatorios);
routerRelatorio.get('/relatorios/publicador/:id', controllerRelatorio.findRelatorioByPublicador);
routerRelatorio.get('/relatorios/publicador/:id/mes/:mes', controllerRelatorio.findRelatorioByPublicadorAndMes);
routerRelatorio.get('/relatorios/publicador/nao-relatou/:mes', controllerRelatorio.findRelatoriosPublicadorNaoRelatouMes);
routerRelatorio.get('/relatorios/publicador/nao-relatou/mes/:mes/grupo/:grupo', controllerRelatorio.findRelatoriosPublicadorNaoRelatouMesGrupo);
routerRelatorio.get('/relatorios/pioneiros/regular/mes/:mes', controllerRelatorio.findRelatoriosPioneirosRegularesMes);
routerRelatorio.get('/relatorios/pioneiros/regular/mes/:mes/grupo/:grupo', controllerRelatorio.findRelatoriosPioneirosRegularesMesGrupo);
routerRelatorio.get('/relatorios/pioneiros/auxiliar/mes/:mes', controllerRelatorio.findRelatoriosPioneirosAuxiliaresMes);
routerRelatorio.get('/relatorios/pioneiros/auxiliar/mes/:mes/grupo/:grupo', controllerRelatorio.findRelatoriosPioneirosAuxiliaresMesGrupo);
routerRelatorio.get('/relatorios/grupo/:grupo', controllerRelatorio.findRelatorioByGrupo);
routerRelatorio.get('/relatorios/grupo/:grupo/mes/:mes', controllerRelatorio.findRelatorioByGrupoAndMes);
routerRelatorio.post('/relatorios/new', controllerRelatorio.addRelatorio);
routerRelatorio.put('/relatorios/update', controllerRelatorio.updateRelatorio);
routerRelatorio.delete('/relatorios/remove/:id/mes/:mes/ano/:ano', controllerRelatorio.removeRelatorio);


module.exports = routerRelatorio; 
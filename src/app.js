const Grupo         = require('./models/grupo');
const GrupoService  = require('./services/grupo');

const Publicador         = require('./models/publicador');
const PublicadorService  = require('./services/publicador');

const Relatorio         = require('./models/relatorio');
const RelatorioService  = require('./services/relatorio');
const generateSheet     = require('./utils/generateSheet');

// const novoRelatorio = new Relatorio({
//         "publicadorId": 3000,
//         "mes": 8,
//         "anoServico": 2024,
//         "participou": 1,
//         "estudos": 0,
//         "pioneiroAuxiliar": 0,
//         "pioneiroRegular": 0,
//         "grupoId": 1
// });

// RelatorioService.addRelatorio(novoRelatorio);

//RelatorioService.removeRelatorio(3000, 9, 2024);

// const updateNovoRelatorio = new Relatorio({
//     "publicadorId": 3000,
//     "mes": 9,
//     "anoServico": 2024,
//     "participou": 1,
//     "estudos": 0,
//     "pioneiroAuxiliar": 0,
//     "pioneiroRegular": 0,
//     "grupoId": 1
//  });

// RelatorioService.updateRelatorio(
//     updateNovoRelatorio.publicadorId,8,2024,updateNovoRelatorio
// );

//const relatorio = RelatorioService.findRelatorioByPublicador(82);
// const relatorio = RelatorioService.getAllRelatorios();
// console.log(relatorio);

// const novoPublicador = new Publicador({
//     publicadorId: 4000,
//     nome: "Manuel Lopes de Almeida",
//     grupoId: 1,
//     endereco: "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
//     contato: "85 98888-7777",
//     nomeContatoEmergencia: "Ricardo",
//     contatoEmergencia: "85 97777-6666",
//     mudou:0
// });

// PublicadorService.addPublicador(novoPublicador);

// const updateNovoPublicador = new Publicador({
//         publicadorId: 4000,
//         nome: "Manuel Lopes de Almeida Neto",
//         grupoId: 1,
//         endereco: "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
//         contato: "85 98888-7777",
//         nomeContatoEmergencia: "Ricardo",
//         contatoEmergencia: "85 97777-6666",
//         mudou:0
//     });

// PublicadorService.updatePublicador(updateNovoPublicador.publicadorId,updateNovoPublicador);

//PublicadorService.removePublicador(4000);

//const r = PublicadorService.getAllPublicadores();
// const r = PublicadorService.findPublicadorById(82);
const r = PublicadorService.findPublicadorByGrupo('alto da paz');
//const r = RelatorioService.findRelatorioByPublicador(82);
//const r = RelatorioService.findRelatorioByPublicadorAndMes(82,'maio');
//const r = RelatorioService.findRelatorioByGrupo('alto da paz');
//const r = RelatorioService.findRelatorioByGrupoAndMes('alto da paz','maio');
//const r = RelatorioService.findPioneirosRegulares();
//const r = RelatorioService.findPioneirosRegularesGrupo('alto da paz');
//const r = RelatorioService.findPioneirosAuxiliaresMes('maio');
// const r = RelatorioService.findPioneirosAuxiliaresMesGrupo('maio','alto da paz');
//const r = RelatorioService.findRelatoriosPioneirosRegularesMes('maio');
//const r = RelatorioService.findRelatoriosPioneirosRegularesMesGrupo('maio', 'castelo');
//const r = RelatorioService.findRelatoriosPioneirosAuxiliaresMes('março');
//const r = RelatorioService.findRelatoriosPioneirosAuxiliaresMesGrupo('março','alto da paz');
//const r = RelatorioService.findRelatoriosPublicadorNaoRelatouMes('agosto');
// const r = RelatorioService.findRelatoriosPublicadorNaoRelatouMesGrupo('agosto', 'alto da paz');
//const r = RelatorioService.getAllRelatorios();
console.log(r);
//generateSheet(r, 'Publicadores Alto da Paz');


// const novoGrupo = new Grupo({
//     grupoId: 6,
//     grupo: "teste",
//     dirigenteId: 38,
//     ajudanteId: 43
// });

// GrupoService.addGrupo(novoGrupo);

//GrupoService.removeGrupo(6);

// const updateNovoGrupo = new Grupo({
//     grupoId: 6,
//     grupo: "mirante",
//     dirigenteId: 38,
//     ajudanteId: 43
// });

// GrupoService.updateGrupo(6,updateNovoGrupo);

//const grupo = GrupoService.getAllGrupos();
//const grupo = GrupoService.findGrupoById(1);
//console.log(grupo);


  
const RelatorioService = require('../services/relatorio');
const {MESSAGES} = require('../utils/constants');


const getAllRelatorios = async (req, res) => {
    try {
        const relatorios =  await RelatorioService.getAllRelatorios();
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatorioByPublicador = async (req, res) => {  
    try {
        const id = parseInt(req.params.id);
        const relatorios =  await RelatorioService.findRelatorioByPublicador(id);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatorioByPublicadorAndMes = async (req, res) => {  
    try {
        const publicadorId  = parseInt(req.params.id);
        const mes           = req.params.mes;
        const relatorios =  await RelatorioService.findRelatorioByPublicadorAndMes(publicadorId,mes);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatorioByGrupo = async (req, res) => {  
    try {
        const grupo      = req.params.grupo;
        const relatorios = await RelatorioService.findRelatorioByGrupo(grupo);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatorioByGrupoAndMes = async (req, res) => {  
    try {
        const grupo      = req.params.grupo;
        const mes        = req.params.mes;
        const relatorios =  await RelatorioService.findRelatorioByGrupoAndMes(grupo, mes);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findPioneirosRegulares = async (req, res) => {
    try {
        const relatorios =  await RelatorioService.findPioneirosRegulares();
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findPioneirosRegularesGrupo = async (req, res) => {  
    try {
        const grupo      = req.params.grupo;
        const relatorios = await RelatorioService.findPioneirosRegularesGrupo(grupo);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatoriosPioneirosRegularesMes = async (req, res) => {  
    try {
        const mes        = req.params.mes;
        const relatorios = await RelatorioService.findRelatoriosPioneirosRegularesMes(mes);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatoriosPioneirosRegularesMesGrupo = async (req, res) => {  
    try {
        const mes           = req.params.mes;
        const grupo         = req.params.grupo;
        const relatorios    = await RelatorioService.findRelatoriosPioneirosRegularesMesGrupo(mes, grupo);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatoriosPioneirosAuxiliaresMes = async (req, res) => {  
    try {
        const mes        = req.params.mes;
        const relatorios = await RelatorioService.findRelatoriosPioneirosAuxiliaresMes(mes);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}



const findRelatoriosPioneirosAuxiliaresMesGrupo = async (req, res) => {  
    try {
        const mes           = req.params.mes;
        const grupo         = req.params.grupo;
        const relatorios    = await RelatorioService.findRelatoriosPioneirosAuxiliaresMesGrupo(mes, grupo);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findRelatoriosPublicadorNaoRelatouMes = async (req, res) => {
    try {
        const mes           = req.params.mes;
        const relatorios    = await RelatorioService.findRelatoriosPublicadorNaoRelatouMes(mes);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}


const findRelatoriosPublicadorNaoRelatouMesGrupo = async (req, res) => { 
    try {
        const mes           = req.params.mes;
        const grupo         = req.params.grupo;
        const relatorios    = await RelatorioService.findRelatoriosPublicadorNaoRelatouMesGrupo(mes, grupo);
        return res.json(relatorios);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const addRelatorio = async (req, res) => {
    try {
        RelatorioService.addRelatorio(req.body);
        res.json({'message': MESSAGES.RELATORIO_ADDED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const updateRelatorio = async (req, res) => {
    try {
        const id            =   parseInt(req.body.publicadorId);
        const mes           =   req.body.mes;
        const anoServico    =   req.body.anoServico;
        RelatorioService.updateRelatorio(id, mes, anoServico, req.body);
        res.json({'message': MESSAGES.RELATORIO_UPDATED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const removeRelatorio = async (req, res) => {
    try {
        const id    =   parseInt(req.params.id);
        const mes   =   parseInt(req.params.mes);
        const ano   =   parseInt(req.params.ano);
        RelatorioService.removeRelatorio(id,mes,ano);
        res.json({'message': MESSAGES.RELATORIO_REMOVED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}


module.exports = {
    getAllRelatorios,
    findRelatorioByPublicador,
    findRelatorioByPublicadorAndMes,
    findRelatorioByGrupo,
    findRelatorioByGrupoAndMes,
    findPioneirosRegulares,
    findPioneirosRegularesGrupo,
    findRelatoriosPioneirosRegularesMes,
    findRelatoriosPioneirosRegularesMesGrupo,
    findRelatoriosPioneirosAuxiliaresMes,
    findRelatoriosPioneirosAuxiliaresMesGrupo,
    findRelatoriosPublicadorNaoRelatouMesGrupo,
    addRelatorio,
    updateRelatorio,
    removeRelatorio,
    findRelatoriosPublicadorNaoRelatouMes
}
const PioneiroService = require('../services/pioneiro');


const findPioneirosRegulares = async (req, res) => {
    try {
        const pioneiros =  PioneiroService.findPioneirosRegulares();
        return res.json(pioneiros);
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
        const pioneiros  = PioneiroService.findPioneirosRegularesGrupo(grupo);
        return res.json(pioneiros);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findPioneirosAuxiliaresMes = async (req, res) => {
    try {
        const mes      = req.params.mes;
        const pioneiros  = PioneiroService.findPioneirosAuxiliaresMes(mes);
        return res.json(pioneiros);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const findPioneirosAuxiliaresMesGrupo = async (req, res) => {
    try {
        const mes      = req.params.mes;
        const grupo    = req.params.grupo;
        const pioneiros  = PioneiroService.findPioneirosAuxiliaresMesGrupo(mes,grupo);
        return res.json(pioneiros);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}



module.exports = {
    findPioneirosRegulares,
    findPioneirosRegularesGrupo,
    findPioneirosAuxiliaresMes,
    findPioneirosAuxiliaresMesGrupo
}
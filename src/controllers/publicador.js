const PublicadorService = require('../services/publicador');
const {MESSAGES} = require('../utils/constants')


const getAllPublicadores = async (req, res) => {
    try {
        const publicadores =  PublicadorService.getAllPublicadores();
        return res.json(publicadores);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const getPublicadorById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const publicadores =  PublicadorService.getPublicadorById(id);
        return res.json(publicadores);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const getPublicadorByGrupo = async (req, res) => {
    try {
        const grupo         = req.params.grupo;
        const publicadores  = PublicadorService.getPublicadorByGrupo(grupo);
        return res.json(publicadores);
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const addPublicador = async (req, res) => {
    try {
        PublicadorService.addPublicador(req.body);
        res.json({message: MESSAGES.PUBLICADOR_ADDED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const updatePublicador = async (req, res) => {
    try {
        const id    =   parseInt(req.body.publicadorId);
        const dados =   req.body
        PublicadorService.updatePublicador(id, dados);
        res.json({message: MESSAGES.PUBLICADOR_UPDATED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}

const removePublicador = async (req, res) => {
    try {
        const id    =   parseInt(req.params.id);
        PublicadorService.removePublicador(id);
        res.json({message: MESSAGES.PUBLICADOR_REMOVED_SUCCESS});
    } catch(e) {
        return res.status(400).json({
            status: false,
            error: e.message
        })
    }
}


module.exports = {
    getAllPublicadores,
    getPublicadorById,
    getPublicadorByGrupo,
    addPublicador,
    updatePublicador,
    removePublicador
};
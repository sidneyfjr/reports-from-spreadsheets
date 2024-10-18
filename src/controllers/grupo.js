const {MESSAGES}   = require('../utils/constants');
const GrupoService = require('../services/grupo');

     const getAllGrupos = async (req, res) => {
        try {
            const grupos =  await GrupoService.getAllGrupos();
            return res.json(grupos);
        } catch(e) {
            return res.status(400).json({
                status: false,
                error: e.message
            })
        }
    }

    const getGrupoById = async (req, res) => {
        try {
            const id        =   parseInt(req.params.id);
            const grupos    =   await GrupoService.getGrupoById(id);
            return res.json(grupos);
        } catch(e) {
            return res.status(400).json({
                status: false,
                error: e.message
            })
        }
    }

    const addGrupo = async (req, res) => {
        try {
            GrupoService.addGrupo(req.body);
            res.json({ message: MESSAGES.GROUP_ADDED_SUCCESS });
        } catch(e) {
            return res.status(400).json({
                status: false,
                error: e.message
            })
        }
    }

    const removeGrupo = async (req, res) => {
        try {
            const id    =   parseInt(req.params.id);
            await GrupoService.removeGrupo(id);
            res.json({message: MESSAGES.GROUP_REMOVED_SUCCESS});
        } catch(e) {
            return res.status(400).json({
                status: false,
                error: e.message
            })
        }
    }

    const updateGrupo = async (req, res) => {
        try {
            const id    =   parseInt(req.body.grupoId);
            const dados =   req.body
            await GrupoService.updateGrupo(id, dados);
            res.json({message: MESSAGES.GROUP_UPDATED_SUCCESS});
        } catch(e) {
            return res.status(400).json({
                status: false,
                error: e.message
            })
        }
    }
 

module.exports = {
    getAllGrupos,
    getGrupoById,
    addGrupo,
    removeGrupo,
    updateGrupo
};
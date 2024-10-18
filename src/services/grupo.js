const {FILES_PATH}    = require('../utils/constants');
const Grupo         = require('../models/grupo');
const { writeJSON, readJSON } = require('../utils/fileUtils');
const { publicadoresData} = require('../utils/loadFilesData');
const {MESSAGES} = require('../utils/constants');

let gruposData = readJSON(FILES_PATH.GRUPOS);

class GrupoService {

    static getAllGrupos() {
      return gruposData.map(grupo => {
        try {
            const dirigente = publicadoresData.find(p => p.publicadorId === grupo.dirigenteId);
            const ajudante  = publicadoresData.find(p => p.publicadorId === grupo.ajudanteId);    
            return Grupo.fromJSON(grupo, dirigente, ajudante);
          } catch (error) {
            console.warn(`Erro ao validar grupo existente: ${error.message}`);
            return grupo;
          }
        });
    }
    
    static getGrupoById(grupoId) {
      try {
        const grupo     = gruposData.find(grupo => grupo.grupoId === grupoId);
        const dirigente = publicadoresData.find(p => p.publicadorId === grupo.dirigenteId);
        const ajudante  = publicadoresData.find(p => p.publicadorId === grupo.ajudanteId); 
        return grupo 
              ? Grupo.fromJSON(grupo, dirigente, ajudante) 
              : {message: MESSAGES.GROUP_NOT_FOUND};
      } catch (error) {
        return {message: MESSAGES.GROUP_NOT_FOUND};
      }
    }


    static addGrupo(novoGrupo) {
        gruposData.push(novoGrupo);
        writeJSON(FILES_PATH.GRUPOS, gruposData);
    }

    static removeGrupo(grupoId) {
      gruposData = gruposData.filter(grupo => grupo.grupoId !== grupoId);
      writeJSON(FILES_PATH.GRUPOS, gruposData);
    }

    static updateGrupo(grupoId, dadosAtualizados) {
    
        // Encontra o índice do grupo com o grupoId especificado
        const index = gruposData.findIndex(grupo => grupo.grupoId === grupoId);
    
        if (index === -1) {
          throw new Error('Grupo não encontrado');
        }
    
        // Atualiza o grupo com os novos dados
        gruposData[index] = {
          ...gruposData[index],    // Mantém as propriedades antigas
          ...dadosAtualizados  // Atualiza com os novos dados
        };
    
        // Salva as alterações no arquivo JSON
        writeJSON(FILES_PATH.GRUPOS, gruposData);
      }

}

module.exports = GrupoService;

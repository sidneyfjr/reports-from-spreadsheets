const FILES_PATH    = require('../utils/constants');
const Grupo         = require('../models/grupo');
const { writeJSON } = require('../utils/fileUtils');
const { gruposData, publicadoresData} = require('../utils/loadFilesData');


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
    
    static findGrupoById(grupoId) {
        const grupo = gruposData.find(grupo => grupo.grupoId === grupoId);
        if (!grupo) {
          console.warn(`Erro ao validar grupo existente!`);
          return grupo;
        }
        const dirigente = publicadoresData.find(p => p.publicadorId === grupo.dirigenteId);
        const ajudante  = publicadoresData.find(p => p.publicadorId === grupo.ajudanteId); 
        return grupo ? Grupo.fromJSON(grupo, dirigente, ajudante) : null;
    }


    static addGrupo(novoGrupo) {
        gruposData.push(novoGrupo);
        writeJSON(FILES_PATH.GRUPOS, gruposData);
    }

    static removeGrupo(grupoId) {
        const grupoData = gruposData.filter(grupo => grupo.grupoId !== grupoId);
        writeJSON(FILES_PATH.GRUPOS, grupoData);
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

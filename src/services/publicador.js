const FILES_PATH     = require('../utils/constants');
const Publicador     = require('../models/publicador');
const { writeJSON }  = require('../utils/fileUtils');
const { gruposData, publicadoresData} = require('../utils/loadFilesData');

class PublicadorService {

    static getAllPublicadores() {   
        return publicadoresData.map(publicador => {
          try {
            const grupo = gruposData.find(g => g.grupoId === publicador.grupoId);
            return Publicador.fromJSON(publicador, grupo);
          } catch (error) {
            return publicador;
          }
        });
    }

    static findPublicadorById(publicadorId) {    
      return PublicadorService.getAllPublicadores().filter(r => r.publicadorId === publicadorId);
  }

    static findPublicadorByGrupo(grupo) {  
      return PublicadorService.getAllPublicadores().filter(r => r.grupo === grupo.toUpperCase());
  }

  // Criar publicadores sem contato de emergência
  // Criar publicadores menores de idade
  // Criar publicadores idosos (60+)
  // Criar publicadores não batizados
  // Criar publicadores batizados ultimo ano


    static addPublicador(novoPublicador) {
        publicadoresData.push(novoPublicador);
        writeJSON(FILES_PATH.PUBLICADORES, publicadoresData);
    }

    static removePublicador(publicadorId) {
        const publicadorData = publicadoresData.filter(publicador => publicador.publicadorId !== publicadorId);
        writeJSON(FILES_PATH.PUBLICADORES, publicadorData);
    }

    static updatePublicador(publicadorId, dadosAtualizados) {
  
        const index = publicadoresData.findIndex(publicador => publicador.publicadorId === publicadorId);
    
        if (index === -1) {
          throw new Error('Publicador não encontrado');
        }
    
        publicadoresData[index] = {
          ...publicadoresData[index],    // Mantém as propriedades antigas
          ...dadosAtualizados  // Atualiza com os novos dados
        };
    
        writeJSON(FILES_PATH.PUBLICADORES, publicadoresData);

      }

}

module.exports = PublicadorService;

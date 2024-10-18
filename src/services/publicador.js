const {FILES_PATH}     = require('../utils/constants');
const Publicador     = require('../models/publicador');
const { writeJSON, readJSON }  = require('../utils/fileUtils');
const { gruposData} = require('../utils/loadFilesData');
const {MESSAGES} = require('../utils/constants');

let publicadoresData = readJSON(FILES_PATH.PUBLICADORES);

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

    static getPublicadorById(publicadorId) {  
        const publicador  = PublicadorService.getAllPublicadores()
                              .find(r => r.publicadorId === publicadorId);
        return publicador 
                ? publicador 
                : {message: MESSAGES.PUBLICADOR_NOT_FOUND};
  }

  static getPublicadorByGrupo(grupo) {
    const publicadores  =  PublicadorService.getAllPublicadores()
                            .filter(r => r.grupo === grupo.toUpperCase());

    return publicadores.length !== 0
            ? publicadores
            : {message: MESSAGES.PUBLICADOR_NOT_FOUND};
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
      publicadoresData = publicadoresData.filter(publicador => publicador.publicadorId !== publicadorId);
      writeJSON(FILES_PATH.PUBLICADORES, publicadoresData);
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

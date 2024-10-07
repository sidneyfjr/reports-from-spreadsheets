const booleanToYesNo = require('../utils/booleanToYesNo');

class Publicador {

    constructor({publicadorId, nome, grupoId, endereco, contato, nomeContatoEmergencia, contatoEmergencia, mudou}) {
      this.publicadorId = publicadorId;
      this.nome = nome;
      this.grupoId = grupoId;
      this.endereco = endereco;
      this.contato = contato;
      this.nomeContatoEmergencia = nomeContatoEmergencia;
      this.contatoEmergencia = contatoEmergencia;
      this.mudou = mudou;
    }

    validate() {
        if (!this.publicadorId) {
          throw new Error('publicadorId é obrigatório.');
        }
    
        if (!this.nome) {
          throw new Error('Nome do publicador é obrigatório.');
        }
    
        if (this.grupoId === undefined || this.grupoId === null) {
          throw new Error('grupoId é obrigatório.');
        }
    
      }
  
    static fromJSON(publicadorData, grupo) {
      const publicador = {
        publicadorId  : publicadorData.publicadorId,
        nome: publicadorData.nome,
        grupo: grupo.grupo,
        endereco: publicadorData.endereco,
        contato: publicadorData.contato,
        nomeContatoEmergencia: publicadorData.nomeContatoEmergencia,
        contatoEmergencia: publicadorData.contatoEmergencia,
        mudou: booleanToYesNo(publicadorData.mudou)
      };
      return publicador;
    }
  }
  
  module.exports = Publicador;
  

class Grupo {
  
    constructor({grupoId, grupo, dirigenteId, ajudanteId, dirigente, ajudante}) {
      this.grupoId = grupoId;
      this.grupo = grupo;
      this.dirigenteId = dirigenteId;
      this.ajudanteId = ajudanteId;
      this.dirigente = dirigente;
      this.ajudante = ajudante;
    }
  
    validate() {
      if (!this.grupoId) {
        throw new Error('GrupoId é obrigatório.');
      }
  
      if (!this.grupo) {
        throw new Error('Nome do grupo é obrigatório.');
      }
  
      if (this.dirigenteId === undefined || this.dirigenteId === null) {
        throw new Error('Dirigente é obrigatório.');
      }
  
      if (this.ajudanteId === undefined || this.ajudanteId === null) {
        throw new Error('Ajudante é obrigatório.');
      }
    }
  

    static fromJSON(grupoData, dirigente, ajudante) {
      const grupo = new Grupo({
        grupoId:      grupoData.grupoId, 
        grupo:        grupoData.grupo, 
        dirigenteId:  grupoData.dirigenteId, 
        ajudanteId:   grupoData.ajudanteId,
        dirigente:    dirigente.nome, 
        ajudante:     ajudante.nome
      });
       
      return grupo;
    }
    
  }
  
  module.exports = Grupo;
  
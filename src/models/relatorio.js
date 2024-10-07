const {MESES}    = require('../utils/constants');
const booleanToYesNo = require('../utils/booleanToYesNo');

class Relatorio {

    constructor({publicadorId, nome, mes, anoServico, participou,estudos, pioneiroAuxiliar,pioneiroRegular, grupoId} ) {

      this.publicadorId = publicadorId;
      this.nome = nome;
      this.mes = mes;
      this.anoServico = anoServico;
      this.participou = participou;
      this.estudos = estudos;
      this.pioneiroAuxiliar = pioneiroAuxiliar;
      this.pioneiroRegular = pioneiroRegular;
      this.grupoId = grupoId;

    }

    validate() {
        if (this.publicadorId === undefined || this.publicadorId === null) {
          throw new Error('publicadorId é obrigatório.');
        }
    
        // if (!this.mes) {
        //   throw new Error('Mês do publicador é obrigatório.');
        // }
    
        if (this.anoServico === undefined || this.anoServico === null) {
          throw new Error('Ano de serviço é obrigatório.');
        }
    
      }
  
    static fromJSON(relatorioData, grupo, publicador) {
      const relatorio = {
        publicadorId: relatorioData.publicadorId,
        mes: MESES[relatorioData.mes -1],
        nome: publicador.nome,
        anoServico: relatorioData.anoServico,
        participou: booleanToYesNo(relatorioData.participou),
        estudos: relatorioData.estudos ,
        pioneiroAuxiliar: booleanToYesNo(relatorioData.pioneiroAuxiliar) ,
        pioneiroRegular: booleanToYesNo(relatorioData.pioneiroRegular) ,
        grupo: grupo.grupo
    };  
      return relatorio;
    }

  }
  
  module.exports = Relatorio;
  
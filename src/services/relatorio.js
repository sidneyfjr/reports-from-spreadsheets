const {FILES_PATH, MESSAGES}   = require('../utils/constants');
const Relatorio     = require('../models/relatorio');
const { writeJSON, readJSON } = require('../utils/fileUtils');
const {gruposData, publicadoresData} = require('../utils/loadFilesData');
const booleanToYesNo = require('../utils/booleanToYesNo');

let relatoriosData = readJSON(FILES_PATH.RELATORIOS);

class RelatorioService {

    static getAllRelatorios() {
        return relatoriosData.map(relatorio => {
          try {
            const publicador  = publicadoresData.find(p => p.publicadorId === relatorio.publicadorId && p.mudou == 0 );
            const grupo       = gruposData.find(g => g.grupoId === relatorio.grupoId);
            return Relatorio.fromJSON(relatorio, grupo, publicador);
          } catch (error) {
            return relatorio;
          }
        });
    }

    static findRelatorioByPublicador(publicadorId) {
      const relatorios =  RelatorioService.getAllRelatorios()
                          .filter(r => r.publicadorId === publicadorId);
      return relatorios.length !== 0
              ? relatorios
              : {message: MESSAGES.RELATORIO_NOT_FOUND};
    }

    static findRelatorioByPublicadorAndMes(publicadorId, mes) {
      const relatorios =  RelatorioService.findRelatorioByPublicador(publicadorId);                          
      return relatorios.message !== MESSAGES.RELATORIO_NOT_FOUND
              ? relatorios.find(r => r.mes === mes.toUpperCase()) 
              : {message: MESSAGES.RELATORIO_NOT_FOUND};
    }

    static findRelatorioByGrupo(grupo) {
      const relatorios = RelatorioService.getAllRelatorios()
              .filter(r => r.grupo === grupo.toUpperCase());
      return relatorios.length !== 0
              ? relatorios
              : {message: MESSAGES.RELATORIO_NOT_FOUND};
    }

  static findRelatorioByGrupoAndMes(grupo, mes) {
    const relatorios = RelatorioService.findRelatorioByGrupo(grupo);
    return relatorios.message !== MESSAGES.RELATORIO_NOT_FOUND
            ? relatorios.filter(r => r.mes === mes.toUpperCase())
            : {message: MESSAGES.RELATORIO_NOT_FOUND};
  }


  static relatorioToPublicador(relatorios) {
    const pioneiros = relatorios.map(relatorio => {
    const publicador           = publicadoresData.find(p => p.publicadorId === relatorio.publicadorId);
      return {
        publicadorId  : relatorio.publicadorId,
        nome: relatorio.nome,
        grupo: relatorio.grupo,
        endereco: publicador.endereco,
        contato: publicador.contato,
        nomeContatoEmergencia: publicador.nomeContatoEmergencia,
        contatoEmergencia: publicador.contatoEmergencia,
        mudou: booleanToYesNo(publicador.mudou)
      }  
    });
    // Usando filter para eliminar duplicatas
    return pioneiros.filter((pioneiro, index, self) =>
      index === self.findIndex((p) =>
      p.nome === pioneiro.nome &&
      p.grupo === pioneiro.grupo 
    ));
  }


static findRelatoriosPioneirosRegularesMes(mes) {
  const relatorio =  RelatorioService.getAllRelatorios()
                      .filter(r => r.pioneiroRegular === 'SIM' && r.mes === mes.toUpperCase());
  return relatorio.length !==0 
          ? relatorio
          : {message: MESSAGES.RELATORIO_NOT_FOUND};
}

static findRelatoriosPioneirosRegularesMesGrupo(mes, grupo) {
  const relatorios = RelatorioService.findRelatoriosPioneirosRegularesMes(mes);
  return  relatorios.message !== MESSAGES.RELATORIO_NOT_FOUND 
          ? relatorios.filter(r => r.grupo === grupo.toUpperCase())
          : {message: MESSAGES.RELATORIO_NOT_FOUND};
}

static findRelatoriosPioneirosAuxiliaresMes(mes) {
  const relatorios =  RelatorioService.getAllRelatorios()
                        .filter(r => r.pioneiroAuxiliar === 'SIM' && r.mes === mes.toUpperCase());
  return relatorios.length !== 0
          ? relatorios
          : {message: MESSAGES.RELATORIO_NOT_FOUND}
}

static findRelatoriosPioneirosAuxiliaresMesGrupo(mes, grupo) {
  const relatorios = RelatorioService.findRelatoriosPioneirosAuxiliaresMes(mes)
  return relatorios.message !== MESSAGES.RELATORIO_NOT_FOUND
          ? relatorios.filter(r => r.grupo === grupo.toUpperCase())
          : {message: MESSAGES.RELATORIO_NOT_FOUND};
}

static findRelatoriosPublicadorNaoRelatouMes(mes) {
  const relatorios = RelatorioService.getAllRelatorios()
                      .filter(r => r.participou === 'NÃO' && r.mes === mes.toUpperCase());
  return relatorios.length !== 0
          ? relatorios
          : {message: MESSAGES.RELATORIO_NOT_FOUND};
}

static findRelatoriosPublicadorNaoRelatouMesGrupo(mes,grupo) {
  const relatorios =  RelatorioService.getAllRelatorios()
                        .filter(r => r.participou === 'NÃO' && r.mes === mes.toUpperCase() && r.grupo === grupo.toUpperCase());
  return relatorios.length !== 0
  ? relatorios
  : {message: MESSAGES.RELATORIO_NOT_FOUND};
}

 // Criar Pioneiros com horas atrasadas
 // publicadores ativos
 // publicadores inativos


    static addRelatorio(novoRelatorio) {
        relatoriosData.push(novoRelatorio);
        writeJSON(FILES_PATH.RELATORIOS, relatoriosData);
    }

    static removeRelatorio(publicadorId, mes, anoServico) {
        relatoriosData = relatoriosData.filter(rel => !(rel.publicadorId === publicadorId && rel.mes === mes && rel.anoServico === anoServico));
        writeJSON(FILES_PATH.RELATORIOS, relatoriosData);
    }

    static updateRelatorio(publicadorId, mes, anoServico, dadosAtualizados) {  
        const index = relatoriosData.findIndex(rel => (rel.publicadorId === publicadorId && rel.mes === mes && rel.anoServico === anoServico));    
        if (index === -1) {
          throw new Error({message: MESSAGES.RELATORIO_NOT_FOUND});
        }    
        relatoriosData[index] = {
          ...relatoriosData[index],    // Mantém as propriedades antigas
          ...dadosAtualizados  // Atualiza com os novos dados
        };    
        writeJSON(FILES_PATH.RELATORIOS, relatoriosData);
      }

}

module.exports = RelatorioService;

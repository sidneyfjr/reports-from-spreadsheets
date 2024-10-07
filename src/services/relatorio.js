const {FILES_PATH}    = require('../utils/constants');
const Relatorio     = require('../models/relatorio');
const { writeJSON } = require('../utils/fileUtils');
const {relatoriosData, gruposData, publicadoresData} = require('../utils/loadFilesData');
const booleanToYesNo = require('../utils/booleanToYesNo');

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
      return RelatorioService.getAllRelatorios()
              .filter(relatorio => relatorio.publicadorId === publicadorId);
    }

    static findRelatorioByPublicadorAndMes(publicadorId, mes) {
      return RelatorioService
              .findRelatorioByPublicador(publicadorId)
              .find(relatorio => relatorio.mes === mes.toUpperCase());
    }

    static findRelatorioByGrupo(grupo) {
      return RelatorioService.getAllRelatorios()
              .filter(relatorio => relatorio.grupo === grupo.toUpperCase());
    }

  static findRelatorioByGrupoAndMes(grupo, mes) {
    return RelatorioService.findRelatorioByGrupo(grupo)
            .filter(relatorio => relatorio.mes === mes.toUpperCase());
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

  static findPioneirosRegulares() {
    const relatoriosPioneiros = RelatorioService.getAllRelatorios().filter(r => r.pioneiroRegular === 'SIM');
    return RelatorioService.relatorioToPublicador(relatoriosPioneiros);
  }

static findPioneirosRegularesGrupo(grupo) {
  const pioneirosGrupo = RelatorioService.findPioneirosRegulares();
  return pioneirosGrupo.filter(relatorio => relatorio.grupo === grupo.toUpperCase());
}

static findPioneirosAuxiliaresMes(mes) {
  const relatoriosPioneirosAuxiliares = RelatorioService.getAllRelatorios().filter(r => r.pioneiroAuxiliar === 'SIM' && r.mes === mes.toUpperCase());
  return RelatorioService.relatorioToPublicador(relatoriosPioneirosAuxiliares);

}
static findPioneirosAuxiliaresMesGrupo(mes, grupo) {
  const relatoriosPioneirosAuxiliares = RelatorioService.getAllRelatorios()
                                          .filter(r => r.pioneiroAuxiliar === 'SIM' 
                                            && r.mes === mes.toUpperCase() 
                                            && r.grupo === grupo.toUpperCase()
                                          );

  return RelatorioService.relatorioToPublicador(relatoriosPioneirosAuxiliares);
}

static findRelatoriosPioneirosRegularesMes(mes) {
  return RelatorioService.getAllRelatorios().filter(r => r.pioneiroRegular === 'SIM' && r.mes === mes.toUpperCase());
}

static findRelatoriosPioneirosRegularesMesGrupo(mes, grupo) {
  return RelatorioService.getAllRelatorios()
          .filter(r => r.pioneiroRegular === 'SIM' && r.mes === mes.toUpperCase() && r.grupo === grupo.toUpperCase());
}

static findRelatoriosPioneirosAuxiliaresMes(mes) {
  return RelatorioService.getAllRelatorios()
    .filter(r => r.pioneiroAuxiliar === 'SIM' && r.mes === mes.toUpperCase());
}

static findRelatoriosPioneirosAuxiliaresMesGrupo(mes, grupo) {
  return RelatorioService.getAllRelatorios()
    .filter(r => r.pioneiroAuxiliar === 'SIM' && r.mes === mes.toUpperCase() && r.grupo === grupo.toUpperCase());
}

static findRelatoriosPublicadorNaoRelatouMes(mes) {
  return RelatorioService.getAllRelatorios()
    .filter(r => r.participou === 'NÃO' && r.mes === mes.toUpperCase());
}

static findRelatoriosPublicadorNaoRelatouMesGrupo(mes,grupo) {
  return RelatorioService.getAllRelatorios()
    .filter(r => r.participou === 'NÃO' && r.mes === mes.toUpperCase() && r.grupo === grupo.toUpperCase());
}

 // Criar Pioneiros com horas atrasadas
 // publicadores ativos
 // publicadores inativos


    static addRelatorio(novoRelatorio) {
        relatoriosData.push(novoRelatorio);
        writeJSON(FILES_PATH.RELATORIOS, relatoriosData);
    }

    static removeRelatorio(publicadorId, mes, anoServico) {
        const relatorioData = relatoriosData.filter(rel => !(rel.publicadorId === publicadorId && rel.mes === mes && rel.anoServico === anoServico));
        writeJSON(FILES_PATH.RELATORIOS, relatorioData);
    }

    static updateRelatorio(publicadorId, mes, anoServico, dadosAtualizados) {  
        const index = relatoriosData.findIndex(rel => (rel.publicadorId === publicadorId && rel.mes === mes && rel.anoServico === anoServico));    
        if (index === -1) {
          throw new Error('Relatório não encontrado');
        }    
        relatoriosData[index] = {
          ...relatoriosData[index],    // Mantém as propriedades antigas
          ...dadosAtualizados  // Atualiza com os novos dados
        };    
        writeJSON(FILES_PATH.RELATORIOS, relatoriosData);
      }

}

module.exports = RelatorioService;

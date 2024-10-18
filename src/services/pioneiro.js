const RelatorioService = require('./relatorio');
const {MESSAGES} = require('../../src/utils/constants');

class PioneiroService {

    static findPioneirosRegulares() {
        const pioneiros = RelatorioService.getAllRelatorios()
                            .filter(r => r.pioneiroRegular === 'SIM');
        return RelatorioService.relatorioToPublicador(pioneiros);
      }

      static findPioneirosRegularesGrupo(grupo) {
        const pioneiros = PioneiroService.findPioneirosRegulares()
                                .filter(r => r.grupo === grupo.toUpperCase());
        return pioneiros.length !== 0 
                ? pioneiros 
                : {message: MESSAGES.PIONEIRO_NOT_FOUND}
      }

      static findPioneirosAuxiliaresMes(mes) {
        const pioneiros = RelatorioService.getAllRelatorios()
                            .filter(r => r.pioneiroAuxiliar === 'SIM' && r.mes === mes.toUpperCase());
        return pioneiros.length !== 0 
                ? RelatorioService.relatorioToPublicador(pioneiros)
                : {message: MESSAGES.PIONEIRO_NOT_FOUND};
      }
      
      static findPioneirosAuxiliaresMesGrupo(mes, grupo) {
        const pioneiros = RelatorioService.getAllRelatorios()
                            .filter(r => r.pioneiroAuxiliar === 'SIM' 
                              && r.mes === mes.toUpperCase() 
                              && r.grupo === grupo.toUpperCase()
                            );
      
        return pioneiros.length !== 0 
                ? RelatorioService.relatorioToPublicador(pioneiros)
                : {message: MESSAGES.PIONEIRO_NOT_FOUND};
      }

}

module.exports = PioneiroService;
const RelatorioService = require('../../src/services/relatorio');
const {MESSAGES} = require('../../src/utils/constants');

describe('Testando Relatório Service', () => {
    test('Deve retornar todos os relatórios', () => {
        const relatorio = RelatorioService.getAllRelatorios();
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar o publicador com id 82', () => {
        const relatorio = RelatorioService.findRelatorioByPublicador(82);
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se passar id errado', () => {
        const relatorio = RelatorioService.findRelatorioByPublicador(10000);
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar o relatório do publicador 82 no mês de maio', () => {
        const relatorio = RelatorioService.findRelatorioByPublicadorAndMes(82, 'maio');
        expect(relatorio).toHaveProperty('publicadorId', 82);
    });
    test('Deve retornar mensagem de erro se passar id ou mês errado', () => {
        const relatorio = RelatorioService.findRelatorioByPublicadorAndMes(10000, 'sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os publicadoores sdo grupo Alto da Paz', () => {
        const relatorio = RelatorioService.findRelatorioByGrupo('alto da paz');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se o grupo for errado', () => {
        const relatorio = RelatorioService.findRelatorioByGrupo('sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os relatórios do grupo Alto da Paz no mês de maio', () => {
        const relatorio = RelatorioService.findRelatorioByGrupoAndMes('alto da paz', 'maio');
        expect(relatorio).toBeInstanceOf(Array);

    });
    test('Deve retornar mensagem de erro se passar grupo ou mês errado', () => {
        const relatorio = RelatorioService.findRelatorioByGrupoAndMes('sidney', 'sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os pioneiros regulares no mês de junho', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosRegularesMes('junho');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de rro se passar mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosRegularesMes('sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os relatótorios dos pioneiros regulares do grupo Alto da Paz no mês de junho', ()=> {
        const relatorio = RelatorioService.findRelatoriosPioneirosRegularesMesGrupo('junho', 'alto da paz');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de  erro se passar grupo ou mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosRegularesMesGrupo('sidney', 'sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar o relatório dos pioneiros auxiliares no mês de junho', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosAuxiliaresMes('junho');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se passar mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosAuxiliaresMes('sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os pioneros auxiliares do grupo Alto da Paz no mês de junho', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosAuxiliaresMesGrupo('junho', 'alto da paz');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se passar grupo ou mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPioneirosAuxiliaresMesGrupo('sidney', 'sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os pulicadores que não relataram no mês de maio', () => {
        const relatorio = RelatorioService.findRelatoriosPublicadorNaoRelatouMes('maio');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se passar o mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPublicadorNaoRelatouMes('sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('Deve retornar os publicadores que não relataram no mês de maio no grupo alto da paz', () => {
        const relatorio = RelatorioService.findRelatoriosPublicadorNaoRelatouMesGrupo('maio','alto da paz');
        expect(relatorio).toBeInstanceOf(Array);
    });
    test('Deve retornar mensagem de erro se passar grupo ou mês errado', () => {
        const relatorio = RelatorioService.findRelatoriosPublicadorNaoRelatouMesGrupo('sidney', 'sidney');
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
    test('deve adicionar um novo relatório', () => {
        const novoRelatorio = {
            "publicadorId": 4000,
            "mes": 9,
            "anoServico": 2024,
            "participou": 1,
            "estudos": 0,
            "horas": 10,
            "pioneiroAuxiliar": 0,
            "pioneiroRegular": 0,
            "grupoId": 1
        }
        RelatorioService.addRelatorio(novoRelatorio);
        const relatorio = RelatorioService.findRelatorioByPublicador(4000);
        expect(relatorio).toBeDefined();
    });
    test('Deve atualizar o relatório do publicador 4000 no mês 9', () => {
        const updateRelatorio = {
            "publicadorId": 4000,
            "mes": 9,
            "anoServico": 2024,
            "participou": 1,
            "estudos": 2,
            "horas": 10,
            "pioneiroAuxiliar": 0,
            "pioneiroRegular": 0,
            "grupoId": 1
          }
        RelatorioService.updateRelatorio(4000,9,2024,updateRelatorio);
        const relatorio = RelatorioService.findRelatorioByPublicador(4000);
        expect(relatorio).toBeDefined();
    });
    test('Deve remover o relatório do publicador com id 4000 no mês 9', () => {
        RelatorioService.removeRelatorio(4000,9,2024);
        const relatorio = RelatorioService.findRelatorioByPublicador(4000);
        expect(relatorio).toHaveProperty('message', MESSAGES.RELATORIO_NOT_FOUND);
    });
});
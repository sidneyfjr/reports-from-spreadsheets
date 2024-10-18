const PioneiroService = require('../../src/services/pioneiro');
const {MESSAGES} = require('../../src/utils/constants');

describe('Testando o Pioneiro service', () => {

    test('Deve retornar todos os pioneiros regulares', () => {
        const pioneiros = PioneiroService.findPioneirosRegulares();
        expect(pioneiros).toBeInstanceOf(Array);
    });

    test('Deve retornar os pioneiros regulares do grupo Alto da Paz', () => {
        const pioneiros = PioneiroService.findPioneirosRegularesGrupo('alto da paz');
        expect(pioneiros).toBeInstanceOf(Array);
    });
    
    test('Deve retornar mensagem de erro ao passar grupo errado', () => {
        const pioneiros = PioneiroService.findPioneirosRegularesGrupo('sidney');
        expect(pioneiros).toHaveProperty('message', MESSAGES.PIONEIRO_NOT_FOUND);
    });
    
    test('Deve retornar os pioneiros auxiliares do mês de maio', () => {
        const pioneiros = PioneiroService.findPioneirosAuxiliaresMes('maio');
        expect(pioneiros).toBeInstanceOf(Array);
    });
    
    test('Deve retornar mensagem de erro ao passar o mês errado', () => {
        const pioneiros = PioneiroService.findPioneirosAuxiliaresMes('sidney');
        expect(pioneiros).toHaveProperty('message', MESSAGES.PIONEIRO_NOT_FOUND);
    })
    
    test('Deve retornar os pioneiros auxiliares do grupo do Alto da Paz no mês de maio', () => {
        const pioneiros = PioneiroService.findPioneirosAuxiliaresMesGrupo('maio', 'alto da paz');
        expect(pioneiros).toBeInstanceOf(Array);
    });
    
    test('Deve retornar mensagem de erro ao passar grupo ou mês errado', () => {
        const pioneiros = PioneiroService.findPioneirosAuxiliaresMesGrupo('maio2', 'alto da paz2');
        expect(pioneiros).toHaveProperty('message', MESSAGES.PIONEIRO_NOT_FOUND);      
    });

});
const PublicadorService = require('./../../src/services/publicador');
const {MESSAGES} = require('./../../src/utils/constants');

describe('Testando o publicador service', () => {

    test('Deve retornar todos os publicadores', () => {
        const publicadores = PublicadorService.getAllPublicadores();
        expect(publicadores).toBeInstanceOf(Array);
    });

    test('Deve retornar o publicador com id 82', () => {
        const publicador = PublicadorService.getPublicadorById(82);
        expect(publicador).toHaveProperty('publicadorId',82);
    });
    
    test('Deve retornar mensagem de publicador não encontrado ao passar id errado', () => {
        const publicador = PublicadorService.getPublicadorById(10000);
        expect(publicador).toHaveProperty('message', MESSAGES.PUBLICADOR_NOT_FOUND);
    });

    test('Deve retornar os publicadores do grupo Alto da Paz', () => {
        const publicador = PublicadorService.getPublicadorByGrupo('alto da paz');
        expect(publicador).toBeInstanceOf(Array);
    });
    
    test('Deve retornar mensagem de publicador não encontrado ao passar grupo errado', () => {
        const publicador = PublicadorService.getPublicadorByGrupo('sidney');
        expect(publicador).toHaveProperty('message', MESSAGES.PUBLICADOR_NOT_FOUND);
    })

    test('Deve adicionar um novo publicador com id 4000', () => {
        const novoPublicador = {
            publicadorId: 4000,
            nome: "Manuel Lopes de Almeida",
            grupoId: 1,
            endereco: "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
            contato: "85 98888-7777",
            nomeContatoEmergencia: "Ricardo",
            contatoEmergencia: "85 97777-6666",
            mudou:0
        };
        PublicadorService.addPublicador(novoPublicador);
        const publicador = PublicadorService.getPublicadorById(4000)
        expect(publicador).toBeDefined();
    });

    test('Deve atualizar o publicador de id 4000', () => {
        const updateNovoPublicador = {
        publicadorId: 4000,
        nome: "Manuel Lopes de Almeida Neto",
        grupoId: 1,
        endereco: "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
        contato: "85 98888-7777",
        nomeContatoEmergencia: "Ricardo",
        contatoEmergencia: "85 97777-6666",
        mudou:0
    };
        PublicadorService.updatePublicador(4000, updateNovoPublicador);
        const publicador = PublicadorService.getPublicadorById(4000)
        expect(publicador).toBeDefined();
    });

    test('Deve remover o publicador com id 4000', () => {
        PublicadorService.removePublicador(4000);
        const publicador = PublicadorService.getPublicadorById(4000);
        expect(publicador).toHaveProperty('message', MESSAGES.PUBLICADOR_NOT_FOUND);
    });

});
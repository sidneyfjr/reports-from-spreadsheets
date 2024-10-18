const GrupoService = require('../../src/services/grupo');
const {MESSAGES} = require('../../src/utils/constants');

describe('Testando o Grupo Service', () => {

    test('Deve retornar todos os grupos', () => {
        const grupos = GrupoService.getAllGrupos();
        expect(grupos).toBeInstanceOf(Array);
    });

    test('Deve retornar grupo com id 1', () => {
        const grupos = GrupoService.getGrupoById(1);
        expect(grupos).toHaveProperty('grupoId',1);
    });

    test('Deve retornar mensagem de grupo não encontrado ao passar id errado', () => {
        const grupos = GrupoService.getGrupoById(10000);
        expect(grupos).toHaveProperty('message', MESSAGES.GROUP_NOT_FOUND);
    });

    test('Deve adicionar um novo grupo', () => {
        const newGrupo = {
            "grupoId": 6,
            "grupo": "TESTE",
            "dirigenteId": 82,
            "ajudanteId": 25
        };
        GrupoService.addGrupo(newGrupo);
        const grupos = GrupoService.getGrupoById(6);
        expect(grupos).toBeDefined();

    });

    test('Deve atualizar o grupo com o id 6', () => {
        const updatedGroup = {
            "grupoId": 6,
            "grupo": "NOVO TESTE NOVO",
            "dirigenteId": 82, 
            "ajudanteId": 25
        }
        GrupoService.updateGrupo(6, updatedGroup);
        const grupos = GrupoService.getGrupoById(6);
        expect(grupos).toBeDefined();
    });

    test('Deve remover o grupo com id 6', () => {
        GrupoService.removeGrupo(6);
        const grupos = GrupoService.getGrupoById(6);
        expect(grupos).toHaveProperty('message', MESSAGES.GROUP_NOT_FOUND);
    });

});
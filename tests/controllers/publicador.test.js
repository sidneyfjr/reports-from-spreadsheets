const request = require('supertest');
const app = require('../../src/app');
const {MESSAGES} = require('../../src/utils/constants');
const apiKey = process.env.API_KEY; 

describe('Testando a API de publicador', () => {


    test('Deve retornar todos os publicadores', async () => {
        const res   =   await request(app).get('/congregacao/api/v1/publicadores/all').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array); 
    });

    test('Deve retornar o publicador com o id 82', async () => {
        const res   =   await request(app).get('/congregacao/api/v1/publicadores/publicador/82').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('publicadorId',82);
    });

    test('Deve retornar o publicador por grupo', async () => {
        const res = await request(app).get('/congregacao/api/v1/publicadores/grupo/alto da paz').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve adicionar um novo publicador', async () => {
        const newPublicador = {
            "publicadorId": 4000,
            "nome": "Manuel Lopes de Almeida",
            "grupoId": 1,
            "endereco": "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
            "contato": "85 98888-7777",
            "nomeContatoEmergencia": "Ricardo",
            "contatoEmergencia": "85 97777-6666",
            "mudou":0
        }
        const res = await request(app)
        .post('/congregacao/api/v1/publicadores/publicador/new')
        .send(newPublicador)
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.PUBLICADOR_ADDED_SUCCESS);
    });

    test('Deve atualizar o publicador com id 4000', async () =>{
        const updatePublicador = {
            "publicadorId": 4000,
            "nome": "Manuel Lopes de Almeida Neto",
            "grupoId": 1,
            "endereco": "Rua Doutor Manoel Rodrigues Monteiro, 705, Vicente Pinzón, Fortaleza, CE.",
            "contato": "85 98888-7777",
            "nomeContatoEmergencia": "Ricardo",
            "contatoEmergencia": "85 97777-6666",
            "mudou":0
        }
        const res = await request(app)
        .put('/congregacao/api/v1/publicadores/publicador/update')
        .send(updatePublicador)
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.PUBLICADOR_UPDATED_SUCCESS);
    });

    test('Deve remover publicador com id 4000', async () => {
        const res = await request(app)
        .delete('/congregacao/api/v1/publicadores/remove/4000')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.PUBLICADOR_REMOVED_SUCCESS);
    });

});
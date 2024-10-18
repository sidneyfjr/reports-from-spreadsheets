const request = require('supertest');
const app     = require('../../src/app');
const {MESSAGES} = require('../../src/utils/constants');
const apiKey = process.env.API_KEY; 


describe('Testando API grupos', () => {

    test('Deve retornar todos os grupos', async () => { 
        const res = await request(app).get('/congregacao/api/v1/grupos/all').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    
    test('Deve retornar o grupo com id 1', async () => {
        const res = await request(app).get('/congregacao/api/v1/grupos/grupo/1').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('grupoId',1);
    });

    test('Deve adicionar um novo grupo', async () =>{
        const newGrupo = {
            "grupoId": 6,
            "grupo": "TESTE",
            "dirigenteId": 82,
            "ajudanteId": 25
        }
        const res = await request(app)
        .post('/congregacao/api/v1/grupos/grupo/new')
        .send(newGrupo)
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.GROUP_ADDED_SUCCESS);
    });

    test('Deve atualizar o grupo com id 6', async() => {
        const updatedGroup = {
            "grupoId": 6,
            "grupo": "NOVO TESTE NOVO",
            "dirigenteId": 82,
            "ajudanteId": 25
        }
        const res = await request(app)
        .put('/congregacao/api/v1/grupos/grupo/update')
        .send(updatedGroup)
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.GROUP_UPDATED_SUCCESS);
    });

    test('Deve remover o grupo com id 6', async () => {
        const res = await request(app).delete('/congregacao/api/v1/grupos/remove/6').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.GROUP_REMOVED_SUCCESS);
    });

});


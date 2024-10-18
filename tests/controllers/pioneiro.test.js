const request = require('supertest');
const app     = require('../../src/app');
const apiKey = process.env.API_KEY; 

describe('Testando a API de pioneiro',  () => {
    test('Deve retornar todos os pioneiros', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/pioneiros/regulares/all')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    test('Deve retornar os pioneiros por grupo', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/pioneiros/regulares/grupo/alto da paz')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    test('deve retornar os pioneiros auxiliares o mês de maio', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/pioneiros/auxiliares/mes/maio')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    })
    test('Deve retornar os pioneiros do mês de maio do grupo Alto da Paz', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/pioneiros/auxiliares/mes/maio/grupo/alto da paz')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

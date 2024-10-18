const request   =   require('supertest');
const app       =   require('../../src/app');
const {MESSAGES} = require('../../src/utils/constants');
const apiKey = process.env.API_KEY; 

describe('Testando a API de relatórios', () => {

    test('Deve retornar todos os relatórios', async () => {
        const res = await request(app).get('/congregacao/api/v1/relatorios/all').set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array); 

    });
    
    test('Deve retornar os relatórios do publicador com id 82', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/publicador/82')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
    
    test('Deve retornar o relatório do publicador com id 82 no mês de maio', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/publicador/82/mes/maio')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('publicadorId',82);
    });

    test('Deve retornar os relatórios do Grupo alto da Paz', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/grupo/alto da paz')
        .set('api-key',apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
         
    });

    test('Deve trazer os relatórios do grupo Alto da Paz no mês de maio', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/grupo/alto da paz/mes/maio')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os pioneiros regulares do mês de junho', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/pioneiros/regular/mes/junho')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os pioneiros regulares de junho no grupo Alto da Paz', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/pioneiros/regular/mes/junho/grupo/alto da paz')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os pioneiros auxiliares do mês de junho', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/pioneiros/auxiliar/mes/junho')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os pioneiros auxiliares no mês de junho do grupo Alto da Paz', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/pioneiros/auxiliar/mes/junho/grupo/alto da paz')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os publicadores  no mês de maio', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/publicador/nao-relatou/maio')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    test('Deve retornar os publicadores que não relataram no mês de maio do grupo Alto da Paz', async () => {
        const res = await request(app)
        .get('/congregacao/api/v1/relatorios/publicador/nao-relatou/mes/maio/grupo/alto da paz')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);

    });

    test('Deve adicionar um novo relatório', async () => {
        const newRelatorio = {
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
        const res = await request(app)
        .post('/congregacao/api/v1/relatorios/new')
        .send(newRelatorio)
        .set('api-key', apiKey);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.RELATORIO_ADDED_SUCCESS);
    });

    test('Deve atualizar o relatório do publicador com id 4000 no mês 9 e no ano 2024', async () => {
        const updateRelatório = {
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
        const res = await request(app)
        .put('/congregacao/api/v1/relatorios/update')
        .send(updateRelatório)
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.RELATORIO_UPDATED_SUCCESS);
    });

    test('Deve remover o relatório do publicador com id 4000 no mês 9 e no ano 2024', async () => {
        const res = await request(app)
        .delete('/congregacao/api/v1/relatorios/remove/4000/mes/9/ano/2024')
        .set('api-key', apiKey);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', MESSAGES.RELATORIO_REMOVED_SUCCESS);
    });

});

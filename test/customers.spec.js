require('dotenv/config')
const request = require('supertest');
const { getAccesToken } = require('../utils/request');
const API_URL = process.env.API_URL
const contrato = require('./customers.contract')
describe('Recurso de Clientes', () => {
  let token

  beforeAll(async () => {
    token = await getAccesToken('admin', 'admin')
  })
  it('(Contract) Deve validar contratos de clientes', async () => {
    await request(API_URL)
      .get('/addresses')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

      .then(response => {
        return contrato.validateAsync(response.body)

      })
  });
  it('(HealthCeck) Deve listar clientes', async () => {
    await request(API_URL)
      .get('/customers')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

      .then(response => {
        expect(response.statusCode).toEqual(200)
        expect(response.body).toBeInstanceOf(Array)
      })
  });
});
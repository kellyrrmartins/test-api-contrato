require('dotenv/config')
const request = require('supertest');
const { getAccesToken } = require('../utils/request');
const API_URL = process.env.API_URL

describe('Recurso de Clientes', () => {
  let token

  beforeAll(async () => {
    token = await getAccesToken('admin', 'admin')
  })

  it('Deve listar clientes', async () => {
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
const request = require('supertest')

let getAccesToken = (user, pass) => {
  return request('http://localhost:3000/api')
    .post('/login')
    .send({
      "username": user,
      "password": pass
    })
    .set('Accept', 'application/json')
    .then(response => {
      return response.body.accessToken

    })

}

module.exports = { getAccesToken }
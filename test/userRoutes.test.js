const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server'); // Assurez-vous que server.js exporte app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Tests d\'intégration des routes utilisateurs', () => {
  it('GET /users doit retourner un tableau', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });
});

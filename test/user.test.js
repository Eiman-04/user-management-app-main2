// test/user.test.js
const chai = require('chai');
const expect = chai.expect;

describe('Exemple de test unitaire', () => {
  it('devrait retourner vrai si 2 + 2 = 4', () => {
    const result = 2 + 2;
    expect(result).to.equal(4);
  });
});

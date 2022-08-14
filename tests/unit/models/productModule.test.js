const { expect } = require('chai');
const { describe } = require('mocha');
const Sinon = require('sinon');
const connection = require('../../../models/connection');

const productModel = require('../../../models/productModel');

describe('Testa se o model.getAll retorna um array de objetos com id e name', () => {
  describe('Caso OK', () => {
    // before(()=>{
    //   const resultExecute = []
    //   Sinon.stub(connection, 'execute').resolves([resultExecute]);
    // })
    afterEach(() => {
      // connection.execute.restore();
      Sinon.restore();
    })
    it('retorna array', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await productModel.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async function () {
      // AAA - ARRANGE - ACT - ASSERT
      const resultExecute = [];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await productModel.getAll();

      expect(resultado).to.be.empty;
    });
    it('Retorna array cheio', async () => {
      const resultExecute = [{ id: 1, name: 'teste' }];
      Sinon.stub(connection, 'execute').resolves([resultExecute]);

      const resultado = await productModel.getAll();

      expect(resultado).to.be.not.empty;
    });
  });
});
describe('Testa se o model.Create retorna um array de objetos com id e name', async () => {
  it('Retorna array cheio', async () => {
    const name = 'teste';
    const resultExecute = [{ id: 1, name: 'teste' }];
    Sinon.stub(connection, 'execute').resolves([resultExecute]);
      
    const resultado = await productModel.create(name);
    expect(resultado).to.be.an('array');
    expect(resultado).to.be.not.empty;
  });
  it('Retorna array cheio', async () => {
    const name = 'teste';
    const resultExecute = [{ id: 1, name: 'teste' }];
    Sinon.stub(connection, 'execute').resolves([resultExecute]);

    const resultado = await productModel.create(name);
    expect(resultado).to.be.an('array');
    expect(response).to.have.a.property('id');
  });
});


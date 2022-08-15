const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const productModel = require('../../../models/productModel');

describe('Testa se o model.getAll retorna um array de objetos com id e name', () => {
  describe('Caso OK', () => {
 
    before(() => {
      const resultExecute = [[{
        "id": 1,
        "name": "Martelo de Thor",
      }],
      [],
      ];
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    afterEach(() => {
      
      Sinon.restore();
    })
    it('retorna array', async () => {
      // AAA - ARRANGE - ACT - ASSERT  
      const resultado = await productModel.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array populado', async () => {
      // AAA - ARRANGE - ACT - ASSERT    
      const resultado = await productModel.getAll();

      expect(resultado).to.be.not.empty;
    });
    it('Retorna array contendo objeto', async () => {
      // const resultExecute = [{ id: 1, name: 'teste' }];
      const resultado = await productModel.getAll();
      expect(resultado[0]).to.be.an('object');
    });
    it('Retorna array contendo objeto com id e name', async () => {
      const resultado = await productModel.getAll();
      expect(resultado[0]).to.have.property('id');
      expect(resultado[0]).to.have.property('name');
    });
  });
  describe('Caso retorne um erro ', () => {

    before(() => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    afterEach(() => {

      Sinon.restore();
    })
    it('retorna array', async () => {
      // AAA - ARRANGE - ACT - ASSERT  
      const resultado = await productModel.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async () => {
      // AAA - ARRANGE - ACT - ASSERT    
      const resultado = await productModel.getAll();

      expect(resultado).to.be.empty;
    });
  });
});
  

describe('Testa se o model.findById retorna um array de objetos com o id indicado no e-mail ', async () => {
  describe('Caso o id seja encontrado', () => {

    before(() => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    afterEach(() => {

      Sinon.restore();
    })

    it('Retorna array cheio', async () => {
      const resultado = await productModel.findById(1);
      expect(resultado).to.be.an('array');
    });

    it('Retorna array cheio', async () => {
      const resultado = await productModel.findById(1);
      expect(resultado).to.be.not.empty;

    });
    it('Retorna um id', async () => {
      const resultado = await productModel.findById(1);
      expect(resultado).to.have.a.property('id');
    });
  });

  describe('Caso o id não seja encontrado', () => {

    before(() => {
      const resultExecute = [];
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    afterEach(() => {

      Sinon.restore();
    })

    it('Retorna array cheio', async () => {
      const resultado = await productModel.findById(99);
      expect(resultado).to.be.an('array');
    });

    it('Retorna array cheio', async () => {
      const resultado = await productModel.findById(1);
      expect(resultado).to.be.empty;

    });
   });
});

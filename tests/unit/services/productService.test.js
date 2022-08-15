const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productModel = require('../../../models/productModel');
const productService = require('../../../services/productService');

describe('Testa se o model.getAll retorna um array de objetos com id e name', () => {
  describe('Caso OK', () => {
 
    before(() => {
      const resultExecute = [[{
        "id": 1,
        "name": "Martelo de Thor",
      }],
      [],
      ];
      sinon.stub(productModel, 'getAll').resolves(resultExecute);
    })

    after(() => {
      
      sinon.restore();
    })
    it('retorna array', async () => {
      // AAA - ARRANGE - ACT - ASSERT  
      const resultado = await productService.getAll();

      expect(resultado).to.be.an('array');
    });
    it('retorna array populado', async () => {
      // AAA - ARRANGE - ACT - ASSERT    
      const resultado = await productService.getAll();    

      expect(resultado).to.be.not.empty;
    });
    it('Retorna array contendo objeto', async () => {
      // const resultExecute = [{ id: 1, name: 'teste' }];
      const resultado = await productService.getAll();    
      expect(resultado[0][0]).to.be.an('object');
    });
    it('Retorna array contendo objeto com id e name', async () => {
      const resultado = await productService.getAll();
      expect(resultado[0][0]).to.have.property('id');
      expect(resultado[0][0]).to.have.property('name');
    });
  });
  describe('Caso retorne um erro ', () => {

    before(() => {
      const resultExecute = [];
      sinon.stub(productModel, 'getAll').resolves(resultExecute);
    })

    after(() => {

      sinon.restore();
    })
    it('retorna array', async () => {
      // AAA - ARRANGE - ACT - ASSERT  
      const resultado = await productService.getAll();    

      expect(resultado).to.be.an('array');
    });
    it('retorna array vazio', async () => {
      // AAA - ARRANGE - ACT - ASSERT    
      const resultado = await productService.getAll();    

      expect(resultado).to.be.empty;
    });
  });
});
  

describe('Testa se o model.findById retorna um array de objetos com o id ', async () => {
  describe('Caso o id seja encontrado', () => {

    before(() => {
      const resultExecute = [[{
        "id": 1,
        "name": "Martelo de Thor",
      }],
      [],
      ];
      sinon.stub(productModel, 'findByID').resolves(resultExecute);
    })

    after(() => {

      sinon.restore();
    })

    it('Retorna array cheio', async () => {
      const resultado = await productService.findByID(1);
      expect(resultado[0][0]).to.be.an('object');
    });

    it('Retorna array cheio', async () => {
      const resultado = await productService.findByID(1);
      expect(resultado[0][0]).to.be.not.empty;

    });
    it('Retorna um id', async () => {
      const resultado = await productService.findByID(1);
      expect(resultado[0][0]).to.have.a.property('id');
    });
  });

  // describe('Caso o id não seja encontrado', () => {

  //   before(() => {
  //     const resultExecute = [[]];
  //     sinon.stub(productModel, 'getAll').resolves(resultExecute);
  //   })

  //   after(() => {

  //     sinon.restore();
  //   })

  //   it('Retorna array cheio', async () => {
  //     const resultado = await productModel.findByID(99);
  //     expect(resultado).to.be.false;
  //   });

    // it('Retorna array cheio', async () => {
    //   const resultado = await productModel.findByID(1);
    //   expect(resultado).to.be.empty;

    // });
  //  });
});

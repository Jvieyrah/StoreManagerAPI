const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');

describe('Testa se o model.getAll', () => {
  describe('Caso OK', () => {
    const response = {};
    const request = {};
 
    before(() => {
      request.body = {}
      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productService, 'getAll').resolves(true);
    })

    after(() => {
      
      sinon.restore();
    })
    it('retorna array', async () => {
      // AAA - ARRANGE - ACT - ASSERT  
      await productController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });
  });
});
  
 describe('Testa se o model.findById retorna um array de objetos com o id ', async () => {
  describe('Caso o id seja encontrado', () => {
    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 1,
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productService, 'findByID').resolves([{
        "id": 1,
        "name": "Martelo de Thor",
      }]);
    })

    after(() => {

      sinon.restore();
    })

    it('Retorna status 200 ', async () => {
      await productController.findByID(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    // it('Retorna json', async () => {
    //   await productController.findByID(request, response);
    //   expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);

    // });
  });
});

  describe('Caso o id não seja encontrado', () => {

    const response = {};
    const request = {};

    before(() => {
      request.params = {
        id: 99,
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productService, 'findByID').resolves(null);
    })

    after(() => {

      sinon.restore();
    })

    it('é chamado o método "status" passando 404', async () => {
      await productController.findByID(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

  //   it('passando a mensagem "Not Found', async () => {
  //     await productController.findByID(request, response);
  //     expect(response.json.calledWith('Not Product not found')).to.be.equal(true);
  //   });
  //  });
});
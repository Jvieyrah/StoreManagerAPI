const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const salesService = require('../../../services/salesService');
const salesController = require('../../../controllers/salesController');

describe('SalesControler repassa uma nova venda para o model', () => {

    describe('quando é inserido com sucesso', () => {
      it('deve retornar o id da venda junto a um objeto com itemSold', async () => {

    const response = {};
        const request = {};
        before(() => {
          request.body = [{ productId: 1, quantity: 1 }];
          response.status = sinon.stub().returns(response);
          response.json = sinon.stub().returns();
          sinon.stub(salesService, 'create').resolves(
            [{ productId: 1, quantity: 1 }]);
        }),
          after(() => {
            sinon.restore();
          }),
          it('deve retornar o id da venda junto a um objeto com itemSold', async () => {
            await salesController.create(request, response);
            expect(response.status.calledWith(201)).to.be.true;
            expect(response.json.calledWith([{ id: 1, itemsSold: [{ productId: 1, quantity: 1 }] }])).to.be.true;
          }).timeout(5000);
      }).timeout(5000);
    });
  
  describe('Retorna todas as vendas', () => {
    describe('quando é retornado com sucesso', () => {
      const response = {};
      const request = {};

      before(() => {
        request.body = {}
        response.status = sinon.stub()
          .returns(response);
        response.json = sinon.stub()
          .returns();

        sinon.stub(salesService, 'getAll').resolves(true);
      })
      after(() => {
        sinon.restore();
      }),
      it('deve retornar um array de objetos com todas as vendas', async () => {
        await salesController.getAll(request, response);
        expect(response.status.calledWith(200)).to.be.true;
      }).timeout(5000);
    }).timeout(5000);
  }).timeout(5000); 

  describe('Retorna uma venda pelo id', () => {
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

      sinon.stub(salesService, 'findByID').resolves([{
        "id": 1,
        "name": "Martelo de Thor",
      }]);
    })
    after(() => {     
      sinon.restore();
    }),
      it('deve retornar um objeto com o id e o itemSold', async () => {
        await salesController.getById(request, response);  
        expect(response.status.calledWith(200)).to.be.true;
        expect(response.json.calledWith([{ id: 1, itemsSold: [{ productId: 1, quantity: 1 }] }])).to.be.true;
      }).timeout(5000);
  }).timeout(5000); 
}).timeout(5000);

  // describe('Caso o name não seja informado', () => {

  //   const response = {};
  //   const request = {};

  //   before(() => {
  //     request.body = {
  //       name: '',
  //     };

  //     response.status = sinon.stub()
  //       .returns(response);
  //     response.json = sinon.stub()
  //       .returns();

  //     sinon.stub(productService, 'create').resolves(null);
  //   });
  //   after(() => {

  //     sinon.restore();
  //   });
  //   it('é chamado o método "status" passando 400', async () => {
  //     await salesController.create(request, response);
  //     expect(response.status.calledWith(400)).to.be.equal(true);
  //   });
  // });
  // describe('Caso o name seja informado com menos de 5 letras', () => {
      
  //     const response = {};
  //     const request = {};
  
  //     before(() => {
  //       request.body = {
  //         name: 'test',
  //       };
  
  //       response.status = sinon.stub()
  //         .returns(response);
  //       response.json = sinon.stub()
  //         .returns();
  
  //       sinon.stub(productService, 'create').resolves(null);
  //     }).after(() => {
  
  //       sinon.restore();
  //     });
  //     it('é chamado o método "status" passando 422', async () => {
  //       await salesController.create(request, response);
  //       expect(response.status.calledWith(400)).to.be.equal(true);
  //     }).after(() => {
  //       sinon.restore();
  //     }
  //     it('é chamado o método "status" passando 400', async () => {
  //       await salesController.create(request, response);
  //       expect(response.status.calledWith(400)).to.be.equal(true);
  //     }).after(() => {
  //       sinon.restore();
  //     }
  //     it('é chamado o método "status" passando 400', async () => {
  //       await salesController.create(request, response);
  //       expect(response.status.calledWith(400)).to.be.equal(true);
  //     }).after(() => {
  //       sinon.restore();
  //     }
  //     it('é chamado o método "status" passando 400', async () => {
  //       await salesController.create(request, response);
  //       expect(response.status.calledWith(400)).to.be.equal(true);
  //     }).after(() => {
  //       sinon.restore();
  //     }
  //     it('é chamado o método "status" passando 400', async () => {
  //       await salesController.create(request, response);
  //       expect(response.status.calledWith(400)).to.be.equal(true);
  //     }).after(() => {
  //       sinon.restore();
  //     }
  //     it('
//
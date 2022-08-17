const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const salesModel = require('../../../models/salesModel');
const salesService = require('../../../services/salesService');

describe('SalesService repassa uma nova venda para o model', () => {
  afterEach(() => {
    sinon.restore();
  }),
    describe('quando é inserido com sucesso', () => {
      it('deve retornar o id da venda junto a um objeto com itemSold', async () => {
        const products = [{ productId: 1, quantity: 1 }];
        sinon.stub(salesModel, 'createSales').resolves(products);
        const result = await salesService.create(products);
        expect(result).to.have.a.property('id');
        expect(result).to.have.a.property('itemsSold');
      }).timeout(5000);
    });
  
  describe('Retorna todas as vendas', () => {
    afterEach(() => {
      sinon.restore();
    }),
      describe('quando é retornado com sucesso', () => {
        it('deve retornar um array de objetos com todas as vendas', async () => {
          const sales = [{ saleId: 1, productId: 1, quantity: 1 }];
          sinon.stub(salesModel, 'getAll').resolves(sales);
          const result = await salesService.getAll();
          expect(result).to.be.an('array');
          expect(result[0]).to.have.a.property('saleId');
          expect(result[0]).to.have.a.property('productId');
        }).timeout(5000);
      });
  });

  describe('Retorna uma venda pelo id', () => {
    afterEach(() => {
      sinon.restore();
    }),
      describe('quando é retornado com sucesso', () => {
        it('deve retornar um objeto com a venda', async () => {
          const sale = [{ saleId: 1, productId: 1, quantity: 1 }];
          sinon.stub(salesModel, 'getById').resolves(sale);
          const result = await salesService.getById(1);
          expect(result).to.be.an('array');
          expect(result[0]).not.to.have.a.property('saleId');
          expect(result[0]).to.have.a.property('productId');
          expect(result[0]).to.have.a.property('quantity');
        }).timeout(5000);
      });
  });
}).timeout(5000);
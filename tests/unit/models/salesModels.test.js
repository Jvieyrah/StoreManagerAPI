const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const salesModel = require('../../../models/salesModel');


describe('Insere uma nova venda no DB', () => { 
  afterEach(() => {
    sinon.restore();
  }),
  describe('quando é inserido com sucesso', () => {

    it('deve retornar o id da venda junto a um objeto com itemSold', async () => {
      const products = [{ productId: 1, quantity: 1 }];
      sinon.stub(connection, 'execute').resolves(products);
      const result = await salesModel.createSales(products);
      expect(result).to.have.a.property('id');
      expect(result).to.have.a.property('itemsSold');      
    }).timeout(5000);
  });
});

describe('Retorna todas as vendas', () => {
  afterEach(() => {
    sinon.restore();
  }),
    describe('quando é retornado com sucesso', () => {
      it('deve retornar um array de objetos com todas as vendas', async () => {
        const sales = [{ saleId: 1, productId: 1, quantity: 1 }];
        sinon.stub(connection, 'execute').resolves(sales);
        const result = await salesModel.getAll();
        expect(result).to.be.an('object');
        expect(result).to.have.a.property('saleId');
        expect(result).to.have.a.property('productId');
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
        sinon.stub(connection, 'execute').resolves(sale);
        const result = await salesModel.getById(1);
        expect(result).to.be.an('object');
        expect(result).to.have.a.property('productId');
        expect(result).to.have.a.property('quantity');
      }).timeout(5000);
    });
});
  


// describe('Testa se o model.getAll retorna um array de objetos com id e name', () => {
//   describe('Caso OK', () => {
 
//     before(() => {
//       const resultExecute = [
//         {
//           "saleId": 1,
//           "date": "2021-09-09T04:54:29.000Z",
//           "productId": 1,
//           "quantity": 2
//         },
//         {
//           "saleId": 1,
//           "date": "2021-09-09T04:54:54.000Z",
//           "productId": 2,
//           "quantity": 2
//         }
//       ]
//       sinon.stub(connection, 'execute').resolves(resultExecute);
//     })

//     after(() => {
      
//       sinon.restore();
//     })
//     it('retorna array', async () => {
//       // AAA - ARRANGE - ACT - ASSERT  
//       const resultado = await salesModel.getAll();

//       expect(resultado).to.be.an('array');
//     });
//     it('retorna array populado', async () => {
//       // AAA - ARRANGE - ACT - ASSERT    
//       const resultado = await salesModel.getAll();

//       expect(resultado).to.be.not.empty;
//     });
//     it('Retorna array contendo objeto', async () => {
//       // const resultExecute = [{ id: 1, name: 'teste' }];
//       const resultado = await salesModel.getAll();
//       expect(resultado[0]).to.be.an('object');
//     });
//     it('Retorna array contendo objeto com id e name', async () => {
//       const resultado = await salesModel.getAll();
//       expect(resultado[0]).to.have.property('saleId');
//       expect(resultado[0]).to.have.property('quantity');
//     });
//   });
//   describe('Caso retorne um erro ', () => {

//     before(() => {
//       const resultExecute = [[]];
//       sinon.stub(connection, 'execute').resolves(resultExecute);
//     })

//     after(() => {

//       sinon.restore();
//     })
//     it('retorna array', async () => {
//       // AAA - ARRANGE - ACT - ASSERT  
//       const resultado = await salesModel.getAll();

//       expect(resultado).to.be.an('array');
//     });
//     it('retorna array vazio', async () => {
//       // AAA - ARRANGE - ACT - ASSERT    
//       const resultado = await salesModel.getAll();

//       expect(resultado).to.be.empty;
//     });
//   });
// });
  

// describe('Testa se o model.findById retorna um array de objetos com o id ', async () => {
//   describe('Caso o id seja encontrado', () => {

//     before(() => {
//       const resultExecute = [
//         {
//           "date": "2021-09-09T04:54:29.000Z",
//           "productId": 1,
//           "quantity": 2
//         },
//         {
//           "date": "2021-09-09T04:54:54.000Z",
//           "productId": 2,
//           "quantity": 2
//         }
//       ];
//       sinon.stub(connection, 'execute').resolves(resultExecute);
//     })

//     after(() => {

//       sinon.restore();
//     })

//     it('Retorna array cheio', async () => {
//       const resultado = await salesModel.findByID(1);
//       expect(resultado).to.be.an('object');
//     });

//     it('Retorna array cheio', async () => {
//       const resultado = await salesModel.findByID(1);
//       expect(resultado).to.be.not.empty;

//     });
//     it('Retorna um id', async () => {
//       const resultado = await salesModel.findByID(1);
//       expect(resultado).to.have.a.property('date');
//       expect(resultado).to.have.a.property('productId');
//       expect(resultado).to.have.a.property('quantity');
//     });
//   });
// });

// describe('Testa se o model.create retorna um array de objetos com o id ', async () => {
//   describe('Caso o id seja encontrado', () => {

//     before(() => {
//       const resultExecute = [
//         {
//           "productId": 1,
//           "quantity": 1
//         },
//         {
//           "productId": 2,
//           "quantity": 5
//         }
//       ]
//       sinon.stub(connection, 'execute').resolves(resultExecute);
//     });

//     after(() => {

//       sinon.restore();
//     })
//     it('Retorna array cheio', async () => {
//       const resultado = await salesModel.create('ProdutoZ');
//       expect(resultado).to.be.an('object');
//     }
//     );
//     it('Retorna array cheio', async () => {
//       const resultado = await salesModel.create('ProdutoZ');
//       expect(resultado).to.be.not.empty;

//     }
//     );
//     it('Retorna um id', async () => {
//       const resultado = await salesModel.create('ProdutoZ');
//       expect(resultado).to.have.a.property('id');
//     }
//     );
//   }
//   );
// });

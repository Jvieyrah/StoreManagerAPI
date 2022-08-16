const connection = require('./connection');

const createSales = async (products) => {
    try {
    const sales = `
    INSERT INTO StoreManager.sales(date)
    VALUES (now())`;

    const [result] = await connection.query(sales);

    products.forEach(async (product) => {
      const saleProducts = `INSERT INTO StoreManager.sales_products(product_id,sale_id,quantity)
      VALUES (?, ?, ?);`;
      await connection.query(saleProducts, [
        product.productId,
        result.insertId,
        product.quantity,
      ]);
    });

    return { id: result.insertId, itemsSold: products };
  } catch (error) {
    return error;
  }
};

module.exports = {
  createSales,
};
// const createSale = async () => { 
//   const query = 'INSERT INTO sales () VALUES ()';
//   const [result] = await connection.execute(query, [ userId, total ]);
//   return { id: result.insertId };
// };

// const create = async (saleId, productId, quantity) => {
//   const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?,?,?)';
//   const [result] = await connection.execute(query, [ saleId, productId, quantity ]);
//   return { id: result.insertId };
// };

// module.exports = { create, createSale };
const connection = require('./connection');

const createSales = async (products) => {
    // try {
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
  // } catch (error) {
  //   return error;
  // }
};

const getAll = async () => {
  const [result] = await connection
    .execute(`SELECT sale_id AS saleId, product_id AS productId, quantity, date
      FROM StoreManager.sales_products
      JOIN StoreManager.products
      ON StoreManager.sales_products.product_id = StoreManager.products.id
      JOIN StoreManager.sales
      ON StoreManager.sales_products.sale_id = StoreManager.sales.id; `);
  return result;
};

const getById = async (id) => {
  const [result] = await connection.execute(`SELECT product_id AS productId, quantity, date
      FROM StoreManager.sales_products
      JOIN StoreManager.products
      ON StoreManager.sales_products.product_id = StoreManager.products.id
      JOIN StoreManager.sales
      ON StoreManager.sales_products.sale_id = StoreManager.sales.id
      WHERE sale_id = ?;`, [id]);
  return result;
};

const destroy = async (id) => {
  await connection.execute(`DELETE FROM StoreManager.sales_products
      WHERE sale_id = ?;`, [id]);
  return true;
};

const update = async (id, products) => {
  products.forEach(async (product) => {
    const saleProducts = `UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? WHERE sale_id = ? AND product_id = ?;`;
    const [result] = await connection.query(saleProducts, [
      product.productId,
      product.quantity,
      id,
      product.productId,
    ]);
  });

  return { saleId: id, itemsUpdated: products };
};
  
module.exports = {
  createSales, 
  getAll,
  getById,
  destroy,
  update,
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
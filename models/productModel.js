const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products ORDER BY id');
  console.log(result);
  return result;
};

const findByID = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return result[0];
};

const create = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);
  return { id: result.insertId, name };
};

module.exports = { getAll, findByID, create };
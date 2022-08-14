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

module.exports = { getAll, findByID };
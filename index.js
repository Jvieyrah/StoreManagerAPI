const app = require('./app');
require('dotenv').config();
// const express = require('express');

// const routes = require('./routes');
// const port = 3000;
// const app = express();
// app.use(express.json());
// app.use(routes);
// app.use('/products', routes.productRoute);
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
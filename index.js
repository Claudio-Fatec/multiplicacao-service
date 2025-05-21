const express = require('express');
const app = express();
app.use(express.json());

app.post('/multiplicar', (req, res) => {
  const { a, b } = req.body;
  res.json({ resultado: a * b });
});

app.listen(3003, () => {
  console.log('Multiplicação Service rodando na porta 3003');
});
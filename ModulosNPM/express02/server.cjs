// CRIAR NOSSO SERVIDOR
const express = require("express");
const path = require("path");
const app = express();

const PORT = 3333;

// CRIAR ROTAS
app.get("/", function (req, res) {
  //NOSSO CÓDIGO VEM AQUI...
  res.send('Hello')
});

// USAR O SERVIDOR NUMA DADA PORTA
app.listen(PORT, function () {
  console.log("Rodando na porta: " + PORT);
});

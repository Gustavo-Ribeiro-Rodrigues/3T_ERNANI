const express = require('express');
const path = require('path');
const app = express(); // CRIANDO UMA INSTÂNCIA DO EXPRESS

const PORT = 3333
app.get('/', function (req, res) {
  res.send("Hello Página HOME");
});

app.get('/Sobre', function (req, res) {
  res.send("<h1>Página Sobre</h1>");
});
app.get('/LOja', function (req, res) {
  res.sendFile(path.join(__dirname,"/", 'loja.html'));
});

app.listen(PORT, function () {
  console.log('Rodando na porta: ' + PORT)
})

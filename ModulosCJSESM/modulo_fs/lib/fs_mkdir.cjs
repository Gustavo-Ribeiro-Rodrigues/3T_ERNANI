//IMPORTANT FS E PATH
const fs = require("fs");
const path = require("path");

function criarPasta(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("Errouuu: \n" + err)
  })
}
//CIAÇÃO DINÂMICA DE PASTAS
function criarPastaDinamica(nomePasta){
  try { // TENTAR EXECUTAR
    if (!fs.existsnc(path.join(__dirname, nomePasta))) {
      fs.mkdirSync(path.join(__dirname, nomePasta));
      console.log(`Pasta  ${nomePasta} criada com sucesso!`)
    } else {
      console.log(`Pasta ${nomePasta} já existe!`)
    }
  } catch (err) { // CAPTURAR UM ERRO LANÇADO
    console.log("Errouuu: :------------- \n")
    console.log("impossível criar a pasta: " + nomePasta)
    console.log("Erro: " + err)
  }
}

module.exports = { criarPasta, criarPastaDinamica }
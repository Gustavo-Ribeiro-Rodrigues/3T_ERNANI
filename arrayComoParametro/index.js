//CRIE UM ALGORITMO QUE ORGANIZE UMA LISTA
//NOMES (MÍNIMO 5) EM ORDEM ALFABÉTICA E PRIMEIRA LETRA MAIÚSCULA

// A FUNÇÃO FINAL DEVERÁ RECEBER UM ARRAY COMO PARÂMETRO E RETORNAR UM ARRAY ORGANIZADO

//ANTES DE RETORNAR, VERIFIQUE SE O VALOR RECEBIDO É UM ARRAY VÁLIDO E RETORNE UMA MENSAGEM DE ERRO CASO SEJA INVÁLIDO
//NÃO SE ESQUEÇA DE INVOAR A FUNÇÃO

//REF: W3SCHOOLS OU MDN (MOZILLA DEVELOOPER NETWORK)

const nomes = [
  "Augusto",
  "Gustavo",
  "Matheus",
  "Ana ",
  "Gabriely",
  "Beatriz",
  "LedSon",
  "Eduarda",
  "Kruger",
  "Anthony",
  "Luis",
  "Marcelo",
];

// const nome = nomes.sort();
// console.log(nome)

function organizarNomes(nomes) {
  if (!Array.isArray(nomes)) {
    return "Erro: O valor recebido não é um array válido.";
  }
  return nomes
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .sort();
}
console.log(organizarNomes(nomes));

//OPERADOR TERNÁRIO SERVE PARA
//DESVIO CONDICIONAL,ASSIM ASSIM COMO O IF/ELSE, PORÉM SUA SIXTASE SIMPLIFICADA
//PODEMOS ULTILIZAR O OPERADOR TERNÁRIO ALINHADO
//EXEMPLO:<VARIÁVEL> = CONDIÇÃO ?<VALOR_TRUE>:<VALOR_FALSE>

const idade = 18;

const cnh = idade >= 18 ? "Maiores podem dirigir" : "Proibido dirigir";
console.log(cnh);
let pessoas = [
  { nome: "Duda", sexo: "F", idade: 17 },
  { nome: "Ana", sexo: "F", idade: 17 },
  { nome: "Bia", sexo: "F", idade: 40 },
  { nome: "Gaby", sexo: "F", idade: 17 },
  { nome: "Pablo", sexo: "M", idade: 37 },
  { nome: "Madu", sexo: "F", idade: 19 },
  { nome: "Guilherme", sexo: "M", idade: 18 },
  { nome: "Gus", sexo: "M", idade: 17 },
];
let meninas = [];
let meninos = [];
for (let nome of pessoas) {
  nome.sexo == "F" ? meninas.push(nome) : meninos.push(nome);
}
console.table(meninas);
console.table(meninos);

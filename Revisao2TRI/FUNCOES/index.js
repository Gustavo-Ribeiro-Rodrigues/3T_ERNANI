//FUNÇÕES:
//DECLARAÇÃO
function dizOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log(`Olá, ${nome}`);
}
const nome = "Gaby";
const idade = 18;

function retornaDdados() {
  return `Nome: ${nome} - Idade: ${idade}`;
}

//INVOCAÇÃO
//dizOla();
// olaPessoa("Maria");
// olaPessoa("João");
// olaPessoa("Pedro");
// console.log(retornaDdados());

//FUNÇÕES PERSONALIZADAS VC FUNÇÕES NATIVAS
let salario = 1000
const intervalo1 = setInterval(function() {
  console.clear();
  salario = salario + 100;
  console.log(`Ganhei ${salario}`)
},200) //tempo ms
/*
setInterval - clearInterval
setTimeout - clearTimeout
*/
setTimeout(function() {
  console.log ("-----------");
  clearInterval(intervalo1);
  console.info("Intervalo encerrado");
}, 5000);
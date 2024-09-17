//DECLARANDO FUNÇÕES (MÓDULOS)

const nome = "Gustavo"

function olaPessoa(){
  console.log(`Olá, ${nome}`)
}
export function textoMaiusculas(texto){
  console.log(texto.toUpperCase());
}
export function textoMinusculas(texto){
  console.log(texto.toLowerCase());
}
//EXPORTAÇÃO PADRÃO (DEFAULT)
export default textoMinusculas;
//EXPORTAÇÃO POSTERIOR
export {nome, olaPessoa};
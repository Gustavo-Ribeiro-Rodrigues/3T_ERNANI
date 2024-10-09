/** CRIE UM ARRAY DE OBJETOS => PESSOAS
 * COM OS SEGUINTES ATRIBUTOS: NOME/SOBRENOME
 * CRIE UMA FUNÇÃO QUE ITERE SOBRE O ARRAY
 * E RETIRE NOMES E SOBRENEMOES
 * CRIE UMA VARIÁVEL COM O CONTEÚDO:
 *       -> const emailBase = "@escola.pr.gov.br"
 * A PARTIR DESSES DADOS FORME UM @escola COM
 * NOME.SOBRENOME+EMAILBASE
 * EXECUTE A FUNÇÃO...
 */
const pessoas = [];
// criar email base
const emailBase = "@escola.pr.gov.br";

// FUNÇÃO DE CONSTRUÇÃO E IMPRESSÃO
function gerarEmail() {
  if (pessoas.length == 0) {
    console.log(" Não há nenhum aluno cadastrado");
  } else {
    for (pessoa of pessoas) {
      const nome = pessoa.nome;
      const sobrenome = pessoa.sobrenome;
      const email = `${nome}.${sobrenome}${emailBase}`;
      console.log(email.toLowerCase());// CAIXA BAIXA OU MINÚSCULAS
    }
  }
}
//FUNÇÃO DE CADASTRO
function cadastrarAluno(nome, sobrenome) {
  pessoas.push({ nome: nome, sobrenome: sobrenome });
}
//CADASTRAR 5 ALUNOS
cadastrarAluno("Gustavo", "Ribeiro");
cadastrarAluno("Augusto", "Ribeiro");
cadastrarAluno("Ana", "Beatriz");
cadastrarAluno("Ana", "Júlia");
cadastrarAluno("Gaby", "Falcão");
cadastrarAluno("Gaby", "Dalyn");

gerarEmail(); //INVOCANDO A FUNÇÃO
//CONVERTAO CÓDIGO ACIMA PARA UMA FUNÇÃO INVOCÁVEL
// E EXECUTÁVEL

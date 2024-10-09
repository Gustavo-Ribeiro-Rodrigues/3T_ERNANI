//CRIE UM PROGRAMA QUE CHEQUE USUÁRIO E SENHA
//CASO O USUÁRIO E SENHA SEJA IGUAIS AO CADASTRADO, EXIBA UMA MENSAGEM DE SUCESSO
// CASO CONTRÁRIO, PERGUNTE NOVAMENTE (WHILE)
const usuario = "Admin"
const senha = "1234"
let u, s = ""
let estaLogado = false

while (!estaLogado) {
  u = prompt("por favor, indique o nome de usuário golpista:")
  s = prompt("por favor,insira sua senha, golpista:")
  if (u == usuario && s == senha) {
    window.alert("seja bem-vindo " + usuario)
    estalogado = true
  } else {

    window.alert("golpitst~ digo usuario ou senha invalidos, tente novamente.")
  }
}

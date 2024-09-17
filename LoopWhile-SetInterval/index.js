//LOOP WHILE É UM CICLO DE REPETIÇÃO QUE PODE SER
//PARADO ATRAVÉS DE UMA CONDIÇÃO.
//O SETINTERVAL É UM CICLO DE REPETIÇÃO QUE EXECUTA UM CÓDIGO TEMPOS EM TEMPOS (INTERVALO EM MILISEGUNDOS)

// while(true){
//   console.log('oi!!!')
// }

const intervalo = setInterval(function () {
  //DEFINO FUNÇÃO INTERVALO
  //let n = (Math.random() *60).toFixed(1)
  let n = Math.round(Math.random() * 60); //UM NÚMERO ALEATÓRIO ATÉ 60
  console.clear(); //LIMPO A TELA
  console.log(`FPS: ${n}`); //IMPRIMO O RESULTADO
}, 1000); //1 SEGUNDO EM MILISEGUNDOS

//ClearInterval(intervalo) CONSIGO PARAR

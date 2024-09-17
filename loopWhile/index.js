//LOOP WHILE (ENQUANTO)
//RODA NUM LOOP INFINITO POR PADRÃO
//MAS PODEMOS ESTIPULAR UMA CONDIÇÃO
//DE PARADA PARA CONTRPLÁ-LO
//SINTAXE:WHILE (CONDIÇÃO) {CÓDIGO}

let n = 0;
while (n < 100) {
  //console.clear();
  if (n % 2 == 1) {
    //SE O RESTO FOR 0 (É PAR)
    //SE O RESTO FOR 1 (É IMPAR)S
    console.log(n);
  }
  n = n + 1;
}

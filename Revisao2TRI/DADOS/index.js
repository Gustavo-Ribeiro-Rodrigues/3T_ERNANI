//ARRAYS SÃO INDEXADOS
//POSSUEM MÉTODOS
//PODEM SER ITERADOS
const nome = "Gaby";
const time = ["Amanda", "Ana", "Bia", "Madu", "amora", "Gaby"];
//(parenteses), [colchetes], {chave}
time.push("Era do gelo"); // SEMPRE NO FINAL DA LISTA
time.shift(); // remove alguem do início)
console.log(time);
console.log(time[2]); //posição 2 (Bia)
console.log(time[20]); //undefined
time[20] = "Jupiter";
console.log(time[20]); //Jupiter
// ITERAR - LOOP ATÉ O ESGOTAMENTO (FOR, FOREACH, WHILE, FOR IN, FOR OF)
for (var i = 0; i <= 4; i++) {
  console.log(time[i]);
}

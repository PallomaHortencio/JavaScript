/* Estruturas de controle de repetição

while (enquanto)
do/while (faça/enquanto)
for (para uma determinada quantidade de vez) */

// Exemplo 1: While
// while (condição) { comandos };

let i = 1;
while(i < 10) {
    console.log(`O valor de i é: ${i}`); 
    i++;
}

// Exemplo 2: do/while

let j = 12;
do { 
    console.log(`J é ${j}`);
    j++
} while(j < 10);

// Exemplo 3: for
for(let k = 1; k <= 5; k++){
    console.log(` K vale: ${k}`);
}
 
console.log('------');

// Eemplo 4: loop iterando sobre os dados de array
let alunos = [
    "Chiquinha", "Chaves", "Madruga", "Kiko", "Florinda", "Sr. Barriga"
];

// Cache do tamanho array
let tamanho = alunos.length;
// console.log(tamanho);

for( let i = 0; i < tamanho; i++ ){
    console.log(alunos[i]);
}

console.log('------');

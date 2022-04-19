// comentário de uma linha - atalho Ctrl
/* bloco de comentário - atalho SHIFT ALT A */


//comando de saída para o console
console.log("Olá, mundo!");

 /* Variáveis
 Palavras-chave: var, let, const 
 var -> variável de escopo globoal
 let -> variável de escopo de bloco
 const -> const de escopo de bloco */

 const nome = "Palloma"; //constante
 let ano = 2022; // variável de escopo local
 var curso = "Técnico de Informatica para Internet"; //variável global

 // recuperando os valores
 console.log(nome);
 console.log(ano);
 console.log(curso);

 // concatenação
 console.log("Eu sou a " +nome+ ",", "e em " +ano+ " estou estudando no curso " +curso+ ".");

 //String literal, Template String
 console.log(`Eu sou a ${nome}, e em ${ano} estou fazendo o curso de ${curso}.`);

 /* Operadores matemáticas:
 + adição
 - subtração
 / divisão
 * multiplicação */

 let produto = "Tv Led";
 let preco = 6500;
 let quantidade = 3;
 let total = preco * quantidade;

 //Exercício 
 console.log(`Temos atualemnte no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco} (cada) e valor total de ${total}.`)

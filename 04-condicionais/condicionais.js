// Estruturas de controle condicional

// if/else, else if
let nome = "Palloma";
let idade = 21;

// verificar a idade da pessoa

// Condicional encadeada
let mensagem; 

/* if (idade > 18) {
    mensagem = "Você é maior de idade";
} else {
    mensagem = "Você é menor de idade";
} console.log (mensagem); */

if (idade >= 60) {
    mensagem = 'É idoso';
} else if (idade >= 18) {
    mensagem = 'É adulta, mas não idosa';
} else {
    // mensagem = 'É menor de idade';

    // condicional aninhada, uma dentro da outra

    if (idade >= 12 && idade < 18) {
        mensagem = 'É adolescente';
    } else {
        mensagem = 'É criança';
    }
}

console.log(mensagem);

console.log(nome, 'tem', idade, 'anos');

console.log(`${nome} tem ${idade} anos ${mensagem}`);

console.log("---------");

let nota1 = 7.5;
let nota2 = 8;
let media = (nota1 + nota2) / 2;
let resultado;

console.log(media);

if (media >= 7) {
    resultado = "Aprovado";
}  else if (media <= 7) {
    resultado = "Reprovado";
}

console.log(resultado);

// if/else (shorthand if/else - operador ternario ?:)
media>=7 ? resultado = "Aprovado" : resultado = "Reprovado";
console.log(resultado)

resultado = media>= 7 ? "Aprovado" : "Reprovado";
console.log(resultado);

console.log("---------");

/* switch/case/default/break */
/* Opções de chatbot */

let opcao = 1; 
let textoOpcao;

switch(opcao) {
    case 1:
        textoOpcao = "Legal, o que deseja saber?";
        break;

    case 2:
         textoOpcao = "Que pena, o que aconteceu?";
         break;

    case 3:
        textoOpcao = "Certo, qual sua dúvida?";
        break;

    default:
        textoOpcao = "Hum, não entendi...vou te transferir";
        break;

}

console.log(`Você escolheu a opção ${opcao}`);
console.log(textoOpcao);

console.log("---------");

/* Operadores de comparação */
let a = 10;
let b = "10";

console.log(a==b); // true ou false




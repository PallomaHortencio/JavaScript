/* let qualquerCoisa = document.getElementById("subtitulo-exemplo01")
console.log(qualquerCoisa);
qualquerCoisa.style.color = "red";
qualquerCoisa.innerHTML = "Qualquer coisa"
 */

const pagina = document.querySelector('body');
const titulo = document.querySelector('h1');
const msg = document.querySelector('#mensagem');
const sub01 = pagina.querySelector('#subtitulo-exemplo01');

//exemplo 01

sub01.addEventListener('mouseover', function() {
    msg.textContent = 'Você passou o mouse sobre';
});

sub01.addEventListener('mouseout', function() {
    msg.textContent = "" 
});


//exemplo 02

const botao = pagina.querySelector('#noturno');
botao.addEventListener('click', function(){
    pagina.classList.toggle('modo-noturno');

    // desafio: mudar o rotulo do botao a medida que o usuario clica
   if (botao.textContent == 'Ativar'){
       botao.textContent = 'Desetivar';
   } else {
       botao.textContent = 'Ativar';
   }
});

//exemplo 3

const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota1 = formulario.querySelector('#nota1');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event) {
    // previne o comportameno padrão do formulario
    event.preventDefault();

    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

   /*  console.log(nome);
    console.log(nota1);
    console.log(nota2); */

    // calcula media
    let media = calculaMedia(nota1, nota2);

    // verificando a situação
    let situacao = verificaSituacao(media);

    //montagem do resumo do aluno
    montaResumo(nome, media, situacao);

});

function calculaMedia(nota1, nota2) {
    return (nota1 + nota2)/2;
};

function verificaSituacao(media){
if (media >= 7) {
    return 'aprovado';
} else {
    return 'reprovado'
}
};

function montaResumo(nome, media, situacao) {

    // resetando o formulario
    formulario.reset();

    // levando o formulario para o campo nome
    campoNome.focus();

// 1) criar elemento dinamicamente
let linha = document.createElement('tr');

// 2) montar o conteudo do elemento criado
linha.innerHTML = `<td> ${nome} </td>
                   <td> ${media} </td>
                   <td> ${situacao} </td>`;

// 3) adicionar o elemento ao DOM (corpoTabela)
corpoTabela.appendChild(linha);
};


































let nome = document.getElementById("nome");
let resultado = document.getElementById("resultado");

function clique() {
    resultado.textContent = nome.value;
}
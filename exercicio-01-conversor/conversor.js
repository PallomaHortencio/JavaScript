/* declacarando a função que é chamada quando clicamos no botão converter do HTML
 Socução 1

function converteDolar() {
    // pegando o valor digitado no campo valorDolar do HTML
    let valorDolar = document.getElementById('valorDolar').value;
    let converteReal = valorDolar * 4.97;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;

    // mudar a cor para vermelho
    resultado.style.color = '#ff007f'
} */



/* Solução 2

function converteDolar() {

   // pegando o valor digitado no campo valorDolar do HTML
   let valorDolar = document.getElementById('valorDolar').value;


    // converte o valor digitado considerando o valor do dolar
    let cotacaoDolar = document.getElementById('cotacaoDolar').value;
    let converteReal = valorDolar * cotacaoDolar;

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em Reais é R$ ${converteReal}`;

    // mudar a cor para vermelho
    resultado.style.color = '#ff007f'
} 
*/



// Soluçao 3

let formulario = document.querySelector('form');
formulario.addEventListener('submit', function(event) {
    
    // previne o comportamento padrão do formulario (ao enviar)
    event.preventDefault();

    let cotacao = parseFloat(document.getElementById('cotacao').value);
    let valor = parseFloat(document.getElementById('valor').value);

    let converte = (valor * cotacao).toFixed(2);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O valor convertido em reais é ${converte}`;
    resultado.style.color = '#ff007f'
});


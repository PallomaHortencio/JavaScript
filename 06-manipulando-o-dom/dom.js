/* Métodos/Funções de acesso eseleção

getElementById() -> seleciona um elemento pelo ID

querySelector() -> seleciona Um elemento de acordo com um seletor

querySelectorAll() -> seleciona VÁRIOS elementos de acordo com um seletor */

// selecionando pelo ID
const titulo = document.getElementById('titulo-principal');
console.log(titulo);

//selecionado pela TAG
const pagina = document.querySelector('body');
console.log(pagina);

// selecionando todas as TAGS h2
const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);

/* Modificando elementos */
titulo.textContent = "Olá Mundo!"
subtitulo[1].textContent = "Full-Stack";

const legenda = document.querySelector('figcaption');
legenda.innerHTML = "<b>Ilustração do DOM</b>";

// CSS via JS
titulo.style.textAlign = "center"; 
titulo.style.backgroundImage = "linear-gradient(lightyellow, lightblue)";
titulo.style.color = "red";
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

const listaEditores = document.querySelector('#lista-editores');

const ultimo = listaEditores.querySelector('li:last-child');
const primeiro = listaEditores.querySelector('li:first-child');
const outro = listaEditores.querySelector('li:nth-child(2)');

outro.innerHTML = "Deu ruim";
console.error(ultimo);

outro.style.color = "red";

ultimo.classList.add('destaque-item');


// adicionando o atributo target em todos os links da lista de referencias
// selecionando todos os links contidos na lista ul
const links = document.querySelectorAll('ul li a');
console.log(links);
links[0].style.color = "red";

for(let i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank')
}

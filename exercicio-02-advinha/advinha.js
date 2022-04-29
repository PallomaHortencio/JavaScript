let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event){

    event.preventDefault();

    let numeroEscolhido = parseInt(Math.random() * 11 );
    let palpiteUsuario = parseInt(document.getElementById('palpite').value);

    if (palpiteUsuario == numeroEscolhido) {
        resultado.innerHTML = "Você acertou!";
    } else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
        resultado.innerHTML = "Digite um número entre 0 e 10";
    } else {
        resultado.innerHTML = "Errroooouuuuuu!";
    };
})


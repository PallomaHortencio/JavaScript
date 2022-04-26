/* sintaxe 1 (tradicional)
função literal/anonima */
let exemplo1 = function() {
    console.log("Função anônima / literal");
};

// chamando a função
exemplo1();


/* sintaxe 2 (tradicional)
função nomeada */
function exemplo2() {
    console.log("Função nomeada");
}
exemplo2(); // chamando a função


/* sintaxe 3 (moderna)
função seta/flecha (arrow function) */
let exemplo3 = () => {
    console.log('Arrow function');
};
exemplo3(); // chamando a função

let exemplo3b = () => console.log("Arrow function B");
exemplo3b();

//Exemplos
function dobra(valor) {
   return valor * 2;
}
document.write(dobra(10)); 

// Arrow Function
let dobraB = (valor) => {
    return valor * 2;
}
console.log(dobraB(100));


let dobraC = valor => valor * 100;
console.log(dobraC(20)); 

console.log('----------');

/* Exemplos anteriores */
let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

function formataMoeda(valor) {
    return valor.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })
}

// arrow
let formataValor = valor => {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

console.log(formataValor(preco));

console.log(formataValor(preco));
console.log(formataMoeda(desconto));
console.log(formataMoeda(precoFinal));

console.log('----------');
// Exemplo 1: objeto básico

let livro = {
    // propriedade : valor
    titulo: 'Senhor dos Aneis',
    ano: 1954,
    volumes: 3,
    autor: 'J.R.R Tolkien'
};

console.log(`${livro.titulo}`);

console.log(`Meu livro preferido é o ${livro.titulo} que foi lançado em ${livro.ano}.`);

// Exemplo 2: objeto contendo array e outro objeto
let pessoa = {
    //propriedades
    nome: 'Palloma',
    idade: 21,
    sexo: 'feminino',
    telefone: ['12345-6987', '27859-4669'],
    cidade: 'São Paulo',
    medidas: {
        peso: 63,
        altura: 1.60,
    },
};

console.log(`A ${pessoa.nome} tem ${pessoa.idade} de idade, mora em ${pessoa.cidade}, um de seus telefones é ${pessoa.telefone[0]}, e ela tem ${pessoa.medidas.altura} de altura e pesa ${pessoa.medidas.peso} KG. `);

console.log(`${pessoa.nome} é alguém incrível, contrate através do telefone ${pessoa.telefone[1]}.`);

// Exemplo 3: Array com objeto
let livros= [
    {
        titulo: 'Senhor dos Anéis',
        autor: 'J.R.R. Tolkien'
    },
    {
        titulo: 'Ghost Rider',
        autor: 'Neil Peart'
    },
    {
        titulo: 'Game Of Thrones',
        autor: 'George R.R. Martin'
    }
];


console.log(`Meu livro favorito é ${livros[0].titulo} do autor ${livros[0].autor}`);


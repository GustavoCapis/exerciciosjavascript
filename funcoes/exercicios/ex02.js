// NÍVEL 2 — Funções com + de 1 parâmetro

// 5) Crie uma função que receba dois números e retorne a soma.
function soma(n1, n2) {
    return n1 + n2;
};

console.log(soma(6, 10));

// 6) Crie uma função que receba dois números e retorne o maior.
function maiorNum(n1, n2) {
    return n1 > n2 ? n1 : n2
};

console.log(maiorNum(1,20));
console.log(maiorNum(7,3));
// Dica: poderia usar Math.max(n1, n2) pra simplificar ainda mais.

// 7) Crie uma função que receba um nome e uma idade e retorne:
// "NOME tem IDADE anos."

function apresentar(nome, idade) {
    console.log(`${nome} tem ${idade} anos.`)
};

apresentar("Gustavo", 24);

// 8) Crie uma função que receba um preço e um desconto e retorne o valor final.
function precoFinal(preco, desconto) {
    let valorDesconto = preco * (desconto / 100);
    let total = preco - valorDesconto;
    return total;
};

console.log(precoFinal(1000, 15));



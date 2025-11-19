//NÍVEL 1 — Funções SIMPLES (só 1 parâmetro)

// Transforme cada instrução em uma função.

// 1) Crie uma função que receba um número e retorne o dobro dele.

function dobro(num) {
    return num * 2
};

console.log(dobro(5));

// 2) Crie uma função que receba um nome e retorne "Olá, NOME".
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
};
saudacao("Gustavo");

// 3) Crie uma função que receba uma idade e diga se a pessoa é maior de idade.
function verificarIdade(idade) {
    return idade >= 18 ? "Maior de idade" : "Menor de idade"
}
console.log(verificarIdade(12));
console.log(verificarIdade(21));

// 4) Crie uma função que receba um texto e retorne quantos caracteres tem.

function contarCaracteres(texto) {
    return texto.length;
};

console.log(contarCaracteres("JavaScript"));
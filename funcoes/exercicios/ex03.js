// NÍVEL 3 — Funções que usam lógica dentro
// 9) Crie uma função que receba um array de números e retorne a quantidade de números pares.
arrayNumeros = [1, 3, 5, 4, 2, 8];

function numPares(vetor) {
  let pares = [];
  for (const num of vetor) {
    num % 2 === 0 ? pares.push(num) : 0;
  }
  return pares.length;
}

console.log(numPares(arrayNumeros));

// 10) Crie uma função que receba um array e retorne o maior número dentro dele.
function maiorNum(vetor) {
  return Math.max(...vetor); //Esses tres pontos é chamado de Spread e transforma o array em argumentos individuais, MUITO ÚTIL!
}

console.log(maiorNum(arrayNumeros));

// 11) Crie uma função que receba um array de strings e retorne todas em maiúsculas.
arrayStrings = ["uva", "banana", "melancia", "laranja", "maçã"];

function caixaAlta(vetor) {
  let modificado = [];
  for (const palavra of vetor) {
    modificado.push(palavra.toUpperCase());
  }
  return modificado;
}
//const caixaAlta = vetor => vetor.map(p => p.toUpperCase()); versão mais curta usando map, praticar isso depois!

console.log(caixaAlta(arrayStrings));

// 12) Crie uma função que receba um array de pessoas (objeto com nome e idade) e retorne apenas as maiores de idade.

arrayPessoas = [
  {
    nome: "Raul",
    idade: 27,
  },
  {
    nome: "Ana",
    idade: 7,
  },
  {
    nome: "Patricia",
    idade: 32,
  },
  {
    nome: "Gustavo",
    idade: 18,
  },
];

function maiorDeIdade(vetor) {
    let maioresDeIdade = [];
    for (const pessoa of vetor) {
        pessoa.idade >= 18 ? maioresDeIdade.push(pessoa.nome) : 0;
    };
    return maioresDeIdade;
};

console.log(maiorDeIdade(arrayPessoas));
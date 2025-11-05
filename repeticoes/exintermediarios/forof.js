//CALCULADORA DE NOTAS
const notas = [7.5, 8.0, 6.5, 9.0, 5.5];

// USANDO for of:
// Calcule a média das notas
// Dica: some todas e divida pelo total

let soma = 0;
let textoNotas = "" 

for (let nota of notas) {
  soma += nota;
  textoNotas += (textoNotas ? "+" : "") + nota;
}
let qtd = notas.length;
let media = soma / qtd;

console.log(
  `A soma de ${textoNotas} é ${soma}, a quantidade de notas somadas foi ${qtd} e a média é ${media}`
);

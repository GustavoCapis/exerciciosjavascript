//Calcular média de notas
const notas = [7.5, 8.0, 6.5, 9.0, 5.5];

// Calcule a média usando forEach
// Dica: use soma += nota e depois divida pelo total
let soma = 0;

notas.forEach((element) => {
  soma += element;
});

let media = soma / notas.length;

console.log(`A soma das notas é: ${soma} e a média é ${media}`);

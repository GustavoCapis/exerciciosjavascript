//Somar valores dentro de objetos aninhados

const funcionarios = {
  joao: { salario: 1200, bonus: 200 },
  maria: { salario: 2500, bonus: 300 },
  pedro: { salario: 1800, bonus: 150 },
};

// Calcule o total (salário + bônus) de todos os funcionários.
// Resultado esperado: 1200+200 + 2500+300 + 1800+150 = 6150

let total = 0;

for (let propriedade in funcionarios) {
  let salario = funcionarios[propriedade].salario;
  let bonus = funcionarios[propriedade].bonus;
  let soma = salario + bonus;
  total += soma;

  console.log(`Resultado: ${salario} + ${bonus} = ${soma}`);
}

console.log(`Total geral: ${total}`);

const salarios = { joao: 1200, maria: 2500, pedro: 1800 };

// Calcule o total de todos os salários usando for...in.

total = 0;

for (let propriedade in salarios) {
  total += salarios[propriedade];
}

console.log(total);

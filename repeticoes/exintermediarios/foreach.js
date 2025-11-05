const nome = [
  { produto: "Camisa", valor: 50 },
  { produto: "Calça", valor: 120 },
  { produto: "Tênis", valor: 300 },
  { produto: "Boné", valor: 40 }
];

// Usando forEach:
// Mostre no console uma mensagem para cada venda, assim:
// "Venda de Camisa no valor de R$50 registrada com sucesso."

// Depois, calcule o total arrecadado e exiba no final:
// "Total de vendas: R$510"
let totalVendas = 0
nome.forEach(function(nome){
  totalVendas += nome.valor
  console.log(`Venda de ${nome.produto} no valor de ${nome.valor} registrada com sucesso!`)
});
console.log(`O total de vendas foi ${totalVendas}`) //Precisa ser fora pra somar só no final
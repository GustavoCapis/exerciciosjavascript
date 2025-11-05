const carro = { marca: "Honda", modelo: "Civic", ano: 2020 };

// Mostre no console:
// marca: Honda
// modelo: Civic
// ano: 2020

for (let propriedade in carro) {
  console.log(`${propriedade} : ${carro[propriedade]}`);
}

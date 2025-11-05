//Contar número pares de um array
const lista = [2, 7, 8, 15, 20];

// Crie um novo array apenas com os números pares.

let pares = [];

for (let num of lista){
    num % 2 == 0 && pares.push(num); //O método push adiciona um ou mais elementos no final de um array.
};
console.log(pares);
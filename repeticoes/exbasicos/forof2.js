const numeros = [10, 20, 30, 40];

// Some todos os números usando for...of
// Resultado: 100
let total = 0;
let soma = "";
for (let num of numeros){
    soma += num + " + "; //é uma string com 3 índices, 1 do espaço 1 do + e 1 do outro espaço
    total += num;
};
console.log(`Resultado: ${soma.slice(0,-3)} = ${total}`); //o método slice pega o índice do início e o fim, quando bota -3 ele conta de trás pra frente, ai corta os três últimos

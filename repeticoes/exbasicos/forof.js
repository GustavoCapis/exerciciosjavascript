//For of percorre diretamente os valores de um array, string ou algo iterável.
//Usado com arrays e strings.
//Retorna o valor em cada posição.


//LISTA DE COMPRAS
const compras = ["pão", "leite", "ovos", "arroz"];

// USANDO for of:
// Mostre cada item da lista de compras
// Resultado esperado: "Item: pão", "Item: leite", etc

for (let item of compras) {
    console.log(`Item: ${item}`);
};

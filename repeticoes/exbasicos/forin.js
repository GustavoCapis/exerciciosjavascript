//For in percorre as chaves (índices ou propriedades) de um objeto ou array.
//Usado mais com objetos.
//Retorna o nome da propriedade (ou o índice, no caso de array).

//FICHA PESSOAL
const pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Desenvolvedor",
    cidade: "São Paulo"
};

// USANDO for in:
// Mostre todas as informações da pessoa
// Resultado: "nome: Carlos", "idade: 30", etc

for (let chave in pessoa){
    console.log(`Resultado: ${chave} : ${pessoa[chave]}.`)
}


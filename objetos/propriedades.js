//Como adicionar, editar e remover propriedades dos objetos

//Removendo propriedades de objetos
const objeto = {
    nome: "Gustavo",
    idade: 24
};
//Antes de remover (objeto completo)
console.log(objeto);
//operador delete faz o trabalho, basta adicinar o . e acessas a propreidade que você quer remover
delete objeto.idade
//Após usar o delete
console.log(objeto);
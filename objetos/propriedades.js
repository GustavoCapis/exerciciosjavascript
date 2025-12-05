//Como adicionar, editar e remover propriedades dos objetos

//Adicionando propriedades à objetos
const person = {
    name: "Gustavo",
};

//Existem algumas formas:
person.age = 24;
console.log(person);

person["hair"] = "curly";
console.log(person);
//Os dois acima são úteis quando você sabe o nome da propriedade que quer colocar, mas se não for o caso:
//Key representa um dado dinâmico de uma API por exemplo
const key = "weight";
person[key] = 60;
console.log(person);


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

//Editando propriedade de um objeto
//Funciona da mesma forma que adicionar, só que você atribui um novo valor e ele sobrescreve o anterior
//Ainda existe um método mas não é muito usado atualmente
const user = {
    usuario: "Gustavo"
};
Object.assign(user, {usuario: "Novo nome"});
console.log(user);
//Funciona mas é muito verboso
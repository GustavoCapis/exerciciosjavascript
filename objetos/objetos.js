//Principais métodos pra suar com objetos

const user = {
    name: 'Gustavo',
    idade: 27,
    adress: {
        street: 'Rua teste',
        number: 176,
    },
};

//in verifica se existe uma informação dentro do objeto 

console.log('name' in user)

//Object.keys() retorna um vetor com todas as chaves de um objeto

console.log(Object.keys(user));

//Object.values() retorna um vetor com todos os valores de um objeto

console.log(Object.values(user));

//Objecto.entries() retorna um vetor com varios vetores dentro e cada subvetor apresenta uma info, sendo a primeira a cahve e a segunda o valor

console.log(Object.entries(user));

//Desestruturação 
//Permite remover parte de um objeto para uma variável a parte

//Rest Operator
//O rest operator é o ... usado para juntar vários valores em um único pacote.

//Desestruturar é tirar um valor primitivo ou uma estrutura de dados de dentro de outra estrutura

//---------------Desestruturando OBJETOS-----------------

const pessoa = {
    name: "Gustavo",
    age: 26
}

// podemos pegar um valor de uma dessas chaves desse objeto dessa forma:
// const age = pessoa.age;
// mas da pra fazer da mesma forma usando desestruturação e ficaria assim:
const {age} = pessoa;
console.log(age);

//é possível renomear uma chave também usando desestruturação:
const {age : idade} = pessoa;
console.log(idade);


//você pode atribuir também à uma variável anteriormente declarada, porém precisa usar () e ;

let idade2;

({age : idade2} = pessoa);

console.log(idade2);

//------------------Desestruturando ARRAYS-----------------------
const fruits = ['banana', 'uva', 'pera'];

//normalmente para acessar um valor do array fazemos:
const banana = fruits[0];
console.log(banana);

//como ficaria com desestruturação?

const [fruta1, fruta2, fruta3] = fruits;
console.log(fruta1);

//repare como cada variável recebe o valor de cada índice em ordem
console.log([fruta1,,fruta3]); //então quando botamos uma virgula seguida de outra pulamos um valor

//É possível também atribuir um valor a uma variável e atribuir todos os outros usando ... "rest operator"
let [b, ...rest] = fruits
//aqui usei o nome rest pra variável mas poderia ser quqlauqer coisa desde que precedida pelo ... 
console.log(rest);

//É possível usar desestruturação também em funções para passar parâmetros, desde que você saiba a chave 

function liquidificador ({f2}) {
    console.log(f2);

}

const frutas = {f1: 'banana',
    f2: 'uva'
};
liquidificador(frutas);
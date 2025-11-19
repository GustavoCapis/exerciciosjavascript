const data = [
  { name: "Matheus", age: 31, salary: 2000, driverLicense: true },
  { name: "João", age: 18, salary: 1500, driverLicense: false },
  { name: "Mariana", age: 22, salary: 4000, driverLicense: true },
  { name: "Pedro", age: 50, salary: 7200, driverLicense: true },
  { name: "Érica", age: 16, salary: 0, driverLicense: false },
];

// 1 - reverse
// Inverte a ordem do array
// Em um projeto real esse método costuma ser usado pra mostrar os itens mais antigos primeiro
const reverseData = data.reverse();

console.log(reverseData);

// 2 - find
// Procura dentro do array ***o primeiro*** elemento que satisfaz uma condição.
const highSalary = 5000;

const highestSalary = data.find((user) => user.salary > highSalary);

console.log(highestSalary);

// 3 - findIndex
// Retorna o índice do primeiro elemento em um array que satisfaz uma condição
const lowestSalary = data.findIndex(
  (user) => user.salary > 0 && user.salary < 2000
);
console.log(lowestSalary);

data[lowestSalary].salary += 200;

console.log(data[3]);

// 4 - includes
// Verifica se o array inclui certo valor retornando true ou false
const numbers = [1, 2, 3, 4, 5];

const hasFour = numbers.includes(4);

console.log(hasFour);

console.log(numbers.includes(100));

// 5 - map
// Invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
data.map((user) => user.newsletter = false);
console.log(data);

// 6 - filter
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const drives = data.filter((user) => user.driverLicense);
console.log(drives);

// 7 - reduce
// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
const salariesSum = data.reduce((totalSalary, user) => (totalSalary += user.salary),0);
console.log(salariesSum)

// 8 - forEach
// O método forEach() executa uma dada função em cada elemento de um array, tipo o map(), mas não retorna nada.
const showUserNames = (users) => {
    users.forEach((user) => {
        console.log(`Olá ${user.name}`)
    });
};
showUserNames(data);

// 9 - some
// Testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
data[0].newsletter = true;
let someoneWithNewsletter = data.some((user) => user.newsletter);
console.log(someoneWithNewsletter);

// 10 - every
// Testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
const everyUserHasName = data.every((user) => user.name);
console.log(everyUserHasName);

const everyUserHasGoodSalary = data.every((user) => user.salary > 2000)
console.log(everyUserHasGoodSalary);
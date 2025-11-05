// function parimp(n){
//     if(n % 2 == 0) {
//         return "par"
//     } else {
//         return "impar"
//     }
// }

// let res = parimp(4 )

// console.log(res)

function soma(n1=0, n2=0) { //atribuir um valor aos parâmetros formais nesse caso evita que o js acuse um NaN se você passar só um parâmetro
    return n1 + n2
}
//exemplo:
console.log(soma(7))
console.log('------------------------------------------------------')

//há a possibilidade de declarar uma variável como uma função em js:

let v = function(x) {
    return x * 2
}

console.log(v(5))




// -----------------------------------------------------------------------

/**
 * - objeto
 * -- representação de objeto: notações
 * -- tipo de referência: alterações de valores comportamentos e comparações
 * --- objeto vs tipos primitivos
 * - callback
 * - async / Promise
 */

// number
// String
// Boolean
// OBJECT
//  function

const a = 1;
const b = 1;
const c = false;

const d = { x: 1, y: 0 };
const d2 = { x: 1, y: 0 };
const dd = d;

d.x == 1

const f = { 0: 'gio', 1: 'gus' };
const e = ['gio', 'gus'];
d['y'] == 0 
d[10]
e[0]
e[1]


// a = 2 // errado, nao pode alterar const
// d = { } // erro


const obj = {
    nome: 'gio',
    idade: 27,
}

// ------------- callback ------------------
function funcao(valorSoma, callback) {
    console.log('inicio da funcao')

    const d3 = {
        x: d.x + d2.x + valorSoma,
        y: d.y + d2.y + valorSoma
    }
    
    console.log('fim da funcao')

    callback()
    return d3;
}


const d3 = funcao(5, function() {
    console.log('sou um callback!!')
});



function carregarImagens(){
    var url = "https://dog.ceo/api/breeds/image/random" 

    fetch(url, { method: 'get' })
        .then(function(response) { 
            response.json().then(function(data){
            console.log('Resultado da Requisição: ' + data.message); 

            var imgDog = document.getElementById("img_dog");
            imgDog.src = data.message;
            });
        })
        .catch(function(err) { 
            console.error('O seguinte erro ocorreu durante a requisição: ' + err);
        });
}

const carregarImagensAsync = async () => {
    var url = "https://dog.ceo/api/breeds/image/random" 

    const promise = fetch(url, { method: 'get' });

    const callback = function(response) { 
        response.json().then(function(data){
        console.log('Resultado da Requisição: ' + data.message); 

        var imgDog = document.getElementById("img_dog");
        imgDog.src = data.message;
        });
    }

    const promise2 = promise.then(callback);

    promise2.catch(function(err) { 
        console.error('O seguinte erro ocorreu durante a requisição: ' + err);
    });
}
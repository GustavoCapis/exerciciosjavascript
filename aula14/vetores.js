let num = [5, 8, 2, 9, 3]

num[5] = 6// é possível adicionar elementos novos a um array explicitando o índice que será preenchido
num.push(7) //o método push permite adicionar um valor ao final do array
num.length //no js length não é um método e sim um atributo que mostra a qntd de elementos do array
num.sort()//o método sort coloca todos os elementos em ordem CRESCENTE
let posicao = num.indexOf(7)//o método indexOf() permite procurar o valor passado no parâmetro dentro de uma lista e retornar seu índice

console.log(`O vetor tem ${num.length} elementos`)
console.log(`O valor 7 está na posição ${posicao}`)

//forma padrão de percorrer uma lista usando for:
for(let indice = 0; indice < num.length; indice++) {
    console.log(`A posição ${indice} tem valor ${num[indice]}`)
}

console.log("-------------------------------------------------------")
let list = [1, 4, 2, 7, 20, 8]
//forma simplificada para vetores e objetos:
for(let index in list) {
    console.log(`A posição ${index} tem valor ${list[index]}`)
}
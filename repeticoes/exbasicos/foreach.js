// Executa uma função para cada elemento do array.
// Não retorna nada (só executa).
// Usado só em arrays.
// Ideal pra exibir ou processar dados sem precisar de return.
// array.forEach(function(elemento, índice, array) {
   // código a ser executado para cada elemento
// });
// elemento: valor do elemento atual.
// índice (opcional): posição do elemento no array.
// array (opcional): o array que está sendo percorrido.

//LISTA DE TAREFAS
const tarefas = ["Estudar JavaScript", "Fazer exercícios", "Ler documentação"];

// USANDO forEach:
// Mostre cada tarefa com seu índice
// Resultado: "1. Estudar JavaScript", "2. Fazer exercícios", etc

tarefas.forEach(function(tarefa, index){
    console.log(`Resultado: ${index} : ${tarefa}`)
});
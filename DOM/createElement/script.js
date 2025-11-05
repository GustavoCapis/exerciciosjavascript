//Criar um elemento <li> e o nó de texto

let elemento = document.createElement('li');
let texto = document.createTextNode('Item da lista adicionado com appendChild'); //nó do texto

//O appendChild é um método usado para adicionar um nó (elemento) como filho de outro elemento no DOM sempre no final.
elemento.appendChild(texto); 

//Recuperando o elemento lista e armazenando numa variável
let lista = document.getElementsByTagName('ul')[0];

//Anexando o elemento <li> ao final da lista
lista.appendChild(elemento);

//insertBefore
let lista2 = document.getElementsByTagName('ul')[0];
let itens = lista2.getElementsByTagName('li');

//criar elemento
let element = document.createElement('li');
element.textContent = "Fui inserido com insertBefore";

//inserir valor em posição específica
lista2.insertBefore(element, itens[2]);
// O insertBefore() sempre recebe dois parâmetros, nessa ordem:
// pai.insertBefore(novoElemento, elementoDeReferencia);
//1º parâmetro: o elemento que você quer adicionar
//2º parâmetro: o elemento que já existe e antes do qual o novo vai entrar

//removeChild
// removeChild() remove um elemento filho de um elemento pai no DOM passando seu índice entre []
lista.removeChild(itens[0]);

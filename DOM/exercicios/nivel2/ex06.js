//Crie um botão “Remover último item” que remove o último <li> de uma lista.

const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.onclick = () => {
  let lastItem = list.lastElementChild;
  lastItem ? lastItem.remove() : window.alert("Não há mais itens na lista");
};

// Crie um botão que cria um <li> e adiciona dentro de uma <ul> já existente.
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.onclick = function() {
    const listItem = document.createElement("li");
    listItem.textContent = "Item adicionado!";
    list.append(listItem);
};










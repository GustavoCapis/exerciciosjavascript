// Crie um input e um botão. Ao clicar no botão, o texto do input vira um novo parágrafo no body.

const button = document.querySelector("#button");
const div = document.querySelector("#container");
const input = document.querySelector("#input");

button.onclick = () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = input.value;
    div.append(paragraph);
    console.log("click")
};
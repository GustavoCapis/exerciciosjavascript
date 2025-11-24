//Crie um botão que remove um elemento criado dinamicamente (ex: o card que você acabou de criar).
const criarParagrafo = document.querySelector("#createButton");
const removerParagrafo = document.querySelector("#removeButton");
const div = document.querySelector("#container");

criarParagrafo.onclick = () => {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vero nihil explicabo tenetur ipsum, dicta quibusdam libero quisquam, aliquid, suscipit voluptatibus! Doloremque modi ad aut molestias dolores quasi quos accusantium!";
    div.append(paragrafo);
};

removerParagrafo.onclick = () => {
    div.lastChild.remove();
};
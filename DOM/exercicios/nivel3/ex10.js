// Crie um quadrado colorido na tela. Ao clicar, ele muda para outra cor.

const quadrado = document.querySelector("#square");

quadrado.onclick = () => {
    quadrado.style.backgroundColor = "green"; //Em JS as propriedades CSS separadas por hífen devem ser escritas com camelCase
    console.log("click");
};
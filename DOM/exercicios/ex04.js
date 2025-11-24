// Crie um <div> vazio no HTML e programe o JS para adicionar três <p> dentro dele ao apertar um botão.

const button = document.querySelector("#button");
const div = document.querySelector("#container");

button.onclick = () => {
    
    for (let i = 0; i < 3; i++){
        const paragraph = document.createElement("p");
    
        paragraph.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio earum odit maiores consectetur vitae, quae modi? Dicta velit enim, sint mollitia sunt unde perspiciatis. Ipsam eum eaque dolorem ipsum illo.";
        
        div.append(paragraph);
    }

}
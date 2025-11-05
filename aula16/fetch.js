//1.Versão com .then()
const URL = "https://dummyjson.com/products"; // Endereço da API

// Faz uma requisição para a URL
fetch(URL)
  // Quando a resposta chegar, transforma em JSON
  .then((res) => res.json())
  // Quando o JSON estiver pronto, pega os dados
  .then((dados) => {
    console.log(dados); // Mostra os dados no console
  })
  // Caso dê erro, captura aqui
  .catch((error) => console.error("Erro na requisição:", error));

//2.Versão com Saync/Await
const URL = "https://dummyjson.com/products"; // Endereço da API

// Criamos uma função assíncrona
async function getProducts() {
  try {
    // Espera a resposta do fetch (igual ao primeiro .then)
    const res = await fetch(URL);

    // Espera converter a resposta para JSON (igual ao segundo .then)
    const dados = await res.json();

    // Agora temos os dados prontos
    console.log(dados);

  } catch (error) {
    // Caso aconteça algum erro na requisição ou conversão
    console.error("Erro na requisição:", error);
  }
}

// Chamamos a função para rodar o código
getProducts();


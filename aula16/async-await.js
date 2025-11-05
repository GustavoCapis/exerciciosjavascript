//Funções async funcionam como promise, só que tem uma sintaxe mais simples!
//Await é usado quando precisamos aguardar por algo (precisa ter um async se não da erro!)
//ex: inserção de dado no banco

//Sintaxe
// 1. Função tradicional que retorna uma Promise
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou isso aqui!");
      resolve(); // Resolve a Promise após 1 segundo
    }, 1000); // Tempo em milissegundos (1000ms = 1s)
  });
}

// 2. Função async (assíncrona) - versão mais moderna
async function segundaFuncao() {
  console.log("Iniciou"); // Executa imediatamente

  // Await pausa a execução até que a Promise seja resolvida
  await primeiraFuncao(); // Pede pra esperar isso ficar pronto

  console.log("Terminou"); // Só executa DEPOIS que a Promise resolve
}

// 3. Chamada da função async
segundaFuncao(); // Tem q fazer a chamada da função pra funcionar

//Exemplo prático
// Função que busca usuário usando fetch (retorna Promise)
function getUser(id) {
    // fetch já retorna uma Promise - faz requisição HTTP
    return fetch(`https://regres.in/api/users?id=${id}`)
        // Converte resposta para JSON (também retorna Promise)
        .then((data) => data.json())
        // Captura erros da requisição ou conversão
        .catch((err) => console.log(err))
}

// Função async que mostra o nome do usuário
async function showUserName(id) {
    // Await pausa aqui até a Promise do getUser ser resolvida
    const user = await getUser(id) 
    
    // Acessa os dados aninhados da API response
    console.log(`O nome do usuário é: ${user.data.first_name}`)
}

// Chama a função async
showUserName(3)

/*
FLUXO DETALHADO:
1. showUserName(3) é chamada
2. await getUser(3) → pausa a execução
3. fetch(`https://regres.in/api/users?id=3`) → faz requisição HTTP
4. .then((data) => data.json()) → converte resposta para JSON
5. Promise é resolvida com os dados do usuário
6. user recebe o objeto com os dados
7. console.log exibe o nome do usuário

ESTRUTURA ESPERADA DA API:
{
  "data": {
    "id": 3,
    "first_name": "Emma",
    "last_name": "Wong",
    ...
  }
}
*/
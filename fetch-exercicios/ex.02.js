// API gratuita de usuários aleatórios
//https://randomuser.me/api/
//Pegue os dados da API usando fetche e exiba, nome de usuário, email e gênero
async function getUser() {
  try {
    const res = await fetch("https://randomuser.me/api/");
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();

    const user = data.results[0];
    console.log(data);
    console.log(`Nome do usuário: ${user.name.first}`);
    console.log(`Email do usuário: ${user.email}`);
    console.log(`Email do usuário: ${user.gender}`);

    return data;
  } catch (error) {
    console.error(`Erro ao buscar usuário: ${error.message}`);
  }
}

getUser();

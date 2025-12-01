//Buscar múltiplos usuários
//API endpoint: https://randomuser.me/api/?results
//Extra: fazer com que mostre só os que forem brasileiros

async function getUsers(quantity) {
  try {
    const res = await fetch(`https://randomuser.me/api/?results=${quantity}`);
    if (!res.ok) {
      throw new Error("Erro!");
    };

    const data = await res.json();
    console.log(data);
    data.results.forEach((user, index) => {
      if (user.location.country === 'Brazil') {
        console.log(
          `User number ${index + 1} name: ${user.name.first} - Email: ${
            user.email
          }`
        );
      } else {
        console.log('Não foram econtrados outros brasileiros no banco de dados.');
      }
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  };
};

getUsers(5);

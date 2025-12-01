//Transformar em assync await
// URL de teste: https://jsonplaceholder.typicode.com/posts/1
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log(data));


async function getPost() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if(!res.ok) {
    throw new Error(`Erro HTTP! Status: ${res.status}`);   
  };
  
  const data = await res.json();
  console.log(data);
};

getPost();
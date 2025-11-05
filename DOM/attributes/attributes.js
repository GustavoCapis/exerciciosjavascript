//hasAttribute
//Pergunta se tem algum atributo
console.log(document.getElementById('element').hasAttribute('class'));
console.log(document.querySelector(".div").hasAttribute('id'));

//getAttribute
//Pergunta se tem algum atributo e traz o valor
let atributoDiv = document.querySelector('#element').getAttribute('class');
console.log(atributoDiv); //Vai mostrar "paragrafo" que é o nome da classe desse elemento

//setAttribute
//Altera ou aplica o atributo
let atributoDiv2 = document.querySelector(".div")
atributoDiv2.setAttribute('style', 'background: #ccc')
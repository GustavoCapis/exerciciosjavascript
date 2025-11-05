//Contar vogais
const palavra = "javascript";

// Conte quantas vogais tem na string e mostre o resultado.
let vogais = 0;
for (let letra of palavra){
    "aeiou".includes(letra) && vogais++; //um jeito elegante de executar ternário, basicamente diz: se for verdadeiro execute o da direita 
};
console.log(vogais);
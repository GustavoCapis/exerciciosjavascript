//getElementById - Ids deve serm ÚNICOS 
document.getElementById('idCustomizada').innerHTML = "<strong>Eu sou conteúdo HTML do JS<strong>"; //innerHTML permite tags
document.getElementById('idCustomizadaDois').innerText = "Eu sou um texto simples"; //innerText altera apenas texto

//com timeout
setTimeout(() => {
   document.getElementById('idCustomizadaTres').innerHTML = "<strong>Eu sou conteúdo HTML do JS com timeout<strong>";
 
}, 3000);//O tempo é em milisegundos então 3000 = 3s

//getElementsByName 
document.getElementsByName('paragrafo')[0].innerHTML = "<strong>Sou um parágrafo</strong>"; //Os nomes podem ser repetidos em mais de uma tag então para escolher um deles deve-se dizer o índice[] do que você quer alterar
document.getElementsByName('paragrafo')[1].innerText = "Também sou um parágrafo";
document.getElementsByName('paragrafo')[2].innerHTML = "<i> Parágrafo três </i>";

//getElementsByClassName
//Parecido com getElementsByName só que pega pelo nome da classe
document.getElementsByClassName('meuParagrafo')[0].innerText = "Somos todos parágrafos da mesma classe!";
document.getElementsByClassName('meuParagrafo')[1].innerText = "Somos todos parágrafos da mesma classe!";
document.getElementsByClassName('meuParagrafo')[2].innerText = "Somos todos parágrafos da mesma classe!";

//getElementsByTagName
//Parecido com getElementsByName só que pega pelo nome da tag
document.getElementsByTagName('h1')[1].innerText = "Elemento selecionado por tagname";
document.getElementsByTagName('h3')[0].innerText = "Elemento selecionado por tagname";
document.getElementsByTagName('h2')[0].innerText = "Elemento selecionado por tagname";

//QuerySelector 
//Método mais moderno e versátil,busca SOMENTE o primeiro elemento que corresponde a um seletor CSS.
document.querySelector('#idQualquer').innerHTML = "<strong>Elemento selecionado por QuerySelector</strong>"; //id em CSS antecede #
document.querySelector('.classeQualquer').innerHTML = "<strong>Elemento selecionado por QuerySelector</strong>"; //classe em CSS antecede.

//QuerySelectorAll
// Pega todos os elementos que batem com o seletor e retorna uma NodeList (uma lista parecida com array)
document.querySelectorAll('.classeP')[0].innerText = "Elemento selecionado por QuerySelectorAll";
document.querySelectorAll('.classeP')[1].innerText = "Elemento selecionado por QuerySelectorAll";
document.querySelectorAll('.classeP')[2].innerText = "Elemento selecionado por QuerySelectorAll";
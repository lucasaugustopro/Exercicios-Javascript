// Adicionar e Mudar elementos no html pelo DOM

// Adicionando um h1 de acordo com oque o usuario digita na janela 

//const nameTag = document.createElement("h1");
// Sempre usar .texContent
//nameTag.textContent = window.prompt("Enter your name");
//document.body.append(nameTag);


// Adicionando um elemento em uma lista no html

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "mango";
myList.append(listItem);
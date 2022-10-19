// Arrow functions 


/* Função usada normalmente  
const saudacao = function (userName){
    console.log(`Hello${userName}`);
}

// Mesma funcão acima mas transformando ela com a sintaxe de uma arrow function

const saudacao = (userName) => console.log(`Hello ${userName}`);

saudacao("Lucas");*/

/*
Segundo exemplo de uma função normal

const percent = function (x,y){
    return x / y * 100 ;
}*/

// Função acima transformada em uma arrow function

const percent = (x,y) => x / y * 100;

console.log(`${percent(10,150)}%`)
 
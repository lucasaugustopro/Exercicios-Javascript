//setInterval chama uma função repetidamente apos um numero de milissegundos ela e uma função assincrona

let count = 0;
// Usuario insere o numero
let max = window.prompt("Contar ate quanto ?");
max = Number(max);
// Criando uma constante onde o setInterval chama a função countUp a cada 1000 milisegundos
const myTimer = setInterval(countUp, 1000);

function countUp(){
    count+=1;
    console.log(count);
    // clearInterval serve para parar o setInterval
    if(count >= max){
        clearInterval(myTimer);
    }
}

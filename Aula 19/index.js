

let symbol = window.prompt("Digite um simbolo para uso");
let rows = window.prompt("Digite o numero de linhas");
let columns = window.prompt("Digite o numero de colunas");

for(let i = 1; i<=rows; i+=1){
    for(let j = 1; j<=columns; j+=1){
        document.getElementById("myRetangulo").innerHTML += symbol;
        }
        document.getElementById("myRetangulo").innerHTML += "<br>"; 
}
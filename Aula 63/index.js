// Detector de aperto de teclas 
// Fazendo a div mexer atraves das setas do teclado
const myDiv = document.getElementById("myDiv");
 
//window.addEventListener("keydown", event => console.log(event.key));

window.addEventListener("keydown", move);

let x = 0;
let y = 0;

// Função que move a div atraves das teclas cima , baixo direita e esquerda

function move (event){
    switch(event.key){
        case "ArrowDown":
        y+=5;
        myDiv.style.top = y + "px";
        break
        case "ArrowUp":
        y-=5;
        myDiv.style.top = y + "px";
        break
        case "ArrowRight":
        x+=5;
        myDiv.style.left = x + "px";
        break
        case "ArrowLeft":
        x-=5;
        myDiv.style.left = x + "px";
        break
    }
}
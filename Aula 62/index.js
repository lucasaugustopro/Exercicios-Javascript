// addEventListener() = Voce consegue colocar varios eventos em um so elemento 
// O mesmo evento pode receber diversas funções

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue);

function changeBlue(){
    alert(`Voce selecionou ${this.id} `)
    this.style.backgroundColor = "blue";
}


/*innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);


function changeRed(){
    innerDiv.style.background = "red";
}

function changeGreen(){
    innerDiv.style.background = "lightgreen";
}*/



let area;
let width;
let height;

width = window.prompt("Digite a largura");
height = window.prompt("Digite a altura");


area = getArea();

console.log("A area e :" , area);

function getArea(width,height){
    let result = width * height;
    return result;

}
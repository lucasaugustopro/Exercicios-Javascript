
//Criando tres arrays
let fruits = ["apple" , "orange" , "bananas" ];
let vegetables = ["carrots", "onions" , "potatos"];
let meat = ["eggs","chicken","fish"];

// Juntando tres arrays em um só
let groceryList = [fruits,vegetables,meat];


// Mostrando todos os itens da junção de todos os array
for (let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}
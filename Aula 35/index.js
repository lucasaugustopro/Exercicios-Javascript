// array.reduce soma todos os elementos de um array

let prices = [5,10,15,20,25,30];
let total = prices.reduce(checkOut);

console.log(`O total e $${total}`);


function checkOut (total,element){
    return total + element;
}
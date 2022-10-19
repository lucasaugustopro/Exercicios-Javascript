// Percorrendo todos os elementos de um array

let prices = [4,8,9,6,5,3];

// Primeira forma de realizar 

/*for(i = 0; i< prices.length; i+=1){
    console.log(prices[i]);
}*/

//Segunda forma

for(let i of prices){
    console.log(i);
}
// array.filter 

let ages = [18,21,24,80,16];
let adults = ages.filter(checkAge);
adults.forEach(print);


function checkAge (element){
    return element >= 18;
}

function print (element){
    console.log(element);
}
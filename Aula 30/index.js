
//Rest paarameters

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;


console.log(sum(a,b,c,d,e));

function sum (...numbers){
    let total = 0;
    for(number of numbers){
        total += number;
    }
    return total;
}
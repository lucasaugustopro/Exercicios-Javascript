// array.sort ordenando um array 

let grades = [200,30,40,20,90];
grades = grades.sort(crescenteSort);
grades = grades.forEach(print);

// Ordenando de forma crescente
function crescenteSort(a,b){
    return a - b;
}

// Ordenando de forma descrecente
function descrecenteSort (a,b){
    return  b - a ;
}

function print (element){
    console.log(element);
}
// array.forEach();

let students = ["spongeboob", "patrick", "squidward"];
students.forEach(captalize);
students.forEach(print);

function captalize (element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print (element){
    console.log(element);
}

console.log(students[0]);
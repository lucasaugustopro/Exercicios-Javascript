// Criando um Array de Objetos

class Car {
    constructor (model,year,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car ("Mustang",2021,"red");
const car2 = new Car ("Corvette",2024,"blue");
const car3 = new Car ("Lambo",2022,"yellow");

// Criando o array de objetos
const cars = [car1,car2,car3];

// Mostrando a propriedade model de todos os objetos

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

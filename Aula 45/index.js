// Static 

class Car {

    static NumberOfCars = 0;
    
    constructor(model){
        
        this.model = model;
        Car.NumberOfCars += 1;

    }
}

const Car1 = new Car ("Mustang");
const Car2 = new Car ("Corvette");

console.log(Car.NumberOfCars);

// Getter e Setter

class Car {
    constructor(power){
        this._power = power;
        this._gas = 32;
    }
    
    get power(){
        return `${this.power}hp`;
    }
    
    get gas(){
        return `${this._gas}L (${this._gas/ 50 * 100}%)`;   
    }
}

let car = new Car(400);

console.log(car.power);
console.log(car.gas);
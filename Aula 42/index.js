// this Referencia um objeto dependendo do contexto atual

const car1 = {
    
    model: "Mustang",
    color: "red",
    year: 2022,

    drive: function (){
    console.log(`Voce esta dirigindo um ${this.model}`);
    },
    brake: function(){
        console.log("Voce esta pisando no freio")
    },
}
const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2002,

    drive: function (){
        console.log(`Voce esta dirigindo um ${this.model}`);
    },
    brake: function(){
        console.log("Voce esta pisando no freio")
    },
}

car1.drive();
car2.drive();
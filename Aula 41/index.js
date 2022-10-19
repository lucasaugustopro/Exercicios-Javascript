// Objects ou Objetos 

const car = {
    
    //Propriedades do objeto = sao caracteristicas do objeto
    model: "Mustang",
    color: "red",
    year: 2022,

    // Metodos do objeto = Metodos sao oque os objetos fazem
    drive: function (){
        console.log("Voce esta dirigindo");
    },
    brake: function(){
        console.log("Voce esta pisando no freio")
    },
}

// Chamando as propriedades do objeto
console.log(car.year);
console.log(car.color);
console.log(car.model);

// Chamando os metodos do objeto
car.brake();
car.drive();

// Super constructor = Quando uma classe filho herda o construtor da classe pai

class Animal {
    //Criando o construtor da classe pai
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    
    //Herdando a classe construtora de Animal com o Super
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
}

//Criando o Objeto das classes criadas
const rabbit = new Rabbit("rabbit",1,40);
const fish = new Fish ("fish",3,60);

//Mostrando todos os atributos

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
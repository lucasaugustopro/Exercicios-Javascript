// Herança Programação Orientada a Objetos em javascript

// Criando a classe Pai
class Animal{
    alive = true;
    
    eat (){
        console.log(`The ${this.name} is eating`);
    }
    sleep(){
        console.log(`The ${this.name} is sleeping`);
    }
}

// Criando as classes filho e herdando os parametros da classe pai atraves do extends
class Rabbit extends Animal {
    name = "rabbit";
    run (){
        console.log(`The ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish"
    swim(){
        console.log(`The ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`The ${this.name} is flying `);
    }
}

// Criando objetos das classes filho
const rabbit =  new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// Utilizando os metodos da Classe pai herdada
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
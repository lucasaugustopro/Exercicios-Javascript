// Metodo construtor = Um metodo especial da classe que aceita argumentos e assina-la propriedades

class Student {
    // Criando o metodo construtor
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
}

// Criando um objeto e passando as propiedades 
const student1 = new Student("Lucas",13,1.3);
console.log(student1.name);
console.log(student1.age);


console.log(student1.gpa);
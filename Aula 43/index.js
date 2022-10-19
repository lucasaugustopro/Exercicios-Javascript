// Classes = Classes sao como moldes para os objetos

// Criando uma classe
class Player {
    score = 0;
    pause(){
        console.log("O jogador pausou o jogo")
    }
    exit(){
        console.log("O jogador saiu do jogo")
    }
}

// Criando um objeto    a classe Player

const player1 = new Player();

console.log(player1.score);

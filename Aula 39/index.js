// Nested functions

let userName = "Lucas";
let userInbox = 0;

login();

function login (){
    displayUserName();
    displayUserInbox();

    function displayUserName (){
        console.log(`Bem-Vindo ${userName}`);
    }
    
    function displayUserInbox (){
        console.log(`Voce tem ${userInbox} mensagens`);
    }
    
}


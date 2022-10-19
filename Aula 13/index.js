
document.getElementById("myButton").onclick = function(){
    const visa = document.getElementById("visa");
    const masterCard = document.getElementById("masterCard");
    const payPal = document.getElementById("payPal");


    const myCheckBox = document.getElementById("myCheckBox");
   
     if(myCheckBox.checked){
        console.log("Voce está inscrito");
    }
    else{
        console.log("Voce não está inscrito");
    }

    if(visa.checked){
        console.log("Voce esta pagando com um cartao visa");
    }
    else if(masterCard.checked){
        console.log("Voce esta pagando com um cartao MasterCard");
    }
    else if (payPal.checked){
        console.log("Voce esta pagando com um cartao PayPal")
    }
    else{
        console.log("Voce precisa selecionar uma das opções")
    }

}
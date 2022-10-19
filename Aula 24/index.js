
document.getElementById("submitButton").onclick = function(){
    let temp;
    
    if(document.getElementById("cButton").checked ){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "Graus celsius";

    } else if (document.getElementById("fButton").checked){

        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahenreit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "Graus Fahenreit";
    
    }
    else{
    
        document.getElementById("tempLabel").innerHTML = "Selecione um dos botoes";
    
    }
}


function toCelsius (temp){
    return (temp - 32) * (5/9);
}

function toFahenreit (temp){
    return temp * 9 / 5 + 32;

}


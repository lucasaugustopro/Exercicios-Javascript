// async = Faz uma função retornar uma promise

// Criando a funcão async 
async function loadFile (){
    let fileLoaded = false;
    
    // Se usa o return pra retornar um resolve 
    if(fileLoaded){
        return "File is loaded";
    }
    // Se uma throw para retornar um reject
    else{
        throw "File NOT loaded";
    }
}

// Usando o then eo catch na async function criada
loadFile().then((value) => console.log(value))
        .catch( error =>console.log(error));
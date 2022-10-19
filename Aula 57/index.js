// await = Faz um async function esperar por uma promise


async function loadFile (){
    let fileLoaded = false;

    if(fileLoaded){
        return "File is loaded";
    }
    else{
        throw "File NOT loaded";
    }
}

// await so funciona dentro de uma função async
// Elimina a necessidade de um then e catch
// E necessario circundar o await com try catch para ele pegar o reject
async function startProcess (){
    try{
        let message = await loadFile();
        console.log(message);

    }
    catch(error){
        console.log(error);
    }
}
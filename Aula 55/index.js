// Promises sao objetos que encapsulam o resultado de uma operação assincrona como uma "promessa"
// do mundo real
// Promises tem um estado 'pending' 'fulfilled' e 'reject' 


const promise = new Promise((resolve,reject) =>{
    let fileLoaded = true;
    if(fileLoaded){
        resolve("File is loaded");
    }
    else{
        reject("File NOT loaded");
    }
})

// Then pega o valor quando e resolve eo catch quando e reject
promise.then((value) => console.log(value))
        .catch( error =>console.log(error));
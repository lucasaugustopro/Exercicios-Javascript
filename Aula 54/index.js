// Assincrono e Sincrono
// Sincrono e um codigo que executa passo-a-passo (começa agora e finaliza agora)
// Assincrono nao tem ordem (começa agora e finaliza depois de um certo tempo)

console.log("START");
setTimeout(() => console.log("Isso e assincrono"),3000);
console.log("END");
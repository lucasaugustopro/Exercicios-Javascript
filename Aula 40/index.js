// MAP
const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",60],
    ["underwear",50]

])

let shoppingCart = 0;

// Pegando um objeto especifico do Map
shoppingCart += store.get("t-shirt");
console.log(shoppingCart);

// Adicionando um novo objeto
store.set("hat", 22);

// Deletando um objeto
store.delete("hat");

// Mostrando a quantidade de elementos  do Map
console.log(store.size);
store.forEach ((value,key) => console.log(`${key} $${value}`));

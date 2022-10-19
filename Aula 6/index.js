let a;
let b;
let c;

a = window.prompt ("Digite o Lado A");
a = Number(a);

b = window.prompt ("Digite o Lado B");
b = Number(b);

c = Math.pow (a,2) + Math.pow (b,2) ;
c = Math.sqrt(c);

console.log("O Lado C e ", c);


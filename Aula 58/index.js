// Modules no Javascript = Voce pode importar codigos pre-escritos pra usar em qualquer lugar 
// Podendo importar funções ou valores


// Usando import para importar o valor de pi e as funções getarea e getcircumference do arquivo math_until

//importando uma coisa de cada vez
//import { PI,getCircumference,getArea } from "./math_until.js";
//console.log(PI);


//importando tudo 
import * as MathUtil from "./math_until.js";


console.log(MathUtil.PI);

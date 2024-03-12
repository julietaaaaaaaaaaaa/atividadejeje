//Criando uma função que aceita uma expressão matemática como uma string e retorna o resultado da
//operação (Utilize try...catch para lidar com erros de sintaxe na expressão)

function calculeExpresaomatematica(expressão1,expressão2){
const resultado = (expressão1*expressão2); //chamando
if (resultado){
    throw new Error("Expressao inválida");
}
return expressão1*expressão2;
} try {
    const result = calculeExpresaomatematica("6*2"); //colocando expressao em teste
    console.log("resultado:");
} catch(error){
console.log("Não foi possível calcular" , error.message); // string nao consegue ser calculada
}


















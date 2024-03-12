//Criando uma função que aceita um array e um índice como parâmetros e retorna o elemento correspondente no
//índice especificado.(Utilize try...catch para lidar com índices fora do intervalo do array)

function aceitaArrayIndice(array,indice){ 
if(indice < 0 || indice >= array.lenght){       //lenght; determinar indice     
    throw new Error("indice não encontrado");
}
return array[indice];
}
try{
    const meuarray = [1,2,3,4,5,6,7];   //parametro
    console.log("o indice é:");
    console.log(aceitaArrayIndice(meuarray, 10)); //chamando const e funçao, indicando qual o indice
}catch(error){
    console.log("indice nao encontrado", error.message);
}
    
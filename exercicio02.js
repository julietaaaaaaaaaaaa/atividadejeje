//Criando uma função que aceita uma string como entrada e tenta converter-la para um numero (utilizando try..catch para lidar
// com casos em que a string nao seja um numero válido
function converteParaNumero(string){
  const numero = parseInt(string)
if(undefined == numero){
    throw new Error ("Número inválido");
}
return numero;
}
try {
    const numero = string ("Esse arrocha é pra você");
    console.log("rs");
}catch(error){
    console.log ("ocorreu um erro" , error.message);
}



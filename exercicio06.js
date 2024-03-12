// Crie uma função que executa uma operação após um certo tempo (por exemplo, imprimir uma mensagem após 5
//segundos). Utilize try...catch para lidar com erros durante a execução da operação.
function operacao(tempo){
    if(tempo < 5000) {           // deixando tempo minímo, 5 segundos
        throw new Error("tempo precipitado");
    } 
    return tempo;
}

try {  
const tempo = 1000; //variavel que define o tempo pro delay
operacao(tempo) // chama funçao verificando tempo

setTimeout(() => {                                           //funçao anonima
    console.log("operação executada após cinco segundos.");
  }, tempo);

}catch(error){
    console.log("Ocorreu um erro ma operação", error.message);
}

 


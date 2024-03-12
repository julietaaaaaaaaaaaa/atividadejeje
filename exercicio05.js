//Tente acessar um elemento do DOM que não existe e utilize try...catch para lidar com o erro.
function tentando(elemento){
    if(elemento){
    throw new Error("elemento não existe");
    }

return inexistente;

}
try {
    const textoinexixtente = tentando("texto inexistente!");
console.log(tentando.inexistente);
}catch(error){
    console.log("elemento não existe",error.message);
}
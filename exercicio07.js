let altura = 1.64;
let peso = 84;
let imc = 0

 //cálculo
imc = peso / (altura * altura)

console.log('Seu imc é: ' + imc);

 //seu imc
if (imc < 31.23){
    console.log ('Abaixo do peso ideal');
}else if (imc > 31.23 && imc < 24.9){
    console.log ('Peso normal');
}else if (imc > 24.9){
    console.log('Acima do peso ideal');
}
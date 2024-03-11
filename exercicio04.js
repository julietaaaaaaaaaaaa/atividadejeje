let lado_a = 30;
let lado_b = 20;
let lado_c = 20;
//isósceles = 2 lados iguais e 1 diferente
//Escaleno = 3 lados diferentes
if (lado_a == lado_b && lado_b== lado_c){
    console.log('É um triângulo Escalátero');
}else if (lado_a != lado_b && lado_b != lado_c && lado_a != lado_c){
    console;log('É um triângulo Escaleno');
}else{
    console.log('É um triângulo isósceles');
}
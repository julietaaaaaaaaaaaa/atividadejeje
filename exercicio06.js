

let palavra = 'ana'
let palavraAoContrario = ''

palavraAoContrario = palavra.split('').reverse().join('')

if (palavra === palavraAoContrario){
    console.log('A palavra informada é um palindromo');
} else{
    console.log('Não é um palindromo') // palavra que lida da direita para esquerda forma o mesmo significado da esquerda para direita
}
let ano = 2024;
if((ano% 4 === 0 && 100 !== 0) || ano & 400 === 0) {
console.log('Ano bissesxto');
} else {
    console.log('Não é ano bissexto');
}
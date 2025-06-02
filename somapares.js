
// Exercicío sobre soma de números pares existentes entre 0 a 200
// Ou usar for (let i = 0; i <= 200; i+2)


let soma = 0;
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        soma++;
    }
}
console.log("Pares existentes entre 0 e 200: " + soma);


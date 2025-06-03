
// Exercício sobre multiplicação 0 a número informado
// Sem operador ternário

let N = 8;


let soma = 0;
for (let i = 0; i <= N; i++) {

// soma = soma === 0 ? 1 : soma;

// soma *= i === 0 ? 1 : i;

    if (soma === 0) {
       soma =  1;
    }
    if (i !== 0){

// soma *= i;        
        soma = soma * i;
    }
    
}
console.log("A multiplicação de 0 a " + N + " é: " + soma);
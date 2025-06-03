
// Exercício sobre fibonacci, imprimir sequência de termos informado


const readline = require('readline');

// readline para ler entrada no vs code com node.js

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("digite a quantidade de termos da seguencia: ", function(input){
    const numero = parseInt(input);

    let fibonacci = [];

    for (let i =0; i < numero; i++){
        if (i === 0){
            fibonacci.push(0);
        }else if (i === 1){
            fibonacci.push(1);
        }else{
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }
        console.log("A sequencia de fibonacci com: " + numero + " termos")
        console.log(fibonacci.join(", "));
        
        
    rl.close();
})
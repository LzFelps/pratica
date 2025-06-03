let par = 0
let impar = 0



for(let i = 0; i <= 101; i++){
    
    if(i % 2 === 0){
        par = par - i;
    }else{
        impar = impar + i;
    }
 }

console.log("Subtração dos números pares de 0 a 100: " + par)
console.log("Soma dos números impares de 0 a 100: " + impar)
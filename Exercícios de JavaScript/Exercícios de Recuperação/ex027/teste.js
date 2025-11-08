// alert("Oá, Mundo!");
//Isto é um IIFE(Imediately Invoked Function Expression)
(function(x, y){
    console.log("Esta função executa sem ser chamada.")
    console.log("A soma é " + (x + y))
})(3, 1);

let res1 = (function(x, y){
    console.log("Esta é uma outra função assim.")
    return x * y
})(10, 3)

console.log("O reusltado do produto no IIFE é " + res1)
console.log("")

setTimeout(() => {
    console.log("Testando apenas...")
}, 0)

let minhaPromessa = new Promise((resolve, reject) =>{
    console.log("Iniciando a primeira Promise.");
    setTimeout(function(){
        console.log("Eu sou a mensagem de SetTimeout.")
    }, 2000)
    let reusltPromise = 3 + 3;

    if(reusltPromise == 6){
        resolve(reusltPromise)
    }else{
        reject("A Promise está errada.")
    }
})

// console.log(mino())

minhaPromessa.then((res) => {
    console.log("Resultado: " + res)
}).catch((erro) =>{
    console.log("Erro: " + erro)
}).finally(function(){
    console.log("Eu sempre serei executado.")
})
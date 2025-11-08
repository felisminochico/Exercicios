// alert("Olá, Mundo!");
function retornarAlgo(){
    return new Promise(function(resolve, reject){
        let resultado = 0;

        if(resultado >= 10){
            resolve("O Resultado está ótimo.")
        }else{
            reject("ERRO, resultado está muito abaixo.")
        }
    })
}

retornarAlgo().then((res) => {
    console.log("Status: " + res)
}).catch((erro) => {
    console.log("Status: " + erro)
}).finally(() => {
    console.log("Promise concluído com sucesso.")
})

console.log("")

function baixarArquivo(){
    return new Promise(function(resolve, reject){
        setTimeout(() => console.log("Inicializando o Download..."), 0)
        let arquivo = 100;
        setTimeout(() => {
            if(arquivo == 100){
                resolve("Download concluído com sucesso.")
            }else{
                reject("Download falhou.")
            }
        }, 2000)
    })
}

baixarArquivo().then((res) => {
    console.log("Status: " + res)
}).catch((erro) => {
    console.log("Status: " + erro)
}).finally(() => {
    console.log("Promise concluída.")
})
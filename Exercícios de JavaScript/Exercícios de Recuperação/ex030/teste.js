// alert("Olá, Mundo!")
try{
    let res = 10 + y
    console.log(res)
}catch{
    console.log("ALgo deu errado")
}

// new Promise((resolve, reject) => {
//     const dados = {
//         nome: "Mino",
//         idade: 20
//     }
//     k()

//     resolve(dados);
// }).then((res) => {
//     console.log("O nome enviado é " + res.nome)
// }).catch(() =>{
//     console.log("Algo deu errado.")
// })

async function testar(){
    return 30;
    
}

testar().then(res => console.log("Resposta: " + res)).catch((erro) => {
    console.log("ERRO:" + erro)
})
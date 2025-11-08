// alert("Olá, Mundo!");
// console.log("Olá, Mundo!");
const valores = window.document.querySelectorAll("#valores span");

function verificar(n1, n2){
    let res = Number(n1) / Number(n2);

    if(Number.isInteger(res) === false){
        console.log(`Não Exato.`);
    }else{
        console.log(`${n1} / ${n2} = ${res}.`)
    }
}

// for(c = 600; c < 800; c++){
//     verificar(c, 14);
// }

function verificar2(){
    let n1 = Number(Math.floor(Math.random() * ((800 - 600) + 1) + 600));
    let n2 = Number(Math.floor(Math.random() * ((40 - 14) + 1) + 14));
    let res = n1 / n2;
    
    if(Number.isInteger(res) === false){
        verificar2();
    }else{
        valores[0].innerHTML = n1;
        valores[1].innerHTML = n2;
        console.log(`${n1} / ${n2} = ${res}`)
    }
}

verificar2()

const vet = [4, 3, 3];
let t = vet.reduce((res, valor, chave) =>{
    return res *= valor;
    // console.log(res);
}, 1)

console.log(t)
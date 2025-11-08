// alert("Olá, Mundo!");
const main = window.document.getElementsByTagName("main")[0];
const caixa = window.document.getElementById("caixa");

function animar(){
    caixa.style.animationName = "testar";
    caixa.style.animationDuration = "3s";
}

main.addEventListener("click", () =>{
    animar()
})

// caixa.addEventListener("click", function(e){
//     alert("Clicaste na Caixa.")
//     e.stopImmediatePropagation()
// })
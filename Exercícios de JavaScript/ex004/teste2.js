let div = window.document.getElementsByTagName('div')[0]
let nome = window.document.querySelector('input#nome');
let Número1 = window.document.getElementById('n1');
let Número2 = window.document.getElementsByName('n2')[0];
let botão = window.document.getElementsByTagName('button')[0];
let resultado = window.document.createElement('p');
// if(nome.value.length == 0 || Número1.value.length == 0){
//     botão.disabled = 'disabled';
// }else{
//     botão.disabled = 'none';
// }
botão.addEventListener('click', clicou)
Número1.addEventListener('input', digitar)
Número2.addEventListener('input', digitar)

function digitar(){
    if((Número1.value.length == 0) || (Número2.value.length == 0) || (nome.value.length == 0)){
        botão.disabled = 'disabled';
        botão.style.backgroundColor = '#80808048'
        botão.style.color = '#80808098'
    }else{
        botão.disabled = '';
        botão.style.backgroundColor = 'blue'
        botão.style.color = 'white'
    }
}

function clicou(){
    resultado.textContent = `${nome.value}, a Soma entre ${Número1.value} + ${Número2.value} é igual a ${(Number(Número1.value) + Number(Número2.value))}`;
    div.appendChild(resultado)
}
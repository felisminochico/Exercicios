//alert('Olá, Mundo!')
let nome = window.document.getElementsByTagName('input')[0];
let número1 = window.document.getElementById('n1');
let número2 = window.document.querySelector('input#n2');
let resultado = window.document.getElementsByTagName('output')[0];
let calcular = window.document.getElementsByTagName('input')[3];

// Primeira Opção
// function resolver(){
//     resultado.innerHTML = `${nome.value}, a soma entre ${número1.value} + ${número2.value} é igual a ` + (Number(número1.value) + Number(número2.value)) + '.';
// }

// Segunda Opção
let resolver = function(x, y, z){
    resultado.innerHTML = x + ', a soma entre ' + y + ' + ' + z + ' é igual a ' + (y + z);
}

function clicou(){
    let n = nome.value
    let n1 = Number(número1.value)
    let n2 = Number(número2.value)
    resolver(n, n1, n2)
}

calcular.addEventListener('click', clicou)

// Terveira Opção

// function Soma(x, y, z){
//     resultado.innerHTML = x + ', a soma entre ' + y + ' + ' + z + ' é igual a ' + (y + z);
// }

// function clicou(){
//     Soma(nome.value, Number(número1.value), Number(número2.value))
// }

// calcular.addEventListener('click', clicou)
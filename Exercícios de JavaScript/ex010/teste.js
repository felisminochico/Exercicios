let Número1 = window.document.getElementById('n1')
let Número2 = window.document.getElementsByName('n2')[0];
let Botão = this.document.getElementsByTagName('input')[2]
let Resultado = window.document.querySelector('#resultado');

function mostrar(z){
    Resultado.innerHTML += "O Resultado é igual a " + z;
}

function Soma(x, y, callback){
    let res = x + y
    Resultado.innerHTML = 'A Soma entre ' + x + ' + '+  y + ' é  ' + (x + y);
    callback(res)
}

function Multiplicacao(x, y){

}

Soma(5, 12, mostrar)
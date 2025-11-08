// alert('Olá, Mundo!');
// console.log('Felismino')
let numeroTabuada = window.document.getElementById('numero')
let inicioContagem = window.document.querySelector('input#inicio')
let fimContagem = window.document.getElementsByName('fim')[0];
let botaoDivisao = window.document.getElementsByTagName('button')[0]
let botaoMultiplicacao = window.document.getElementsByTagName('button')[1]
let botaoSoma = window.document.getElementsByTagName('button')[2]
let botaoSubtracao = window.document.getElementsByTagName('button')[3];
let resultadoTabuada = window.document.getElementsByTagName('p')[3];

botaoDivisao.addEventListener('click', divisao)
botaoMultiplicacao.addEventListener('click', multiplicacao)
botaoSoma.addEventListener('click', soma)
botaoSubtracao.addEventListener('click', subtracao)

function divisao(){
    let n = Number(numeroTabuada.value)
    let i = Number(inicioContagem.value);
    let f = Number(fimContagem.value)
    let resultadoFinal = 0;
    if(i < f){
        resultadoTabuada.innerHTML = '';
        for(let c = i; c <= f; c++){
            resultadoFinal = n / c;
            resultadoTabuada.innerHTML += n + ' / ' + c + ' = ' + resultadoFinal.toFixed(2).replace('.', ',') + '<br>';
        }
    }else{
        if(i > f){
           resultadoTabuada.innerHTML = '';
           for(let c = i; c >= f; c--){
            resultadoFinal = n / c
            resultadoTabuada.innerHTML += `${n} / ${c} = ${resultadoFinal.toFixed(2).replace('.', ',')} <br>`;
           } 
        }else if(i == f){
            resultadoTabuada.innerHTML = 'Os valores dos campos Início da Contagem e Fim da Contagem são iguais. Diferencie-os.'
        }
    }
}

function multiplicacao(){
    alert('Clicaste no Botão de Multiplicação.')
}

function soma(){
    alert('Clicaste no Botão de Soma.')
}

function subtracao(){
    alert('Clicaste no Botão de Subtração.')
}
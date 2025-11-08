// let título = window.document.getElementsByTagName('h1')[0];
// let número = 4;
// let div = window.document.getElementsByTagName('div')[0];
// let parágrafo = window.document.createElement('p');
// let select = window.document.getElementsByName('select')[0];
// let option = window.document.createElement('option');

// título.setAttribute('id', 'teste');

// option.text = 'Mino...'

// parágrafo.textContent = 'Testandoooooo...'

// parágrafo.setAttribute('class', 'teste2')

// div.appendChild(parágrafo)
// select.appendChild(option)

let div = window.document.getElementsByTagName('div')[0];
let Número1 = window.document.getElementById('n1');
let Número2 = window.document.getElementById('n2');
let calcular = window.document.getElementById('botao');
let vetor = [];
// let objeto = {
//     nome: 'Mino',
//     número: 4,
//     idade: 19
// }


calcular.addEventListener('click', clicou);

function clicou(){
    console.log('O vetor ainda está vazio.')
    console.log(vetor)
    for(let c = 1; c <= 10; c++){
        vetor[c] = c
    }

    console.log('O vetor agora está cheio:')
    for(let c in vetor){
        console.log(vetor[c])
    }
}

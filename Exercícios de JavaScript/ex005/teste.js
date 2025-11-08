// alert('Olá, Mundo!')
let vetor = []
let Nome = window.document.getElementById('nome')
let Número = window.document.querySelector('input#numero')
let Botão = window.document.getElementsByTagName('input')[2];

Botão.addEventListener('click', adicionar)

function verificarGeral(no, nu){
    console.log(`Os valores ${no} e ${nu} já foram adicionados.`)
}   

function verificarNome(no){
    console.log(`O valor ${no} já foi adicionado.`)
    vetor.push(Número.value)
}

function verificarNumero(nu){
        vetor.push(Nome.value)
        console.log(`O valor ${nu} já foi adiconado.`)
}

function adicionar(){
    if((vetor.indexOf(Nome.value) == -1) && (vetor.indexOf(Número.value) == -1)){
        vetor.push(Nome.value)
        vetor.push(Número.value)
        console.log(vetor)
    }else if(vetor.indexOf(Nome.value) != -1 && vetor.indexOf(Número.value) != -1){
            verificarGeral(Nome.value, Número.value)
    }else if(vetor.indexOf(Nome.value) != -1){
            verificarNome(Nome.value)
    }else if(vetor.indexOf(Número.value) != -1){
            verificarNumero(Número.value)
    }
}
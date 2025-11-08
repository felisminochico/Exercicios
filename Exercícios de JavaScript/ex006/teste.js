//alert('Olá, Mundo!')

//Variáveis Globais
let objeto = {nome: '', sobrenome: '', idade: 0, vetor: []}
let Nome = window.document.getElementById('nome')
let Sobrenome = window.document.getElementsByName('sobrenome')[0]
let Idade = window.document.querySelector('input#idade')
let botão = window.document.getElementsByTagName('button')[0]

//Criação de Eventos
botão.addEventListener('click', adicionar)
Nome.addEventListener('input', digitar)
Sobrenome.addEventListener('input', digitar)
Idade.addEventListener('input', digitar)

//Função do evento Input
function digitar(){
    if((Nome.value.length == 0 || Sobrenome.value.length == 0) || (Idade.value.length == 0)){
        botão.disabled = 'disabled';
        botão.style.backgroundColor = 'rgba(0, 128, 0, 0.363)'
        botão.style.color = 'rgba(0, 0, 0, 0.448)'
    }else if((Nome.value.length > 0 && Sobrenome.value.length > 0) && (Idade.value.length > 0)){
        botão.disabled = '';
        botão.style.backgroundColor = 'rgb(9, 180, 9)'
        botão.style.color = 'black'
    }
}

//Funções de condições dos campos da Página.
function verificarNomeSobrenomeIdade(no, so, ida){
    console.log(`O valores ${no}, ${so} e ${ida} já foram adicionados.`)
}

function verificarNomeSobrenome(no, so){
    console.log(`O valores ${no} e ${so} já foram adicionados.`)
}

function verificarNomeIdade(no, ida){
    console.log(`O valores ${no} e ${ida} já foram adicionados.`)
}

function verificarSobrenomeIdade(so, ida){
    console.log(`O valores ${so} e ${ida} já foram adicionados.`)
}

function verificarIdade(ida){
    console.log(`O valor ${ida} já foi adicionado.`)
}

function verificarSobrenome(so){
    console.log(`O valor ${so} já foi adicionado.`)
}

function verificarNome(no){
    console.log(`O valor ${no} já foi adicionado.`)
}

//Função do evento Click para adicionar valores dentro do Vetor que está dentro do Objeto.
function adicionar(){
    if((objeto.vetor.indexOf(Nome.value) == -1 && objeto.vetor.indexOf(Sobrenome.value) == -1) && (objeto.vetor.indexOf(Idade.value))){
        objeto.vetor.push(Nome.value)
        objeto.vetor.push(Sobrenome.value)
        objeto.vetor.push(Idade.value)
        console.log(objeto.vetor)
    }else if((objeto.vetor.indexOf(Nome.value) == -1 && objeto.vetor.indexOf(Sobrenome.value) == -1) && (objeto.vetor.indexOf(Idade.value) != -1)){
        objeto.vetor.push(Nome.value)
        objeto.vetor.push(Sobrenome.value)
        verificarIdade(Idade.value)
    }else if((objeto.vetor.indexOf(Nome.value) == -1 && objeto.vetor.indexOf(Idade.value) == -1) && (objeto.vetor.indexOf(Sobrenome.value) != -1)){
        objeto.vetor.push(Nome.value)
        objeto.vetor.push(Idade.value)
        verificarSobrenome(Sobrenome.value)
    }else if((objeto.vetor.indexOf(Nome.value) != -1) && (objeto.vetor.indexOf(Sobrenome.value) == -1 && objeto.vetor.indexOf(Idade.value) == -1)){
        objeto.vetor.push(Sobrenome.value)
        objeto.vetor.push(Idade.value)
        verificarNome(Nome.value)
    }else if((objeto.vetor.indexOf(Nome.value) != -1 && objeto.vetor.indexOf(Sobrenome.value) != -1) && (objeto.vetor.indexOf(Idade.value) != -1)){
        verificarNomeSobrenomeIdade(Nome.value, Sobrenome.value, Idade.value)
    }else if(objeto.vetor.indexOf(Nome.value) != -1 && objeto.vetor.indexOf(Sobrenome.value) != -1){
        verificarNomeSobrenome(Nome.value, Sobrenome.value)
    }else if(objeto.vetor.indexOf(Nome.value) != -1 && objeto.vetor.indexOf(Idade.value) != -1){
        verificarNomeIdade(Nome.value, Idade.value)
    }else if(objeto.vetor.indexOf(Sobrenome.value) != -1 && objeto.vetor.indexOf(Idade.value) != -1){
        verificarSobrenomeIdade(Sobrenome.value, Idade.value)
    }
}
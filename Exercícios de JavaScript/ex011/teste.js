let botao = window.document.getElementsByTagName('button');

botao[1].style.opacity = 0.1;
botao[1].disabled = true
botao[1].style.cursor = 'auto'

function teste1(){
    botao[0].style.animation = 'teste 3.5s 1 forwards'

    setTimeout(function(){
        botao[1].style.opacity = '1';
        botao[1].disabled = false
        botao[1].style.cursor = 'pointer' 
    }, 5500)
}

function teste2(){
    alert('Clicaste no Botão 2')
}
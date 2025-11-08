// alert('Olá, Mundo!');
let Resultado1 = window.document.getElementsByClassName('resultados-section-1')
let Resultado2 = window.document.getElementsByClassName('resultados-section-2')
let Resultado3 = window.document.getElementsByClassName('resultados-section-3');
let Resultado4 = window.document.getElementsByClassName('resultados-section-4');
let Section2 = window.document.getElementById('section-2');
let Section3 = window.document.getElementById('section-3');
let Section4 = window.document.getElementById('section-4');
let Titulo2 = window.document.getElementById('titulo-2')
let Titulo3 = window.document.getElementById('titulo-3')
let Titulo4 = window.document.getElementById('titulo-4')
let pontos = 0;
let vidas = 3;
let conteudoPontos = window.document.getElementById('pontos');
let conteudoVidas = window.document.getElementById('vidas');

//Desabilitação dos botões do Resultado 4
function quartoResultadoDesabilitar(){
    for(c = 0; c <= 3; c++){
        Resultado4[c].style.cursor = 'auto';
        Resultado4[c].disabled = true
    }
} 

//Desabilitação dos Resultados ainda não disponíveis
for(let c = 0; c <= 3; c++){
    Resultado2[c].disabled = true
    Resultado2[c].style.color = 'black'
    Resultado2[c].style.cursor = 'auto'
    Resultado3[c].disabled = true
    Resultado3[c].style.color = 'black'
    Resultado3[c].style.cursor = 'auto'
    Resultado4[c].disabled = true
    Resultado4[c].style.color = 'black'
    Resultado4[c].style.cursor = 'auto'
}

function primeiroResultado(x){
    if(x == 6){     
        Resultado1[0].style.animation = 'teste2 3.8s forwards'
        Resultado1[3].style.transitionProperty = 'background-color, color'
        Resultado1[3].style.transitionDelay = '3.7s';
        Resultado1[3].style.backgroundColor = 'rgb(12, 139, 12)'
        //Desabilitação dos outros Resultados.
        for(c = 0; c <= 3; c++){
            Resultado1[c].disabled = true
            Resultado1[c].style.color = 'black'
            Resultado1[c].style.cursor = 'auto'
        }
        Resultado1[3].style.color = 'white'
    
    }else if(x == 20){
            //Desabilitação dos outros resultados
            for(c = 0; c <= 3; c++){
                Resultado1[c].disabled = true
                Resultado1[c].style.color = 'black'
                Resultado1[c].style.cursor = 'auto'
            }

            Resultado1[1].style.animation = 'teste2 3.8s forwards'
            Resultado1[3].style.transitionProperty = 'background-color, color'
            Resultado1[3].style.transitionDelay = '3.7s';
            Resultado1[3].style.backgroundColor = 'rgb(12, 139, 12)'
            Resultado1[3].style.color = 'white'
    }else{
        if(x == 32){
            //Desabilitação dos outros resultados
            for(c = 0; c <= 3; c++){
                Resultado1[c].disabled = true
                Resultado1[c].style.color = 'black'
                Resultado1[c].style.cursor = 'auto'
            }

            Resultado1[2].style.animation = 'teste2 3.8s forwards'
            Resultado1[3].style.transitionProperty = 'background-color, color'
            Resultado1[3].style.transitionDelay = '3.7s';
            Resultado1[3].style.backgroundColor = 'rgb(12, 139, 12)'
            Resultado1[3].style.color = 'white'
        }else if(x == 16){
                //Desabilitação dos outros resultados
                for(c = 0; c <= 3; c++){
                    Resultado1[c].disabled = true
                    Resultado1[c].style.color = 'black'
                    Resultado1[c].style.cursor = 'auto'
                }

                Resultado1[3].style.animation = 'teste 3.8s forwards'
        }
    }

    setTimeout(function(){
        Titulo2.style.opacity = '1'
        Section2.style.opacity = '1';
        if(Section2.style.opacity == '1'){
            for(c = 0; c <= 3; c++){
                Resultado2[c].style.cursor = 'pointer';
                Resultado2[c].disabled = false;
            }
        }
    }, 5500)
}

function segundoResultado(x){
    if(x == 50){
        Resultado2[0].style.animation = 'teste2 3.8s forwards';
        
        for(c = 0; c <= 3; c++){
            Resultado2[c].style.cursor = 'auto';
            Resultado2[c].disabled = true
        }

        Resultado2[2].style.transitionProperty = 'background-color, color';
        Resultado2[2].style;transitionDelay = '3.5s'
        Resultado2[2].style.backgroundColor = 'rgb(12, 139, 12)'
        Resultado2[2].style.color = 'white';
    }else{
        if(x == 63){
            Resultado2[1].style.animation = 'teste2 3.8s forwards';
            for(c = 0; c <= 3; c++){
                Resultado2[c].style.cursor = 'auto';
                Resultado2[c].disabled = true
            }

            Resultado2[2].style.transitionProperty = 'background-color, color';
            Resultado2[2].style;transitionDelay = '3.5s'
            Resultado2[2].style.backgroundColor = 'rgb(12, 139, 12)'
            Resultado2[2].style.color = 'white';
        }else{
            if(x == 60){
                Resultado2[2].style.animation = 'teste 3.8s forwards';
                for(c = 0; c <= 3; c++){
                    Resultado2[c].style.cursor = 'auto'
                    Resultado2[c].disabled = true
                }
            }else{
                if(x == 57){
                    Resultado2[3].style.animation = 'teste2 3.8s forwards';
                    for(c = 0; c <= 3; c++){
                        Resultado2[c].style.cursor = 'auto'
                        Resultado2[c].disabled = true
                    }

                    Resultado2[2].style.transitionProperty = 'background-color, color';
                    Resultado2[2].style;transitionDelay = '3.5s'
                    Resultado2[2].style.backgroundColor = 'rgb(12, 139, 12)'
                    Resultado2[2].style.color = 'white';
                }
            }
        }
    }

    Section3.style.opacity = 1;
    Section3.style.transition = 'opacity 1ms 3.7s';
    Titulo3.style.opacity = 1;
    Titulo3.style.transition = 'opacity 1ms 3.7s'

    for(c = 0; c <= 3; c++){
        Resultado3[c].style.cursor = 'pointer';
        Resultado3[c].disabled = false
    }
}

function terceiroResultado(x){
    if(x == 24){
        Resultado3[0].style.animation = 'teste2 3.8s forwards'
        Resultado3[2].style.transitionProperty = 'background-color, color'
        Resultado3[2].style.transitionDelay = '3.7s';
        Resultado3[2].style.backgroundColor = 'rgb(12, 139, 12)'
        Resultado3[2].style.color = 'white'

        for(c = 0; c <= 3; c++){
            Resultado3[c].disabled = true;
            Resultado3[c].style.cursor = 'auto';
        }
    }else{
        if(x == 38){
            Resultado3[1].style.animation = 'teste2 3.7s forwards';
            Resultado3[2].style.transitionProperty = 'background-color, color'
            Resultado3[2].style.transitionDelay = '3.7s';
            Resultado3[2].style.backgroundColor = 'rgb(12, 139, 12)'
            Resultado3[2].style.color = 'white';

            for(c = 0; c <= 3; c++){
                Resultado3[c].style.cursor = 'auto';
                Resultado3[c].disabled = true
            }
        }else{
            if(x == 40){
                Resultado3[2].style.animation = 'teste 3.7s forwards';

                for(c = 0; c <= 3; c++){
                    Resultado3[c].style.cursor = 'auto';
                    Resultado3[c].disabled = 'true'
                }
            }else{
                if(x == 42){
                    Resultado3[3].style.animation = 'teste2 3.7s forwards';
                    Resultado3[2].style.transitionProperty = 'background-color, color'
                    Resultado3[2].style.transitionDelay = '3.7s';
                    Resultado3[2].style.backgroundColor = 'rgb(12, 139, 12)'
                    Resultado3[2].style.color = 'white'

                    for(c = 0; c <= 3; c++){
                        Resultado3[c].style.cursor = 'auto';
                        Resulta3[c].disabled = true
                    }
                }
            }
        }
    }

    Section4.style.opacity = '1';
    Section4.style.transition = 'opacity 1ms 3.7s';
    Titulo4.style.opacity = '1';
    Titulo4.style.transition = 'opacity 1ms 3.7s'

    for(c = 0; c <= 3; c++){
        Resultado4[c].style.cursor = 'pointer';
        Resultado4[c].disabled = false
    }
}

function quartoResultado(x){
    if(x == 36){
        Resultado4[0].style.animation = 'teste2 3.7s forwards';
        Resultado4[1].style.transitionProperty = 'background-color, color';
        Resultado4[1].style.transitionDelay = '3.7s';
        Resultado4[1].style.backgroundColor = 'rgb(12, 139, 12)';
        Resultado4[1].style.color = 'white';

        quartoResultadoDesabilitar();
    }else{
        if(x == 18){
            Resultado4[1].style.animation = 'teste 3.7s forwards';

            quartoResultadoDesabilitar();
        }else{
            if(x == 32){
                Resultado4[2].style.animation = 'teste2 3.7s forwards';
                Resultado4[1].style.transitionProperty = 'background-color, color';
                Resultado4[1].style.transitionDelay = '3.7s';
                Resultado4[1].style.backgroundColor = 'rgb(12, 139, 12)';
                Resultado4[1].style.color = 'white';

                quartoResultadoDesabilitar()
            }else{
                if(x == 22){
                    Resultado4[3].style.animation = 'teste2 3.7s forwards';
                    Resultado4[1].style.transitionProperty = 'background-color, color';
                    Resultado4[1].style.transitionDelay = '3.7s';
                    Resultado4[1].style.backgroundColor = 'rgb(12, 139, 12)';
                    Resultado4[1].style.color = 'white';

                    quartoResultadoDesabilitar()
                }
            }
        }
    }
}
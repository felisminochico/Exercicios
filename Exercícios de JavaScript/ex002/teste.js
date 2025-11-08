//alert('Olá, Mundo!  ');
let Nome = prompt('Digite o teu Nome')
let opção = prompt('[1 = Soma] [2 = Multiplicação] [3 = Divisão] [4 = Subtração]')
if(opção == '1'){
    var númeroTabuada = prompt('Digite o número da Tabuada')
    var res = 0
    for(var c = 1; c <= 10; c++){
        res = c + Number(númeroTabuada)
        console.log(`${númeroTabuada} + ${c} = ${res}`)
        document.writeln(`${númeroTabuada} + ${c} = ${res} <br>`)
        window.document.getElementsByTagName('output')[0].innerHTML += `${númeroTabuada} + ${c} = ${res} <br>`
    }
}else if(opção == '2'){
    c = 1;
    númeroTabuada = prompt('Digite o número da Tabuada')
    do{
        res = Number(númeroTabuada) * c
        console.log(`${númeroTabuada} x ${c} = ${res}`)
        window.document.write(`${númeroTabuada} x ${c} = ${res} <br>`)
        c++
    }while(c <= 10)
}else{
    if(opção == '3'){
        c = 1
        númeroTabuada = prompt('Digite o número da Tabuada')
        while(c <= 10){
            res = Number(númeroTabuada) / c
            console.log(`${númeroTabuada} / ${c} = ${res}`)
            c++
            window.document.write(`${númeroTabuada} / ${c} = ${res.toFixed(2).replace('.', ',')} <br>`)
        }    
    }else{
}if(opção == '4'){
    númeroTabuada = prompt('Digite o número da Tabuada')
    for(c = 1; c <= 10; c++){
        res = Number(númeroTabuada) - c
        console.log(`${númeroTabuada} - ${c} = ${res}`)
        window.document.write(`${númeroTabuada} - ${c} = ${res} <br>`)
    }
}
}

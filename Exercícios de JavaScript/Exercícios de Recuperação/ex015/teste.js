// alert("Olá, Mundo!")
let nome = window.document.querySelector("input#nome");
let telefone = window.document.getElementById("tel");
let botaoEnviar = window.document.getElementsByTagName("button")[0];
let resultado = window.document.getElementsByTagName("div")[0];

let regex = /^[9]\d{2}-\d{3}-\d{3}$/;
console.log(regex.test("943-119-982"))

regex = /^[A-Z][a-z]{2,}$/
console.log(regex.test("Mino"))

regex = /^[^3-9][a-z]{2,}$/
console.log(regex.test("0jhjf"))

regex = /^[A-Z][a-z]{2,}$/
console.log(regex.test("Mino99"))

botaoEnviar.addEventListener("click", function(){
    // resultado.innerHTML = "O nome enviado é " + nome.value + " e o telemóvel é " + telefone.value;
    regexNome = /^[A-Z]{1}[a-z]{2,}$/
    if(regexNome.test(nome.value) === false){
        resultado.innerHTML = "<strong>ERRO: </strong> O " + nome.value + " não é um nome válido."
    }else{
        resultado.innerHTML = nome.value + " é um nome válido com sucesso!";
    }

    if((/^[9][[2-7]{2}[0-9]{3}[0-9]{3}$/).test(telefone.value) === false){
        resultado.innerHTML += "<br><strong>ERRO:</strong> O Telemóvel não é válido";
    }else{
        resultado.innerHTML = "Telemóvel válido com sucesso!"
    }
})
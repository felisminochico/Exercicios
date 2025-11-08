import { mensagem, soma } from './funcoes.js';

let res = window.document.getElementById("resultado");
let msg = mensagem();
let resSoma = soma();
console.log(msg)
res.innerHTML = "A mensagem é " + msg + " e a soma é igual a " + resSoma;
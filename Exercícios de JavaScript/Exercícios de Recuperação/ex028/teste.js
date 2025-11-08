// alert("Olá, Mundo!");
function dizOla(nome, idade){
    console.log(`O teu nome é ${nome} e tens ${idade} anos de idade. Mas o meu nome é ${this}`);
}
console.log("==== CALL ====")
const pessoa = {nome: "Felismino", idade: 39};
dizOla.call(pessoa.nome, "Chico", pessoa.idade);

const teste = "Emanuel";
dizOla.call(teste, "Manuel", 43)

console.log("")
console.log("==== APPLY ====")
function saudar(no, ida){
    console.log("Olá, " + no + "! tu tens " + ida + " anos de idade. E eu sou " + this);
}

const nomeApply = "Programador"
const vetor2 = ["Domingos", 33];
const obj = {0: "Teste", 1: 25}

saudar.apply(nomeApply, ["Felismino", 21])

saudar.apply(nomeApply, vetor2)

saudar.apply(nomeApply, Object.values(obj))

console.log("");
console.log("==== BIND ====");

function saudacao(n , i){
    return `O teu Nome é ${n} e a idade é ${i}. Mas o nome do Desenvolvedor é ${this}`;
}
const nomeBind = "Fernando";

let receberBind = saudacao.bind(nomeBind, "Mino", 34)
console.log(receberBind())

let bind2 = saudacao.bind("Chefe", "Empregado", 33);

console.log(bind2())
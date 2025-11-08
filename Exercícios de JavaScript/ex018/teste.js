// alert("Olá, Mundo!")
class Pessoa{
    constructor(nome, idade, sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }

    apresentar(){
        console.log("Olá, sou " + this.nome + "! Tenho " + this.idade + " anos e sou do sexo " + this.sexo);
    }

    fazerAniversario(){
        this.idade = Number(this.idade) + 1
    }
}

class Aluno extends Pessoa{
    constructor(nome, idade, sexo, curso){
        super(nome, idade, sexo)
        this.curso = curso;
    }

    mudarCurso(curso){
        this.curso = curso;
    }
}

class Professor extends Pessoa{
    constructor(nome, idade, sexo, especialidade, salario){
        super(nome, idade, sexo)
        this.especialidade = especialidade;
        this.salario = salario;
    }

    aumentarSalario(sal){
        this.salario = Number(this.salario) + Number(sal);
    }
}

const p1 = new Pessoa("Maria", 20, "Feminino");
const aluno1 = new Aluno("Felismino", 24, "Masculino", "Informática");
const professor1 = new Professor("Manuel", 30, "Masculino", "JavaScript", 56000);

console.log(p1)
console.log(aluno1);
console.log(professor1)
p1.apresentar()
for(let c = 0; c < 10; c++){
    aluno1.fazerAniversario();
}
aluno1.apresentar();

for(let c in aluno1){
    console.log(c + ": " + aluno1[c])
}
console.log("")
professor1.aumentarSalario(4000.75)
for(let c in professor1){
    console.log(`${c}: ${professor1[c]}`)
}
// alert("Olá, Mundo!");
 const nome = [];
 const idade = [];
 const curso = [];
 const inputNome = window.document.getElementById("nome");
 const inputIdade = window.document.getElementById("idade");
 const inputCurso = window.document.querySelector("select#cursos");
 const id = window.document.getElementById("id");
 const botaoCadastrar = window.document.getElementById("btn-cadastrar");
 const botaoConsultar = window.document.getElementById("btn-consultar");
 const botaoAtualizar = window.document.getElementById("btn-atualizar");
 const botaoRemover = window.document.getElementById("btn-remover");
 const resultado = window.document.getElementById("tabela");

 console.log(inputCurso)

 botaoCadastrar.addEventListener("click", function(){
    resultado.innerHTML = "Cadastrando...";

    const promise = new Promise(function(resolve, reject){
        if((inputNome.value.length === 0 || inputIdade.value.length === 0) || (inputCurso.value === 0)){
            reject("Preencha todos os campos.");
        }else if(Number.isInteger(Number(inputIdade.value)) === false || Number(inputIdade.value) < 18){
            reject("A Idade deve ser um número inteiro e maior ou igual a 18.");
        }else{
            resolve({
                nome: inputNome.value,
                idade: inputIdade.value,
                curso: inputCurso.value
            })
        }
    }).then((res) =>{
        for(let c = 0; c < nome.length; c++){
            if(res.nome.trim() == nome[c]){
                throw new Error("Aluno " + res.nome + " já foi cadastrado.")
            }
        }
        nome.push(res.nome.trim());
        idade.push(res.idade);
        curso.push(res.curso);
        resultado.innerHTML = `Aluno <strong>${res.nome}</strong> cadastrado com sucesso!`;
        inputNome.value = "";
        inputIdade.value = "";
    }).catch((erro) =>{
        resultado.innerHTML = `<strong style='color: red'>ERRO:</strong> ${erro}`;
    }).finally(() =>{
        console.log("Programa finalizado com sucesso!")
    })
 })

 botaoConsultar.addEventListener("click", function(){
    resultado.innerHTML = "Consultando...";
    try{
        if((nome.length == 0 || idade.length == 0) || (curso.length == 0)){
            throw new Error("Consulta inválida. Sem alunos existentes.");
        }
        let id = 1;
        for(let c = 0; c < nome.length; c++){
            resultado.innerHTML += `<p>${id} - ${nome[c]} ${idade[c]} ${curso[c]}</p>`;
            id++;
        }
    }catch(erro){
        resultado.innerHTML = `<strong style='color: red;'>ERRO:</strong> ${erro.message}`;
    }
 })

 botaoAtualizar.addEventListener("click", function(){
    resultado.innerHTML = "Atualizando...";

    const promise = new Promise((resolve, reject) =>{
        if(id.value.length === 0 || id.value > nome.length){
            reject("ID inválido ou inexistente.");
        }else if((inputNome.value.length === 0 || inputIdade.value.length === 0) || (inputCurso.value === 0)){
            reject("Preencha todos os campos");
        }else if(Number.isInteger(Number(inputIdade.value)) === false || Number(inputIdade.value) < 18){
            reject("A Idade deve ser um número inteiro e maior ou igual a 18.");
        }else{
            resolve({
                nome: inputNome.value.trim(),
                idade: inputIdade.value,
                curso: inputCurso.value
            })
        }
    })

    promise.then((res) =>{
        for(let c = 0; c < nome.length; c++){
            if(res.nome == nome[c]){
                throw new Error("O aluno " + res.nome + " já foi cadastrado.");
            }
        }
        nome[Number(id.value) - 1] = res.nome;
        idade[Number(id.value) - 1] = res.idade;
        curso[Number(id.value) - 1] = res.curso;

        resultado.innerHTML = `Dados atualizados com sucesso!`;
        inputNome.value = "";
        inputIdade.value = "";
    }).catch((erro) =>{
        resultado.innerHTML = `<strong style='color: red;'>ERRO:</strong> ${erro}`;
    })
 })

 botaoRemover.addEventListener("click", () =>{
    try{
        if(id.value.length == 0 || Number(id.value) > nome.length){
            throw new Error("ID inválido ou inexistente.");
        }

        nome.splice((Number(id.value) - 1), 1);
        idade.splice((Number(id.value) - 1), 1);
        curso.splice((Number(id.value) - 1), 1);

        resultado.innerHTML = `Aluno eliminado com sucesso!`;
    }catch(erro){
        resultado.innerHTML = `<strong style='color: red;'>ERRO:</strong> ${erro.message}`;
    }
 })
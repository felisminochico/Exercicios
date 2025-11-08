class Pessoa{
    #nome;
    #idade;
    #sexo;
    #dono;
    #temCasa;
    #dentro;
    #acordado;
    #assistindo;

    constructor(nome, idade, sexo){
        this.setNome(nome);
        this.setIdade(idade);
        this.setSexo(sexo);
        this.setTemCasa(false);
        this.setDentro(false);
        this.setAcordado(false);
        this.setAssistindo(false);
    }

    getNome(){
        return this.#nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    getIdade(){
        return this.#idade;
    }

    setIdade(idade){
        this.#idade = idade;
    }

    getSexo(){
        return this.#sexo;
    }

    setSexo(sexo){
        this.#sexo = sexo;
    }

    getDono(){
        return this.#dono;
    }

    setDono(dono){
        this.#dono = dono;
    }

    getTemCasa(){
        return this.#temCasa;
    }

    setTemCasa(temCasa){
        this.#temCasa = temCasa;
    }

    getDentro(){
        return this.#dentro;
    }

    setDentro(dentro){
        this.#dentro = dentro;
    }

    getAcordado(acordado){
        return this.#acordado;
    }

    setAcordado(acordado){
        this.#acordado = acordado;
    }

    getAssistindo(){
        return this.#assistindo;
    }

    setAssistindo(assistindo){
        this.#assistindo = assistindo;
    }
}
window.Pessoa = Pessoa
const links = window.document.querySelectorAll("nav a");
const nav = window.document.getElementsByTagName("nav")[0];
const seccoes = window.document.querySelectorAll("section")

console.log(seccoes[3].offsetTop)

function rolar(atributo){
    seccoes.forEach((valor, chave, vetor) =>{
        if(valor.getAttribute("id") === atributo){
            window.scrollTo({
                top: Number(valor.offsetTop) - 40,
                behavior: "smooth"
            })
        }
    })
    // window.scrollTo({
    //     top: Number(seccao.offsetTop - 40),
    //     behavior: "smooth"
    // })
}

links.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        rolar(this.getAttribute("class"));
    });
})

console.log(seccoes[3].getAttribute("id"))
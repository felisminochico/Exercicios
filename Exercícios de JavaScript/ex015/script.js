//alert('Olá, Mundo!')
let imagens = document.getElementsByTagName('img')
let indexAtual = 0;

document.getElementById('next').addEventListener('click', () => {
    imagens[indexAtual].classList.remove('active')
    indexAtual = (indexAtual + 1) % imagens.length
    imagens[indexAtual].classList.add('active')
})

document.getElementById('prev').addEventListener('click', () => {
    imagens[indexAtual].classList.remove('active')
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length
    imagens[indexAtual].setAttribute('class', 'active')
})

setInterval(() => {
    imagens[indexAtual].classList.remove('active')
    indexAtual = (indexAtual + 1) % imagens.length
    imagens[indexAtual].classList.add('active')
}, 3000)
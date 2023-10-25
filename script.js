const imagem = document.querySelector('#game-img')


imagem.addEventListener('mouseenter', () =>{
    let rotacao = Math.random()*3
    imagem.style.transform = `rotate(${rotacao}deg) scale(1.3)`;
});
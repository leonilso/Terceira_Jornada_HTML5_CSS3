const imagem = document.querySelector('#game-img')


imagem.addEventListener('mouseenter', () =>{
    imagem.style.transform = "rotate(", Math.random()*3, "deg) scale(1.3)";
});
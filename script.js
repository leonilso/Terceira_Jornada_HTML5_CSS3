const imagem = document.querySelector('#game-img')
const position = [3, -3];

imagem.addEventListener('mouseenter', () =>{
    imagem.style.transform = "rotate(", Math.random(position), "deg) scale(1.3)";
    console.log(Math.floor(Math.random()));
});
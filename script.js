const imagem = document.querySelector('#game-img')

imagem.addEventListener('mouseenter', () =>{
    let vetor = [-3, 3];
    let indice = Math.floor(Math.random() * vetor.length)
    let rotacao = Math.random()*vetor[indice]
    console.log(rotacao);
    imagem.style.transform = `rotate(${rotacao}deg) scale(1.3)`;
});

imagem.addEventListener('mouseleave', () =>{
    imagem.style.transform = `rotate(0deg) scale(1)`;
});
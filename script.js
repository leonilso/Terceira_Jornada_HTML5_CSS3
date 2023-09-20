const botao = document.getElementById("botao")
const teste = document.querySelector(".teste")
const direita = document.querySelector(".direita")
const esquerda = document.querySelector(".esquerda")



// botao.addEventListener("click", () => {
//     teste.style.animation = "none"
//     setTimeout(() => 
//     teste.style.animation = "example 1s linear", 5);
// });

teste.addEventListener("mouseover", () =>{
    teste.style.animation = "none"
    setTimeout(() => 
    teste.style.animation = "example 1s infinite", 250);
    direita.style.animation = "example 1s infinite";
    esquerda.style.animation = "example 1s infinite";
});

teste.addEventListener("mouseout", () =>{
    teste.style.animation = "none"
    direita.style.animation = "none";
    esquerda.style.animation = "none";
});
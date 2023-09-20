const botao = document.getElementById("botao")
const teste = document.querySelector(".teste")



botao.addEventListener("click", () => {
    teste.style.animation = "none"
    setTimeout(() => 
    teste.style.animation = "example 1s linear", 5);
});

teste.addEventListener("mouseover", () =>{
    teste.style.animation = "none"
    setTimeout(() => 
    teste.style.animation = "example 1s infinite", 5);
});

teste.addEventListener("mouseout", () =>{
    teste.style.animation = "none"
});
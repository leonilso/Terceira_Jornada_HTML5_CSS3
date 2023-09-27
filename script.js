const botao = document.getElementById("botao")
const heartdown = document.querySelector(".heartdown")
const heartleft = document.querySelector(".heartleft")
const heartright = document.querySelector(".heartright")

heartdown.addEventListener("mouseover", () =>{
    heartdown.style.animation = "none"
    heartleft.style.animation = "none"
    heartright.style.animation = "none"
    heartdown.style.animation = "example 1s infinite"
    heartleft.style.animation = "example 1s infinite";
    heartright.style.animation = "example 1s infinite";
});

heartdown.addEventListener("mouseout", () =>{
    heartdown.style.animation = "none"
    heartleft.style.animation = "none";
    heartright.style.animation = "none";
});

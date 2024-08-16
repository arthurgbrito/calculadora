//um = document.querySelector("input#1")
dois =document.querySelector("input#2")
tres = document.querySelector("input#3")
quatro = document.querySelector("input#4")
cinco = document.querySelector("input#5")
seis = document.querySelector("input#6")
sete = document.querySelector("input#7")
oito = document.querySelector("input#8")
nove = document.querySelector("input#9")
zero = document.querySelector("input.numero0")

//var visor = document.getElementsByClassName("visor")



const um = document.querySelector(".numero1");
const visor = document.querySelector(".visor");

um.addEventListener('click', function() {
  visor.innerHTML = '1';
});
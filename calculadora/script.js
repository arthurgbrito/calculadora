const um = document.querySelector("input[value='1']");
const dois = document.querySelector("input[name='2']");
const tres = document.querySelector("input[name='3']");
const quatro = document.querySelector("input[name='4']");
const cinco = document.querySelector("input[name='5']");
const seis = document.querySelector("input[name='6']");
const sete = document.querySelector("input[name='7']");
const oito = document.querySelector("input[name='8']");
const nove = document.querySelector("input[name='9']");
const zero = document.querySelector("input.numero0");

const visor = document.querySelector(".visor");


function apertou(numero) {
    visor.innerText = numero;
}

um.addEventListener("click", apertou("1"));
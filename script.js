let visor = document.querySelector('.visor');
let exp = ''
let ans = ''
let controle = 0

function adicionaValor(valor){
  
  if (controle === 1){
    if (['x','-','+','÷'].includes(valor)){
      visor.value += valor
      exp += valor
    } else {
      visor.value = ''
      exp = ''
      controle = 0
    }
  } 

  let ultimo = visor.value.charAt(visor.value.length - 1)
  
  if (['x','-','+','÷'].includes(valor) && controle == 0){
    if ( ultimo == '' || ['x','-','+','÷'].includes(ultimo)){
      alert('Não é possível usar essa opção! Digite algo válido!')
    } else {
      visor.value += valor
      exp += valor  
    }
  } else if (valor === 'ANS'){
    visor.value += valor
    exp += ans
  } else if (!isNaN(valor)){
    visor.value += valor
    exp += valor 
  }
  controle = 0
}

function apagaVisor(){
  visor.value = ''
  exp = ''
}

function del(){
  visor.value = visor.value.slice(0, -1)
  exp = exp.slice(0, -1)
}

function calcula() {
  try {

    exp = exp.replace(/x/g, '*').replace(/÷/g, '/')
    
    let resultado = eval(exp)

    if (!isNaN(resultado) && resultado % 1 !== 0){
      resultado = parseFloat(resultado.toFixed(11))
    }

    visor.value = resultado
    ans = resultado
    exp = resultado

    controle = 1

  } catch {
      visor.value = 'ERRO';
  }
}

document.addEventListener('keydown', function(evento) {

  let key = evento.key

  let botao

  if (!isNaN(key) && key !== ' '){

    botao = document.querySelector(`input[value="${key}"]`)
  
  }
  
  switch(key){
    case '+':
    case '-':
       botao = document.querySelector(`input[value="${key}"]`)
      break;
    case '/':
      botao = document.querySelector('input[value="÷"]')
      break;
    case '*':
     botao = document.querySelector('input[value="x"]')
     break;
    case 'Enter':
      botao = document.querySelector('input.igual')
      break;
    case 'Backspace': 
      botao = document.querySelector('input.backspace')
      break;
    case '.': 
    case ',':
      botao = document.querySelector('input.virgula')
      break;
    case 'a':
      botao = document.querySelector('input.answer')
      break;
    case 'Escape':
      botao = document.querySelector('input.apagador')
      break;
  }

  if (botao){
    botao.click()
  }
})
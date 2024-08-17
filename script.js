let visor = document.querySelector('.visor');
let exp = ''

function adicionaValor(valor){
  let ultimo = visor.value.charAt(visor.value.length - 1)
  if (valor == 'x' || valor == '-' || valor == '+' || valor == '÷'){
    if ( ultimo == ''){
      alert('Não é possível usar essa opção! Digite algo válido!')
    } else {
      visor.value += valor
      exp += valor  
    }
  } else {
    visor.value += valor
    exp += valor 
  }
}

function apagaVisor(){
  visor.value = ''
  exp = ''
}

function del(){
  visor.value = visor.value.slice(0, -1)
  exp = exp.slice(0, -1)
}

function expressao() {
  try {

    exp = exp.replace(/x/g, '*').replace(/÷/g, '/')
    
    let resultado = eval(exp)

    if (!isNaN(resultado) && resultado % 1 !== 0){
      resultado = parseFloat(resultado.toFixed(11))
    }

    visor.value = resultado
      
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
    case '/':
    case '*':
      botao = document.querySelector(`input[value="${key}"]`)
      break;
    case 'Enter':
      botao = document.querySelector('input.igual')
      break;
    case 'Backspace': 
      botao = document.querySelector('input.backspace')
      break;
    case '.': 
      botao = document.querySelector('input.virgula')
    break;
  }

  if (botao){
    botao.click()
  }
})
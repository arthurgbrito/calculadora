let visor = document.querySelector('.visor');
let exp

function adicionaValor(valor){
  let ultimo = visor.value.charAt(visor.value.length - 1)
  if (valor == 'x' || valor == '-' || valor == '+' || valor == '÷'){
    if ( ultimo == ''){
      alert('Não é possível usar essa opção! Digite algo válido!')
    } else {
      visor.value += valor;
    }
  } else {
    visor.value += valor;
  }
}

function apagaVisor(){
  visor.value = ''
}

function del(){
  visor.value = visor.value.slice(0, -1)
}

function expressao() {
  try {
      visor.value = eval(visor.value);
  } catch {
      visor.value = 'ERRO';
  }
}

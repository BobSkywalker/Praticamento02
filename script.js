const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const relogio = setInterval(function time(){
    const diaAtual = new Date()
    const hora = diaAtual.getHours()
    const minuto = diaAtual.getMinutes()
    const segundo = diaAtual.getSeconds()
    
    if (hora < 10) hora = '0' + hora

    if (minuto < 10) minuto = '0' + minuto

    if(segundo < 10) segundo = '0' + segundo
    
    
    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo
})
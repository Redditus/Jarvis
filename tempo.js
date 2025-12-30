
var tempo = new Date();


var horas = tempo.getHours()
var minutos = tempo.getMinutes()

setInterval(function() {
  let hora = document.getElementById("hora").innerHTML = horas;


let minuto = document.getElementById("minuto").innerHTML =  minutos;

}, 1000)

function abri(){
  window.location.href = 'IA.html'
}

function toggleReconhecimento() {
  if (reconhecimentoAtivo) {
    recognition.stop();
    reconhecimentoAtivo = false;
    document.getElementById('texto').innerText = ""; // Limpa o texto quando o reconhecimento é desativado
  } else {
    recognition.start();
    reconhecimentoAtivo = true;
  }
}

// Função para configurar e iniciar o reconhecimento de voz
function iniciarReconhecimento() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if ('SpeechRecognition' in window) {
    recognition = new window.SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.onresult = function(event) {
      const resultado = event.results[0][0].transcript;
      document.getElementById('texto').innerText = resultado;
    }
  } else {
    alert("Reconhecimento de voz não suportado neste navegador.");
    console.log("Reconhecimento de voz não suportado neste navegador.");
    
  }
}

// Inicia o reconhecimento de voz quando a página carrega
iniciarReconhecimento();





var date = new Date();

var hora = date.getHours();





if (hora > 0 && hora < 11) {
  box.innerHTML += `<p>Bom dia! são horas de levantar, está um clima ótimo para a prática de desporto, e de uma corida matinal.</p>`
 
 
 
 
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance("Bom dia! são horas de levantar, está um clima ótimo para a prática de desporto, e de uma corida matinal.");
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }
  
  
  
  
  
  
  
  
  
}

if (hora > 12 && hora < 17) {
  
  
  
  
  box.innerHTML += `<p>Boa tarde, tudo bem senhor! já almoçaste Senhor?</p>`
  
  
  
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance("Boa tarde tudo bem senhor já almoçaste?");
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}


if ( hora > 18 && hora < 23) {

 
 
 
 
 box.innerHTML += `<p>Boa noite, tudo bem? já esta quase na hora , de ir deitar.</p>`
 
 
 
 
 
 if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance("Boa noite, tudo bem? já esta quase na hora, de ir deitar.");
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }

 
 
 
 
 
 
 
 
 
 
 
 
 
}
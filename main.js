





function carregar() {
 
 
  box.innerHTML += `<p id="jarvis">Olá senhor, espero que esteja tudo bem contigo como eu posso te ajudar hoje.</p>`
  
  
  
  
    if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance("Olá senhor, espero que esteja tudo bem contigo. Como eu posso te ajudar hoje?");
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }
  
  
}





















    let video = document.getElementById('video');
    
    // Evento para repetir o vídeo ao terminar
    video.addEventListener('ended', function() {
      video.play(); // Faz o vídeo começar novamente
    });
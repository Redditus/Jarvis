//forma de ensinar o chatboot
/* aprender: qual é a capital de Angola? resposta: A capital de Angola é Luanda.
*/


// Função que será chamada quando o botão for pressionado


  let box = document.getElementById('chat');
  
function send() {
  let mensagem = document.getElementById('input').value.trim();

  if (mensagem !== "") {
    addMessage("Eu:  "+ mensagem, 'user');

    // Obter resposta do chatbot
    let resposta = getResposta(mensagem);

    addMessage("Jarvis: " + resposta, 'bot');
    speak(resposta);
    document.getElementById('input').value = "";
  }
}

// Função para adicionar uma mensagem na div do chat
function addMessage(mensagem, tipo) {

  let pMessage = document.createElement('p');
  pMessage.classList.add('mensagem');
  pMessage.textContent = mensagem;
  box.appendChild(pMessage);
  box.scrollTop = box.scrollHeight;
}

// Função para determinar a resposta do chatbot
function getResposta(mensagem) {
  mensagem = mensagem.toLowerCase();

  // Verifica se é uma instrução de aprendizado
  if (mensagem.startsWith("aprender:")) {
    const partes = mensagem.split("resposta:");
    if (partes.length === 2) {
      const pergunta = partes[0].replace("aprender:", "").trim();
      const resposta = partes[1].trim();
      salvarAprendizado(pergunta, resposta);
      return `Aprendi que quando me perguntarem "${pergunta}", devo responder: "${resposta}"`;
    } else {
      return "Formato inválido. Use: aprender: sua pergunta? resposta: sua resposta.";
    }
  }

  // Verifica se há resposta aprendida semelhante
  const aprendizados = JSON.parse(localStorage.getItem("aprendizados") || "{}");

  for (let pergunta in aprendizados) {
    if (
      pergunta === mensagem ||
      mensagem.includes(pergunta) ||
      pergunta.includes(mensagem)
    ) {
      return aprendizados[pergunta];
    }
  }

  // Respostas padrão
  if (mensagem.includes("olá") || mensagem.includes("bom dia") || mensagem.includes("boa tarde") || mensagem.includes("boa noite") || mensagem.includes("oi") || mensagem.includes("Como estas ?") ){
    return "Olá! Como posso te ajudar hoje?";
  } else if (mensagem.includes("tarefa")) {
    let tarefa = localStorage.getItem("tarefa") || "nenhuma tarefa pendente.";
    return "Lembre-se de que a tarefa de hoje é: " + tarefa;
  } else if (mensagem.includes("ajuda")) {
    return "Como posso te ajudar? Você pode me pedir para lembrar de tarefas ou ensinar novas perguntas!";
  } 
  
  
  else if (mensagem.includes("tchau") || mensagem.includes("adeus")) {
    return "Tchau! Tenha um ótimo dia!";
  }
    //comandos de abertura.
   else if (mensagem.includes("facebook")) {
  window.open('facebook.com')   
     
  return "aguarde, estou abrindo o Facebook"; 
    
    
    
  } 
  
  
  else if (mensagem.includes("youTube")) {
  window.open('yutube.com')
  
  return "aguarde estou abrindo o Facebook";
  
  
  
}


else if (mensagem.includes("namorar") || mensagem.includes("namorada") || mensagem.includes("namorado")) {
   
   
  
  return "Eu só uma inteligência artificial, que não possui nenhuma emoção, ou sentimento amoroso. Não estou capacitado para opinar acerca deste tema posso ajudar com outra coisa?";
}


else if (mensagem.includes("namorar") || mensagem.includes("namorada") || mensagem.includes("namorado")) {
  return "Eu só uma inteligência artificial, que não possui nenhuma emoção, ou sentimento amoroso. Não estou capacitado para opinar acerca deste tema posso ajudar com outra coisa?";
}






//comando de ir ao menu 

else if (mensagem.includes("menu") || mensagem.includes("configurações") || mensagem.includes("sistema")) {
  return "sistema de configurações solicitado.";
  window.location.href = `comfiguracoes.html`
}














  
  

  
  
  
  
  
  



  
  
  else {
    return "Desculpe, não entendi. Você pode me ensinar com: aprender: pergunta? resposta: resposta.";
  }
}

// Salva novos aprendizados no localStorage
function salvarAprendizado(pergunta, resposta) {
  const aprendizados = JSON.parse(localStorage.getItem("aprendizados") || "{}");
  aprendizados[pergunta] = resposta;
  localStorage.setItem("aprendizados", JSON.stringify(aprendizados));
}

// Função que responde por voz
function speak(resposta) {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(resposta);
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }
}

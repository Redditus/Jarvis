let box = document.getElementById('chat');




// Enviar mensagem


async function send() {
  let mensagem = document.getElementById('input').value.trim();

  if (mensagem !== "") {
    addMessage("Eu: " + mensagem, 'user');

    let resposta = await getResposta(mensagem);

    addMessage("Jarvis: " + resposta, 'bot');
    speak(resposta);
    document.getElementById('input').value = "";
   
   
   
   
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }
  
  
  
  if (mensagem.includes("ligar") || mensagem.includes("acender")) {
    
  alert("ligado");
}

if (mensagem.includes("desligar") || mensagem.includes("apagar")) {
  alert("apagado");
}
  
  
}








// Adicionar mensagem no chat
function addMessage(mensagem, tipo) {
  let pMessage = document.createElement('p');
  pMessage.classList.add('mensagem');
  pMessage.textContent = mensagem;
  box.appendChild(pMessage);
  box.scrollTop = box.scrollHeight;
}

// Obter resposta do chatbot
async function getResposta(mensagem) {
  mensagem = mensagem.toLowerCase();

  // Aprendizado manual
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

  // Buscar aprendizado salvo
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

  // Respostas fixas
  if (mensagem.includes("olá") || mensagem.includes("bom dia") || mensagem.includes("boa tarde") || mensagem.includes("boa noite") || mensagem.includes("oi") || mensagem.includes("como estás")) {
    return "Olá! Como posso te ajudar hoje?";
    
  } else if (mensagem.includes("tarefa")) {
    let tarefa = localStorage.getItem("tarefa") || "nenhuma tarefa pendente.";
    return "Lembre-se de que a tarefa de hoje é: " + tarefa;
  }
  
else if (mensagem.includes("sexo")) {
  
  
  return "As relações, sexuais são um assunto, destinado a maiores de 18 anos.Mas se fores um, eu esperava mas maturidade de você e procuraria mas informação em livro.Seu acéfalo!";
}
  
  
  
  
  
  
  
  else if (mensagem.includes("ajuda")) {
    return "Você pode me ensinar com: aprender: sua pergunta? resposta: sua resposta.";
  } else if (mensagem.includes("tchau") || mensagem.includes("adeus")) {
    return "Tchau! Tenha um ótimo dia!";
  } else if (mensagem.includes("facebook")) {
    window.open('https://facebook.com');
    return "Aguarde, estou abrindo o Facebook.";
  } else if (mensagem.includes("youtube")) {
    window.open('https://youtube.com');
    return "Aguarde, estou abrindo o YouTube.";
  } else if (mensagem.includes("namorar") || mensagem.includes("namorada") || mensagem.includes("namorado")) {
    return "Eu sou uma inteligência artificial, sem emoções. Mas posso te ajudar com outra coisa!";
  } else if (mensagem.includes("menu") || mensagem.includes("configurações") || mensagem.includes("sistema")) {
    window.location.href = `comfiguracoes.html`;
    return "Sistema de configurações solicitado.";
  }

  // Se não souber, buscar na internet
  return await buscarNaInternet(mensagem);
}

// Buscar com DuckDuckGo API
async function buscarNaInternet(pergunta) {
  try {
    const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(pergunta)}&format=json&no_redirect=1`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Abstract) {
      return data.Abstract;
    } else if (data.RelatedTopics && data.RelatedTopics.length > 0) {
      return data.RelatedTopics[0].Text || "Não encontrei uma resposta direta, mas aqui está algo relacionado.";
    } else {
      return "Não encontrei nenhuma resposta na web.";
    }
  } catch (e) {
    return "Erro ao procurar na internet.";
  }
}

// Salvar aprendizados no localStorage
function salvarAprendizado(pergunta, resposta) {
  const aprendizados = JSON.parse(localStorage.getItem("aprendizados") || "{}");
  aprendizados[pergunta] = resposta;
  localStorage.setItem("aprendizados", JSON.stringify(aprendizados));
}

// Resposta falada (speech synthesis)
function speak(resposta) {
  if ('speechSynthesis' in window) {
    const speech = new SpeechSynthesisUtterance(resposta);
    window.speechSynthesis.speak(speech);
  } else {
    console.log("Síntese de voz não suportada neste navegador.");
  }
}

    // BATTERY API
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        function atualizarBateria() {
          const percent = Math.round(battery.level * 100);
          document.getElementById('batteryStatus').textContent =
            ` ${percent}% ${battery.charging ? "" : ""}`;
            
        //alert(`${percent}%`)    
if ('speechSynthesis' in window) {
  const speech = new SpeechSynthesisUtterance(`Seu telemóvel, possui agora${percent}%`);
  window.speechSynthesis.speak(speech);
}
          
          
          
          
          
          
          
          
            
        }

        atualizarBateria();
        battery.addEventListener('levelchange', atualizarBateria);
        battery.addEventListener('chargingchange', atualizarBateria);
      
      
      
      
      
      
      
       
        
        
      });
    } else {
      alert("Não suporta do")
    }
    //memória GB
        // DEVICE MEMORY
    const memoria = navigator.deviceMemory;
    document.getElementById('memoriaStatus').textContent =
      memoria ? `${memoria} GB` : "Device Memory API não suportada.";
      
      
      if ('speechSynthesis' in window) {
  const speech = new SpeechSynthesisUtterance(`Seu telemóvel, possui agora${memoria}GB de memória Ram`);
  window.speechSynthesis.speak(speech);
}


//medidor de frequência de dados 
    // NETWORK INFO
    const conexao = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conexao) {
      function atualizarRede() {
        document.getElementById('redeStatus').textContent =
          `${conexao.downlink} Mb/s`;
          
     if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(`Seu telemóvel, possui agora${conexao.downlink}GB de memória Ram`);
        window.speechSynthesis.speak(speech);
      }
      
      
      
      }
      atualizarRede();
      conexao.addEventListener('change', atualizarRede);
    } else {
      document.getElementById('redeStatus').textContent = "";
    }
    
    
    
    
    
    
    
    // temperatura 
    
    async function getWeatherByCoords(lat, lon) {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await res.json();
    
    if (!data.current_weather) throw new Error("Clima indisponível.");
    
    const temp = data.current_weather.temperature;
    document.getElementById("weatherInfo").innerText = `${temp}°C`;
    
    
    
    
  } catch (error) {
    document.getElementById("weatherInfo").innerText = "Erro ao obter temperatura.";
    console.error("Erro ao buscar clima:", error);
  }
}

function getLocationAndWeather() {
  if (!navigator.geolocation) {
    document.getElementById("weatherInfo").innerText = "Geolocalização não suportada.";
    return;
  }
  
  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCoords(lat, lon);
    },
    error => {
      document.getElementById("weatherInfo").innerText = "°c";
      console.error("Erro de geolocalização:", error);
    }
  );
}

getLocationAndWeather();

//Arduino UNO 






let porta;
let writer;

async function conectar() {
  
  
  
  porta = await navigator.serial.requestPort();
  await porta.open({ baudRate: 9600 });
  writer = porta.writable.getWriter();
  alert("Arduino conectado!");
  
  
  
}




async function ligar() {
  
  
  
  
  
  const data = new TextEncoder().encode("1");
  await writer.write(data);
  
  
  
  
}




async function desligar() {
  
  
  
  
  
  const data = new TextEncoder().encode("0");
  await writer.write(data);
  
  
  
  
  
}

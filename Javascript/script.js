const input = document.getElementById('buscar');
const sugestoes = document.createElement('div');
sugestoes.classList.add('sugestoes');
const loading = document.getElementById("loading");

function ShowLoading() {
  loading.style.display = "block";
}

function HideLoading() {
  loading.style.display = "none";
}
input.addEventListener('input', () => {
  const valorInput = input.value.toLowerCase();
  const sugestoesFiltradas = estados.filter(estado =>
    estado.toLowerCase().includes(valorInput)
  );

  sugestoes.innerHTML = '';

  sugestoesFiltradas.forEach(estado => {
    const sugestaoItem = document.createElement('div');
    sugestaoItem.innerText = estado;
    sugestaoItem.classList.add('sugestao-item');
    sugestaoItem.addEventListener('click', () => {
      input.value = estado;
      sugestoes.innerHTML = '';
    });
    sugestoes.appendChild(sugestaoItem);
  });

  input.parentNode.appendChild(sugestoes);
});

document.addEventListener('click', event => {
  if (!input.contains(event.target)) {
    sugestoes.innerHTML = '';
  }
});
const APIKey = "99db18ed4405b31d392f6d9e808fe78f";
input.addEventListener('change', async () => {
  const city = input.value;
  const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

  try {
    ShowLoading();
    
    const response = await fetch(weatherEndpoint);
    const data = await response.json();
    
    if (data) {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      
      const temperatureElement = document.getElementById("temperature");
      const descriptionElement = document.getElementById("description");
      
      temperatureElement.textContent = `${temperature} °C`;
      descriptionElement.textContent = weatherDescription;
      
      window.location.href = "clima.html";
    }
  } catch (error) {
    console.error("Erro ao obter os dados do tempo:", error);
  } finally {
    HideLoading();
  }
});

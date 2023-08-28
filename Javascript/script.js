const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

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
    sugestaoItem.addEventListener('click', async () => {
      input.value = estado;
      sugestoes.innerHTML = '';

      const APIKey = "99db18ed4405b31d392f6d9e808fe78f";
      const city = input.value;
      const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

      try {
        ShowLoading();

        const response = await fetch(weatherEndpoint);
        const data = await response.json();

        if (data.main) {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const termic = document.getElementById("termic");
          const rain = document.getElementById("rain");
          const wind = document.getElementById("wind");
          const umidify = document.getElementById("umidify");
          const uv = document.getElementById("uv");

          window.location.href = "clima.html";
        }
      } catch (error) {
        console.error("Erro ao obter os dados do tempo:", error);
      } finally {
        HideLoading();
      }
    });
    sugestoes.appendChild(sugestaoItem);
  });

  input.parentNode.appendChild(sugestoes);
});
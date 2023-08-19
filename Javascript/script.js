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
      ShowLoading();

      setTimeout(() => {
        HideLoading();
      }, 10000);
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

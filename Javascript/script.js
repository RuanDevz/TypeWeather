
  const input = document.getElementById('buscar');
  const sugestoes = document.createElement('div');
  sugestoes.classList.add('sugestoes');
  
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
  
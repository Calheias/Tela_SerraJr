function adicionarReceita() {
  const nome = document.getElementById('nome').value.trim();
  const ingredientes = document.getElementById('ingredientes').value.trim();
  const tempo = document.getElementById('tempo').value.trim();

  if (!nome || !ingredientes || !tempo) {
    alert("Entrada Invélida");
    return;
  }

  const container = document.getElementById('lista-receitas');
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = 
    `<h2>${nome}</h2>
    <p>${ingredientes}</p>
    <p>${tempo}</p>
    <span class="lixeira" onclick="removerReceita(this)"> 🗑 </span>
    `;
  
  container.appendChild(card);
  document.getElementById('nome').value = '';
  document.getElementById('ingredientes').value = '';
  document.getElementById('tempo').value = '';
}

function removerReceita(elemento) {
  const card = elemento.parentElement;
  card.remove();
}
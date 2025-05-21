function addMusic() {
    const artistName = document.getElementById('artistInput').value.trim();
    if (!artistName) {
      alert('Nenhum artista escolhido!!');
      return;
    }
  
    const musicList = document.getElementById('musicList');
  
    const item = document.createElement('div');
    item.className = 'music-item';
  
    item.innerHTML = `
      <img src="">
      <div class="music-info">
        <h2>Título da Música</h2>
        <h3>Lyrics da Música</h3>
      </div>
    `;
  
    musicList.appendChild(item);
    document.getElementById('artistInput').value = '';
  }
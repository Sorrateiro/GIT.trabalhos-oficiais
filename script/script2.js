  function toggleParagraph(index) {
        const lista = document.getElementById('lista' + index);
        lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
    }
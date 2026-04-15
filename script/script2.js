  function toggleParagraph(index) {
        const lista = document.getElementById('lista' + index);
        lista.style.display = (lista.style.display === 'none' || lista.style.display === '') ? 'block' : 'none';
    }

const Hamburguer = document.getElementById('Hamburguer');
const menu = document.getElementById('menu');

function Menuclick() {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    } 
}
function MudeDisplay() {
    if (window.innerWidth > 768) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
function oculto() {
    if (window.innerWidth <= 768) {
        menu.style.display = 'none';
    }
}
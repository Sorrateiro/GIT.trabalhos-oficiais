function toggleVisibility() {
    const oculto = document.getElementById('oculto');
    const exames = document.getElementById('exames');
    const Fluoretaçao = document.getElementById("Fluoretaçao");
    const Clareamento  = document.getElementById("Clareamento");
    const Tratament = document.getElementById("Tratamento");
    const Restauraçoes   = document.getElementById("Restaurações");
    const Tratamentop  = document.getElementById("Tratamentop");
    const Canal  = document.getElementById("Canal");
    const Proteses = document.getElementById("Proteses ");
    const Odontopediatria  = document.getElementById("Odontopediatria ");
    const Periodontia  = document.getElementById("Periodontia ");
    const Ortodontia  = document.getElementById("Ortodontia");
    const lista00 = document.getElementById("lista00");
    const lista01 = document.getElementById("lista01");
    const lista02 = document.getElementById("lista02");
    const lista03 = document.getElementById("lista03");
    const lista04 = document.getElementById("lista04");
    const lista05 = document.getElementById("lista05");
    const lista06 = document.getElementById("lista06");
    const lista07 = document.getElementById("lista07");
    const lista08 = document.getElementById("lista08");
    const lista09 = document.getElementById("lista09");
    const lista10 = document.getElementById("lista10");
    const lista11 = document.getElementById("lista11");
    const lista12 = document.getElementById("lista12");
    // Inicialmente oculta a lista
  
    lista00.style.display = 'none';
    lista01.style.display = 'none';
    lista02.style.display = 'none';
    lista03.style.display = 'none';
    lista04.style.display = 'none';
    lista05.style.display = 'none';
    lista06.style.display = 'none';
    lista07.style.display = 'none';
    lista08.style.display = 'none';
    lista09.style.display = 'none';
    lista10.style.display = 'none';
    lista11.style.display = 'none';
    lista12.style.display = 'none';
 


    // Mostra a lista ao clicar no elemento oculto
    oculto.addEventListener('click', function () {
        lista00.style.display = lista00.style.display === 'none' ? 'block' : 'none';
    });
    exames.addEventListener('click', function () {
        lista01.style.display = lista01.style.display === 'none' ? 'block' : 'none';
    });

    Fluoretaçao.addEventListener('click', function () {
        lista02.style.display = lista02.style.display === 'none' ? 'block' : 'none';
    });
    Clareamento.addEventListener('click', function () {
        lista03.style.display = lista03.style.display === 'none' ? 'block' : 'none';
    });
    Tratament.addEventListener('click', function () {
        lista04.style.display = lista04.style.display === 'none' ? 'block' : 'none';
    });
    Restauraçoes.addEventListener('click', function () {
        lista05.style.display = lista05.style.display === 'none' ? 'block' : 'none';
    });
    Tratamentop.addEventListener('click', function () {
        lista06.style.display = lista06.style.display === 'none' ? 'block' : 'none';
    });
    Canal.addEventListener('click', function () {
        lista07.style.display = lista07.style.display === 'none' ? 'block' : 'none';
    });
    Proteses.addEventListener('click', function () {
        lista08.style.display = lista08.style.display === 'none' ? 'block' : 'none';
    });
    Odontopediatria.addEventListener('click', function () {
        lista09.style.display = lista09.style.display === 'none' ? 'block' : 'none';
    });
    Periodontia.addEventListener('click', function () {
        lista10.style.display = lista10.style.display === 'none' ? 'block' : 'none';
    });
    Ortodontia.addEventListener('click', function () {
        lista11.style.display = lista11.style.display === 'none' ? 'block' : 'none';
    });
    Implantes.addEventListener('click', function () {
        lista12.style.display = lista12.style.display === 'none' ? 'block' : 'none';
    });
}
document.addEventListener('DOMContentLoaded', toggleVisibility);

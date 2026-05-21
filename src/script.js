// BOTONES
// =========================

const buscarBtn =
    document.getElementById('buscarBtnHero');

const vacanteBtn =
    document.getElementById('publicarBtnHero');

const contactoBtn =
    document.getElementById('contactoBtn');

const contactoBtnNavbar =
    document.getElementById('contactoBtnNavbar');


// =========================
// ABRIR MODALES
// =========================

buscarBtn.addEventListener('click', () => {

    document
        .getElementById('empleos')
        .scrollIntoView({
            behavior: 'smooth'
        });

});


vacanteBtn.addEventListener('click', () => {

    document.getElementById(
        'vacanteModal'
    ).style.display = 'flex';

});


contactoBtn.addEventListener('click', (e) => {

    e.preventDefault();

    document.getElementById(
        'contactoModal'
    ).style.display = 'flex';

});


contactoBtnNavbar.addEventListener('click', () => {

    document.getElementById(
        'contactoModal'
    ).style.display = 'flex';

});


// =========================
// CERRAR MODALES
// =========================
cargarOfertas();
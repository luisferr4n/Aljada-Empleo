// =========================
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

function cerrarModal(id){

    document.getElementById(id)
    .style.display = 'none';

}


window.onclick = function(event){

    const vacanteModal =
        document.getElementById('vacanteModal');

    const contactoModal =
        document.getElementById('contactoModal');

    if(event.target === vacanteModal){

        vacanteModal.style.display = 'none';

    }

    if(event.target === contactoModal){

        contactoModal.style.display = 'none';

    }

}


// =========================
// VARIABLES
// =========================

let todasLasOfertas = [];


// =========================
// CARGAR OFERTAS
// =========================

async function cargarOfertas(){

    try{

        const respuesta =
            await fetch(`ofertas.json?t=${Date.now()}`);

        todasLasOfertas =
            await respuesta.json();

        mostrarOfertas(todasLasOfertas);

    }catch(error){

        console.log(
            'Error cargando ofertas'
        );

    }

}


// =========================
// MOSTRAR OFERTAS
// =========================

function mostrarOfertas(ofertas){

    const jobsGrid =
        document.querySelector('.jobs-grid');

    jobsGrid.innerHTML = '';


    if(ofertas.length === 0){

        jobsGrid.innerHTML = `

            <p class="sin-ofertas">
                No se encontraron ofertas.
            </p>

        `;

        return;

    }


    ofertas.forEach(oferta => {

        jobsGrid.innerHTML += `

            <article class="job-card">

                <h3>
                    ${oferta.puesto || ''}
                </h3>

                <p>
                    ${oferta.empresa || ''}
                </p>

                <span>
                    ${oferta.ubicacion || ''}
                </span>

                <button>
                    Ver oferta
                </button>

            </article>

        `;

    });

}


// =========================
// BUSCADOR
// =========================

const buscadorForm =
    document.getElementById('buscadorForm');


buscadorForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const texto =
        document
        .getElementById('buscarInput')
        .value
        .toLowerCase();


    const filtradas =
        todasLasOfertas.filter(oferta => {

            return (

                (oferta.puesto || '')
                .toLowerCase()
                .includes(texto)

                ||

                (oferta.empresa || '')
                .toLowerCase()
                .includes(texto)

                ||

                (oferta.ubicacion || '')
                .toLowerCase()
                .includes(texto)

            );

        });


    mostrarOfertas(filtradas);

});


// =========================
// INICIAR
// =========================

cargarOfertas();
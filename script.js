// =========================
// ABRIR MODALES
// =========================

const buscarBtn =
    document.querySelector('.primary-btn');

const vacanteBtn =
    document.querySelector('.secondary-btn');


buscarBtn.addEventListener('click', () => {

    document.getElementById(
        'buscarModal'
    ).style.display = 'flex';

});


vacanteBtn.addEventListener('click', () => {

    document.getElementById(
        'vacanteModal'
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

    const buscarModal =
        document.getElementById('buscarModal');

    const vacanteModal =
        document.getElementById('vacanteModal');

    if(event.target === buscarModal){

        buscarModal.style.display = 'none';

    }

    if(event.target === vacanteModal){

        vacanteModal.style.display = 'none';

    }

}

// =========================
// CARGAR OFERTAS
// =========================

async function cargarOfertas(){

    try{

        const respuesta =
            await fetch(
                'https://aljada-empleo.great-site.net/obtener_ofertas.php'
            );

        const ofertas =
            await respuesta.json();

        const jobsGrid =
            document.querySelector('.jobs-grid');

        jobsGrid.innerHTML = '';

        ofertas.reverse().forEach(oferta => {

            jobsGrid.innerHTML += `

                <article class="job-card">

                    <h3>
                        ${oferta.puesto}
                    </h3>

                    <p>
                        ${oferta.empresa}
                    </p>

                    <span>
                        ${oferta.ubicacion}
                    </span>

                    <p>
                        ${oferta.tipo}
                    </p>

                    <button>
                        Ver oferta
                    </button>

                </article>

            `;

        });

    }catch(error){

        console.log(error);

        console.log(
            'Error cargando ofertas'
        );

    }

}


// =========================
// EJECUTAR
// =========================

cargarOfertas();

// =========================
// PUBLICAR OFERTA
// =========================

const formulario =
    document.getElementById('formularioOferta');

formulario.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData =
        new FormData(formulario);

    try{

        const respuesta =
            await fetch(

                'https://aljada-empleo.great-site.net/publicar.php',

                {
                    method: 'POST',
                    body: formData
                }

            );

        const datos =
            await respuesta.json();

        alert(datos.message);

        formulario.reset();

        cargarOfertas();

    }catch(error){

        console.log(error);

        alert('Error publicando oferta');

    }

});
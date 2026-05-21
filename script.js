// =========================
// MODAL
// =========================

const botonesVacante =
    document.querySelectorAll('.secondary-btn');

botonesVacante.forEach(btn => {

    btn.addEventListener('click', () => {

        document.getElementById(
            'vacanteModal'
        ).style.display = 'flex';

    });

});

function cerrarModal(id){

    document.getElementById(id)
        .style.display = 'none';

}

window.onclick = function(event){

    const modal =
        document.getElementById('vacanteModal');

    if(event.target === modal){

        modal.style.display = 'none';

    }

}


// =========================
// CARGAR OFERTAS
// =========================

async function cargarOfertas(){

    try{

        const respuesta = await fetch(
            'https://aljada-empleo.great-site.net/obtener_ofertas.php'
        );

        const ofertas = await respuesta.json();

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

        console.log('Error cargando ofertas');

    }

}

cargarOfertas();


// =========================
// PUBLICAR OFERTA
// =========================

document.addEventListener('DOMContentLoaded', () => {

    const formulario =
        document.getElementById('formularioOferta');

    formulario.addEventListener('submit', async (e) => {

        e.preventDefault();

        const formData =
            new FormData(formulario);

        try{

            const respuesta = await fetch(

                'https://aljada-empleo.great-site.net/publicar.php',

                {
                    method: 'POST',
                    body: formData
                }

            );

            const texto =
                await respuesta.text();

            console.log(texto);

            const datos =
                JSON.parse(texto);

            alert(datos.message);

            if(datos.success){

                formulario.reset();

                cerrarModal('vacanteModal');

                cargarOfertas();

            }

        }catch(error){

            console.log(error);

            alert('Error publicando oferta');

        }

    });

});

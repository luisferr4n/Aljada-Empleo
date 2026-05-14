async function cargarOfertas(){

    try{

        const respuesta =
            await fetch(
                'https://aljada-empleo.great-site.net/ofertas.json'
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
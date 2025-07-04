// Importem el WebComponent per al producte
import './components/product-card.js';


function gestionaLinks() {
            // TO-DO (Exercici 1)
            const links = document.querySelectorAll('nav a');
            const seccions = document.querySelectorAll('main > section');

            function mostraSeccio(id) {
                seccions.forEach(sec => sec.classList.remove('active'));
                document.getElementById(id).classList.add('active');
            }

            mostraSeccio('inici');
            links.forEach(link => {
                link.onclick = e => {
                    e.preventDefault();
                    mostraSeccio(link.getAttribute('href').substring(1));
                };
            });
        }


function carregaProductes() {
    // TO-DO (Exercici 3)
    // Realitza una petició a l'endpoint /get-products del servidor, i genera el product-card corresponent per a cada producte.
    fetch('http://localhost:3000/get-products')
    .then(res => res.json())
    .then(productes => {
      const llista = document.getElementById('llista-productes');
      llista.innerHTML = '';
      select.innerHTML = '';
      
      productes.forEach(p => {
        const card = document.createElement('product-card');
        card.setAttribute('tinomtle', p.nom);
        card.setAttribute('preu_unitari', p.preu_unitari);
        card.setAttribute('imatge', p.imatge);
        card.setAttribute('descripcio', p.descripcio);
        llista.appendChild(card);
    // TO-DO (Exercici 4)
        const option = document.createElement('option');
        option.value = p.title;
        option.textContent = p.title;
        select.appendChild(option);
        });
    });
}


function preparaFormulari() {
    const form = document.getElementById('enviarCita');


    // Exercici 5

    form.addEventListener('submit', async (e) => {
        // Inhibim l'enviament automàtic del formulari
        e.preventDefault();

        // Agafem les dades del formulari en formData, com a parells clau/valor
        // Podeu consultar la documentació de la interfície FormData en: 
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData
        // Per agafar les propietats des d'aquesta interfície fem ús de form.get('nom_del_camp_del_formulari')

        const formData = new FormData(form);

        const dades = {
            nom: formData.get('nom'),
            email: formData.get('email'),
            data: formData.get('data'),
            producte: formData.get('producte')
        };

        fetch('http://localhost:3000/concertar-cita', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dades)
        })
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'confirmacio-cita.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        });
        /* TO-DO
 
            Prepara un objece JSON amb la informació guardada al formulari

        */

        // Preparem l'objecte amb les dades per enviar al servidor
        // I l'enviem, fent ús d'una petició POST
        // Recordeu convertir el JSON a un string per enviar-lo al servidor
        // Una vegada rebuda la resposta, creeu una URL amb ell, un enllaç
        // i forceu el clic en ell per descarregar el document.

    });

}

// Esperem a que el document estigui completament carregat
document.addEventListener('DOMContentLoaded', () => {

    carregaProductes();
    gestionaLinks();
    preparaFormulari();

});

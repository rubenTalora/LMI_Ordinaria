// Importem el WebComponent per al producte
import './components/product-card.js';


function gestionaLinks() {
    // TO-DO (Exercici 1)
}


function carregaProductes() {
    // TO-DO (Exercici 3)
    // Realitza una petició a l'endpoint /get-products del servidor, i genera el product-card corresponent per a cada producte.

    // TO-DO (Exercici 4)

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

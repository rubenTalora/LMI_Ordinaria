// Definim el Web Component per als productes
class ProductCard extends HTMLElement {
    constructor() {
        super();
        // TO-DO: Creem un shadow DOM per al component
        
    }

    // El mètode per actualitzar el contingut del component
    connectedCallback() {
        // TO-DO: Obtenim les propietats del producte des de l'atribut del component
        
        //TO-DO: Definim el contingut HTML del producte
    }
}

// Registrem el Web Component
customElements.define('product-card', ProductCard);
